import React from 'react'
import styles from '@components/Login/login.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <form>
        <div className={styles.form_group}>
          <label htmlFor="email">EMAIL</label>
          <input id="email" type="email" placeholder="Enter your email" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">PASSWORD</label>
          <input id="password" type="password" placeholder="*************" required />
        </div>
        <div className={styles.forgot}>Forgot your password?</div>
        <div className={styles.sign_in}>
          <button type="submit" className={styles.sign_in_button}>Sign In</button>
        </div>
      </form>
      <div className={styles.create_account}>Create account</div>
    </div>
  )
}

export default Login