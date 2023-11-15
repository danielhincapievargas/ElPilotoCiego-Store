import React from 'react'
import styles from '@components/Checkout/checkout.module.css'
import CheckoutHeader from '@components/CheckoutHeader'
import OrderSummary from '@components/OrderSummary'
import DeliveryForm from '@components/DeliveryForm'
import Payment from '@components/Payment'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OCnCQGUmwQ5svChuuMvZBPcFzYiPebwXMYWVd6at863IdmwVmMvCuwi5a4geVbRz1KXUXxrmVSP3hRCQqXTuBAm00E4I0gAg6');

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
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </div>
        </form>
      </div>
    </>
  )
}

export default Checkout