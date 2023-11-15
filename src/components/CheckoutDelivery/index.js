import React from 'react'
import styles from '@components/CheckoutDelivery/checkoutDelivery.module.css'
import CheckoutHeader from '@components/CheckoutHeader'
import OrderSummary from '@components/OrderSummary'
import DeliveryForm from '@components/DeliveryForm'

const CheckoutDelivery = () => {
  return (
    <>
      <CheckoutHeader />
      <div className={styles.checkout_container}>
        <OrderSummary />
        <div className={styles.checkout_forms}>
          <div className={styles.delivery_form}>
            <DeliveryForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutDelivery
