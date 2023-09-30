import React from 'react'
import styles from '@components/Login/login.module.css'
import { changeForm, form } from '@/redux/slices/formSlice'
import { useDispatch, useSelector } from 'react-redux'

const url = 'http://localhost:8080/auth/local/login'

const Login = () => {
  const dispatch = useDispatch()
  const currentForm = useSelector(form)
  const {userEmail, userPassword} = currentForm.form

  const handleChange = (e) => {
    const {name, value} = e.target
    dispatch(changeForm({name, value}))
  }

  const fetchLogin = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }       
      });
      const res = await response.json();
      console.log('respuesta del login', res);
      return res 
    } catch (error) {
      console.log('Error en fetchLogin', error)
    }
  }

  const dataLogin = {userEmail, userPassword}

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLogin(url, dataLogin)
  }

  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            type="email"
            name="userEmail"
            value={userEmail}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            name="userPassword"
            value={userPassword}
            placeholder="*************"
            onChange={handleChange}
            required
          />
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