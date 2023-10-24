import React from 'react'
import styles from '@components/OrderSummary/orderSummary.module.css'
import CartProduct from '../CartProduct'
<<<<<<< HEAD
import { cart } from '@/redux/slices/cartSlice'
import { useSelector } from 'react-redux'

const OrderSummary = () => {
  const currentCart = useSelector(cart)
  let total = 0;
=======

const OrderSummary = () => {
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  return (
    <div className={styles.order_summary}>
      <div className={styles.order_title}>
        <h3>Order Summary</h3>
<<<<<<< HEAD
      </div>
      {currentCart && currentCart.cart.map((item) => {
        const subtotal = item.productCount * item.productPrice;
        total += subtotal;
        return(
        <div key={item._id} className={styles.order_list}>
          <div className={styles.order_product}>
            <CartProduct 
              page="checkout"
              productImage={item.productImage}
              productName={item.productName}
              productType={item.productType}
              productSize={item.productSize}
              productCount={item.productCount}
            />
            <div>{item.productPrice * item.productCount}</div>
          </div>
        </div>
        )
      })}
      <div className={styles.order_total}>
        <div className={styles.total_title}>Total</div>
        <div>{total}</div>
=======
        <div>{'$60.00'}</div>
      </div>
      <div className={styles.order_list}>
        <div className={styles.order_product}>
          <CartProduct />
          <div>{'$30.00'}</div>
        </div>
        <div className={styles.order_product}>
          <CartProduct />
          <div>{'$30.00'}</div>
        </div>
      </div>
      <div className={styles.order_total}>
        <div className={styles.total_title}>Total</div>
        <div>{'$60.00'}</div>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      </div>
    </div>
  )
}

export default OrderSummary