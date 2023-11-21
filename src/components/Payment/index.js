import React from 'react'
import styles from '@components/Payment/payment.module.css'
import { useRouter } from 'next/router'
import { 
  useElements, 
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js'
import { emptyCart } from '@/redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Payment = () => {
  const router = useRouter()
  const stripe = useStripe();
  const elements = useElements();
  const currentCart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  let total = 0;

  currentCart.cart.map((item) => {
    const subtotal = item.productCount * item.productPrice;
    total += subtotal
  })

  console.log('Total', total);

  const fetchPayment = async (url, data) => {
    console.log("Datos", data);
    console.log("URL", url);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();

      return res
    } catch (error) {
      alert('Error en fetchPayment', error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {

      const url = "http://localhost:8080/api/checkout"
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(
          CardNumberElement,
          CardExpiryElement,
          CardCvcElement
        )
      })
  
      console.log("paymentMethod", paymentMethod);
      if(error) {
        console.log(error);
        return
      }
  
      const data = {
        paymentMethod,
        amount: total * 100
      }
  
      const response = await fetchPayment(url, data)

      alert('Gracias por tu compra')

      dispatch(emptyCart())

      console.log(currentCart);
  
      //router.push('/successful_payment')
    } catch (error){
      console.log(error.message);
    } finally{
      //limpiar formulario
      elements.getElement(
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement
      ).clear()
    }

  }

  return (
    <>
    
      <form onSubmit={ handleSubmit } className={styles.payment_form}>

        <h2 className={styles.payment}>PAYMENT</h2>

        <div className={styles.form_group}>
          <label htmlFor="card_name">NAME ON CARD</label>
          <input className={styles.card_name} id="card_name" type="text" placeholder="" required />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="card_number">CARD NUMBER</label>
          <CardNumberElement className={styles.stripe_number} />
          {/* <input id="card_number" type="text" placeholder="" required /> */}
        </div>

        <div className={styles.groups}>
          <div className={styles.group}>
            <label htmlFor="expiration">EXPIRATION</label>
            <CardExpiryElement className={styles.stripe_expiration} />
            {/* <input id="expiration" type="text" placeholder="(MM/YY)" required /> */}
        </div>

        <div className={styles.group}>
            <label htmlFor="cvc">CVC</label>
            <CardCvcElement className={styles.stripe_cvc} />
            {/* <input id="cvc" type="text" placeholder="" required /> */}
          </div>
        </div>
        
        <div className={styles.payment_submit}>
          <button
            /* onClick={() => router.push('/successful_payment')} */
            className={styles.payment_button}
            type="submit"
            >MAKE PAYMENT</button>
        </div> 

      </form>

      {/* <form onSubmit={ handleSubmit } className={styles.card_element}>
        <CardElement />
        <button className={styles.card_element_btn} type='submit'>Pagar</button>
      </form> */}
  </>
  )
}

export default Payment