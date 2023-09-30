import React from 'react'
import styles from '@components/CreateAccount/createAccount.module.css'
import { changeForm, form } from '@/redux/slices/formSlice'
import { useDispatch, useSelector } from 'react-redux'

const url = 'http://localhost:8080/api/users'

const CreateAccount = () => {
  const dispatch = useDispatch()
  const currentForm = useSelector(form)
  const {
    userFirstName,
    userLastName,
    userEmail,
    userPassword
  } = currentForm.form

  const handleChange = (e) => {
    const {name, value} = e.target
    dispatch(changeForm({name, value}))
  }

  const fetchCreateAccount = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const res = await response.json();
      console.log('respuesta del Create Account', res);
      return res 
    } catch (error) {
      console.log('Error en fetchCreateAccount', error)
    }
  }

  const dataCreateAccount = {userFirstName, userLastName, userEmail, userPassword}

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCreateAccount(url, dataCreateAccount)
  }

  return (
    <div className={styles.create_account}>
      <h2>CREATE ACCOUNT</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="userFirstName">FIRST NAME</label>
          <input
            id="userFirstName"
            type="text"
            name="userFirstName"
            value={userFirstName}
            placeholder="First name"
            onChange={handleChange}
            required 
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="last_name">LAST NAME</label>
          <input
            id="last_name"
            type="text"
            name="userLastName"
            value={userLastName}
            placeholder="Last name"
            onChange={handleChange}
            required
          />
        </div>
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
        <div className={styles.create_account_button}>
          <button type="submit" className={styles.create_button}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount