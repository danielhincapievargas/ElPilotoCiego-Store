import React from 'react'
import styles from '@components/CreateAccount/createAccount.module.css'

const CreateAccount = () => {
  return (
    <div className={styles.create_account}>
      <h2>CREATE ACCOUNT</h2>
      <form>
        <div className={styles.form_group}>
          <label htmlFor="first_name">FIRST NAME</label>
          <input id="first_name" type="text" placeholder="First name" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="last_name">LAST NAME</label>
          <input id="last_name" type="text" placeholder="Last name" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">EMAIL</label>
          <input id="email" type="email" placeholder="Enter your email" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">PASSWORD</label>
          <input id="password" type="password" placeholder="*************" required />
        </div>
        <div className={styles.create_account_button}>
          <button type="submit" className={styles.create_button}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount