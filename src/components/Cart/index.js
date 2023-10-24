import React from 'react'
import styles from '@components/Cart/Cart.module.css'
import CartProduct from '@components/CartProduct'
<<<<<<< HEAD
import { cart } from '@/redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '@/redux/slices/cartSlice'
import { useRouter } from 'next/router'

const Cart = () => {
  const currentCart = useSelector(cart)
  const dispatch = useDispatch()
  const router = useRouter()

  let total = 0;

  const handleRemove = (e) => {
    const itemName = e.currentTarget.getAttribute("nombre");
    const itemSize = e.currentTarget.getAttribute("talla");

    const payload = {
      productName: itemName,
      productSize: itemSize
    }

    dispatch(removeFromCart(payload))
  }

  return (
    <div className={styles.cart_container}>
      <h2 className={styles.cart_title}>YOUR CART</h2>
      <div 
        className={styles.continue_shopping}
        onClick={() => router.push('/')}
      >Continue shopping</div>
=======

const Cart = () => {
  return (
    <div className={styles.cart_container}>
      <h2 className={styles.cart_title}>YOUR CART</h2>
      <div className={styles.continue_shopping}>Continue shopping</div>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      <table className={styles.cart_table}>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th className={styles.price_title}>PRICE</th>
            <th className={styles.quantity_title}>QUANTITY</th>
            <th className={styles.total_title}>TOTAL</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {currentCart.cart && currentCart.cart.map((item) => {
            const subtotal = item.productCount * item.productPrice;
            total += subtotal;
          return (
            <tr key={`${item._id}${item.productSize}`}>
              <td className={styles.cart_product}>
                <CartProduct
                  page="cart"
                  productImage={item.productImage}
                  productName={item.productName}
                  productType={item.productType}
                  productSize={item.productSize}
                />
                <div nombre={item.productName} talla={item.productSize} className={styles.remove_product} onClick={(e) => handleRemove(e)}>remove</div>
              </td>
              <td className={styles.product_price}>
                <div className={styles.product_price_value}>{item.productPrice}</div>
                <div className={styles.price_qty}>
                  <div className={styles.qty}>QTY</div>
                  <div className={styles.price_counter} >
                    <div className={styles.count}>{item.productCount}</div>
                  </div>
                </div>
              </td>
              <td className={styles.product_quantity}>
                <div className={styles.counter}>
                  <div className={styles.count}>{item.productCount}</div>
                </div>
              </td>
              <td className={styles.product_total}>{item.productCount * item.productPrice}</td>
            </tr>
          )
          })}
=======
          <tr>
            <td>
              <CartProduct />
            </td>
            <td className={styles.product_price}>
              <div className={styles.product_price_value}>{'$30.00'}</div>
              <div className={styles.price_qty}>
                <div className={styles.qty}>QTY</div>
                <div className={styles.price_counter} >
                  <button>-</button>
                  <div className={styles.count}>1</div>
                  <button>+</button>
                </div>
              </div>
            </td>
            <td className={styles.product_quantity}>
              <div className={styles.counter}>
                <button>-</button>
                <div className={styles.count}>1</div>
                <button>+</button>
              </div>
            </td>
            <td className={styles.product_total}>{'$30.00'}</td>
          </tr>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
        </tbody>
      </table>
      <div className={styles.subtotal}>
        <div className={styles.subtotal_title}>Subtotal</div>
<<<<<<< HEAD
        <div className={styles.subtotal_value}>{total}</div>
      </div>
      <div className={styles.checkout}>
        <button 
          className={styles.checkout_button}
          onClick={() => router.push('/checkout')}
        >Checkout</button>
=======
        <div className={styles.subtotal_value}>{'$30.00 USD'}</div>
      </div>
      <div className={styles.checkout}>
        <button className={styles.checkout_button}>Checkout</button>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      </div>
    </div>
  )
}

export default Cart