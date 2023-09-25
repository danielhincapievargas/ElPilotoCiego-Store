import React from 'react'
import styles from '@components/Checkout/checkout.module.css'
import CheckoutHeader from '@components/CheckoutHeader'
import OrderSummary from '@components/OrderSummary'
import DeliveryForm from '@components/DeliveryForm'
import Payment from '@components/Payment'

const Checkout = () => {
  return (
    <>
      <CheckoutHeader />
      <div className={styles.checkout_container}>
        <OrderSummary />
        <form className={styles.checkout_forms}>
          <div className={styles.delivery_form}>
            <DeliveryForm />
          </div>
          <div className={styles.payment_form}>
            <Payment />
          </div>
        </form>
      </div>
    </>
  )
}

export default Checkout