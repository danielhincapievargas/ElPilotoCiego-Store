import React from 'react'
import styles from '@components/Cart/Cart.module.css'
import CartProduct from '@components/CartProduct'
import { cart } from '@/redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '@/redux/slices/cartSlice'
import { useRouter } from 'next/router'
import formatPrice from '@/services/formatPrice'

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

      { currentCart.cart.length === 0 ?
      <div className={styles.empty_cart_container}>
        <div className={styles.empty_cart}>Your cart is currently empty.</div>
        <button className={styles.shopping_button} onClick={() => router.push('/')} >CONTINUE SHOPPING &rarr;</button>
      </div>
      : 
      <>
        <div 
          className={styles.continue_shopping}
          onClick={() => router.push('/')}
        >Continue shopping</div>
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
                  <div className={styles.product_price_value}>{formatPrice(item.productPrice)}</div>
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
                <td className={styles.product_total}>{formatPrice(item.productCount * item.productPrice)}</td>
              </tr>
            )
            })}
          </tbody>
        </table>

        <div className={styles.subtotal}>
          <div className={styles.subtotal_title}>Subtotal</div>
          <div className={styles.subtotal_value}>{formatPrice(total)}</div>
        </div>

        <div className={styles.checkout}>
          <button 
            className={styles.checkout_button}
            onClick={() => router.push('/checkout/delivery_contact')}
          >Checkout</button>
        </div>
      </>
      }

    </div>
  )
}

export default Cart