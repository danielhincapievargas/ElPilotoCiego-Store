<<<<<<< HEAD
import React, { useState } from 'react'
import styles from '@components/Login/login.module.css'
import { changeForm, form } from '@/redux/slices/formSlice'
import { getLoggedUser, stateUsers } from '@/redux/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
=======
import React from 'react'
import styles from '@components/Login/login.module.css'
import { changeForm, form } from '@/redux/slices/formSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

const url = 'http://localhost:8080/auth/local/login'

const Login = () => {
<<<<<<< HEAD
  const cookies = new Cookies()
  const dispatch = useDispatch()
  const router = useRouter()
  
  const { loggedUser } = useSelector(stateUsers)

  const currentForm = useSelector(form)
  const {userEmail, userPassword} = currentForm.form


=======
  const dispatch = useDispatch()
  const router = useRouter()
  const currentForm = useSelector(form)
  const {userEmail, userPassword} = currentForm.form

>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
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
<<<<<<< HEAD
      dispatch(getLoggedUser(res))

      return res
    } catch (error) {
      alert('Error en fetchLogin', error)
    }
  }



  const dataLogin = {userEmail, userPassword}

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchLogin(url, dataLogin)
    await router.push('/')
  }
  
  cookies.set('token', loggedUser.token, { path: "/" })
  cookies.set('userFirstName', loggedUser.profile.userFirstName, { path: "/" })
  cookies.set('userLastName', loggedUser.profile.userLastName, { path: "/" })
  cookies.set('userEmail', loggedUser.profile.userEmail, { path: "/" })
  cookies.set('userRole', loggedUser.profile.userRole, { path: "/" })
  

=======
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
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

  return (
    <div className={styles.login}>
      <h2>Login</h2>
<<<<<<< HEAD
      <form onSubmit={(e) => {handleSubmit(e)}}>
=======
      <form onSubmit={(e) => {handleSubmit(e); router.push('/')}}>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
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
<<<<<<< HEAD
      <div className={styles.create_account} onClick={(e) => {handleSubmit(e); router.push('/create_account')}}>Create account</div>
=======
      <div className={styles.create_account}>Create account</div>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
    </div>
  )
}

export default Login