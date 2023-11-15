import React from 'react'
import styles from '@components/CheckoutPayment/checkoutPayment.module.css'
import CheckoutHeader from '@components/CheckoutHeader'
import OrderSummary from '@components/OrderSummary'
import Payment from '@components/Payment'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OCnCQGUmwQ5svChuuMvZBPcFzYiPebwXMYWVd6at863IdmwVmMvCuwi5a4geVbRz1KXUXxrmVSP3hRCQqXTuBAm00E4I0gAg6');

const CheckoutDelivery = () => {
  return (
    <>
      <CheckoutHeader />
      <div className={styles.checkout_container}>
        <OrderSummary />
        <div className={styles.checkout_forms}>
          <div className={styles.payment_form}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutDelivery