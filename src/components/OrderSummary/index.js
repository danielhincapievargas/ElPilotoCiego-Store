import React from 'react'
import styles from '@components/OrderSummary/orderSummary.module.css'
import CartProduct from '../CartProduct'

const OrderSummary = () => {
  return (
    <div className={styles.order_summary}>
      <div className={styles.order_title}>
        <h3>Order Summary</h3>
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
      </div>
    </div>
  )
}

export default OrderSummary