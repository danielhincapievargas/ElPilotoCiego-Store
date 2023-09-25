import React from 'react'
import styles from '@components/DeliveryForm/deliveryForm.module.css'

const DeliveryForm = () => {
  return (
    <div className={styles.delivery_form}>

      <h2 className={styles.contact}>CONTACT</h2>
      <div className={styles.form_group}>
        <label htmlFor="email">EMAIL</label>
        <input id="email" type="email" placeholder="Enter your email" required />
        <div className={styles.have_account}>Have an account? <span>Login</span></div>
      </div>

      <h2 className={styles.delivery}>DELIVERY</h2>

      <div className={styles.form_group}>
        <label htmlFor="first_name">COUNTRY</label>
        <input id="first_name" type="text" placeholder="" required />
      </div>

      <div className={styles.groups}>
        <div className={styles.group}>
          <label htmlFor="first_name">FIRST NAME</label>
          <input id="first_name" type="text" placeholder="First name" required />
        </div>
        <div className={styles.group}>
          <label htmlFor="last_name">LAST NAME</label>
          <input id="last_name" type="text" placeholder="Last name" required />
        </div>
      </div>
      
      <div className={styles.form_group}>
        <label htmlFor="first_name">ADDRESS</label>
        <input id="first_name" type="text" placeholder="" required />
      </div>

      <div className={styles.groups}>
        <div className={styles.group}>
          <label htmlFor="city">CITY</label>
          <input id="city" type="text" placeholder="" required />
        </div>
        <div className={styles.group}>
          <label htmlFor="postcode">POSTCODE</label>
          <input id="postcode" type="text" placeholder="" required />
        </div>
      </div>

      <div className={styles.form_group}>
        <label htmlFor="phone">PHONE</label>
        <input id="phone" type="text" placeholder="" required />
      </div>
  </div>
  )
}

export default DeliveryForm