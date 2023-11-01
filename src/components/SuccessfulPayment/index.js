import React from 'react'
import styles from './successfulPayment.module.css'
import CheckoutHeader from '../CheckoutHeader'
import { useRouter } from 'next/router'

const SuccessfulPayment = () => {
  const router = useRouter()
  return (
    <>
      <CheckoutHeader />
      <div className={styles.successful_container}>
        <div className={styles.successful_payment}>
          <h2>THANKS FOR YOUR PURCHASE!</h2>
          <button onClick={() => router.push('/')}>BACK TO STORE &rarr;</button>
        </div>
      </div>
    </>
  )
}

export default SuccessfulPayment