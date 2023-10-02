import React from 'react'
import styles from '@components/Cart/Cart.module.css'
import CartProduct from '@components/CartProduct'
import { cart } from '@/redux/slices/cartSlice'
import { useSelector } from 'react-redux'

const Cart = () => {
  const currentCart = useSelector(cart)
  console.log("currentCart", currentCart.cart);
  let total = 0;
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
          {currentCart.cart && currentCart.cart.map((item) => {
            const subtotal = item.productCount * item.productPrice;
            total += subtotal;
          return (
            <tr key={`${item._id}${item.productSize}`}>
              <td>
                <CartProduct
                  page="cart"
                  productImage={item.productImage}
                  productName={item.productName}
                  productType={item.productType}
                  productSize={item.productSize}
                />
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
        </tbody>
      </table>
      <div className={styles.subtotal}>
        <div className={styles.subtotal_title}>Subtotal</div>
        <div className={styles.subtotal_value}>{total}</div>
      </div>
      <div className={styles.checkout}>
        <button className={styles.checkout_button}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart