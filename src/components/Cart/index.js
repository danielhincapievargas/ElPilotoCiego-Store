import React from 'react'
import styles from '@components/Cart/Cart.module.css'
import CartProduct from '@components/CartProduct'

const Cart = () => {
  return (
    <div className={styles.cart_container}>
      <h2 className={styles.cart_title}>YOUR CART</h2>
      <div className={styles.continue_shopping}>Continue shopping</div>
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
        </tbody>
      </table>
      <div className={styles.subtotal}>
        <div className={styles.subtotal_title}>Subtotal</div>
        <div className={styles.subtotal_value}>{'$30.00 USD'}</div>
      </div>
      <div className={styles.checkout}>
        <button className={styles.checkout_button}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart