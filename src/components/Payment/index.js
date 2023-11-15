import React from 'react'
import styles from '@components/Payment/payment.module.css'
import { useRouter } from 'next/router'

const Payment = () => {
  const router = useRouter()
  return (
    <form className={styles.payment_form}>

      <h2 className={styles.payment}>PAYMENT</h2>

      <div className={styles.form_group}>
        <label htmlFor="card_number">CARD NUMBER</label>
        <input id="card_number" type="text" placeholder="" required />
      </div>

      <div className={styles.groups}>
        <div className={styles.group}>
          <label htmlFor="expiration">EXPIRATION</label>
          <input id="expiration" type="text" placeholder="(MM/YY)" required />
        </div>
        <div className={styles.group}>
          <label htmlFor="cvc">CVC</label>
          <input id="cvc" type="text" placeholder="" required />
        </div>
      </div>
      
      <div className={styles.form_group}>
        <label htmlFor="card_name">NAME ON CARD</label>
        <input id="card_name" type="text" placeholder="" required />
      </div>

      <div className={styles.payment_submit}>
        <button onClick={() => router.push('/successful_payment')} className={styles.payment_button} type="submit">MAKE PAYMENT</button>
      </div>

  </form>
  )
}

export default Payment