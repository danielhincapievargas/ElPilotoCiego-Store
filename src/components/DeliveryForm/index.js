import React from 'react'
import styles from '@components/DeliveryForm/deliveryForm.module.css'
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { changeDeliveryForm, form } from '@/redux/slices/formSlice'
import { useDispatch, useSelector } from 'react-redux'

const DeliveryForm = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const currentForm = useSelector(form)
  const {
    orderEmail,
    orderCountry,
    orderFirstName,
    orderLastName,
    orderAddress,
    orderCity,
    orderPostcode,
    orderPhone,
  } = currentForm.deliveryForm

  const handleChange = (e) => {
    const {name, value} = e.target
    dispatch(changeDeliveryForm({name, value}))
  }

=======

const DeliveryForm = () => {
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  return (
    <div className={styles.delivery_form}>

      <h2 className={styles.contact}>CONTACT</h2>
      <div className={styles.form_group}>
<<<<<<< HEAD
        <label htmlFor="orderEmail">EMAIL</label>
        <input
          id="orderEmail"
          type="email"
          placeholder="Enter your email"
          required
          name="orderEmail"
          value={orderEmail}
          onChange={handleChange}
        />
        <div className={styles.have_account}>Have an account? 
          <span onClick={() => router.push('/login')}>Login</span>
        </div>
=======
        <label htmlFor="email">EMAIL</label>
        <input id="email" type="email" placeholder="Enter your email" required />
        <div className={styles.have_account}>Have an account? <span>Login</span></div>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      </div>

      <h2 className={styles.delivery}>DELIVERY</h2>

      <div className={styles.form_group}>
<<<<<<< HEAD
        <label htmlFor="orderCountry">COUNTRY</label>
        <input
          id="orderCountry"
          type="text"
          placeholder=""
          required
          name="orderCountry"
          value={orderCountry}
          onChange={handleChange}
        />
=======
        <label htmlFor="first_name">COUNTRY</label>
        <input id="first_name" type="text" placeholder="" required />
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      </div>

      <div className={styles.groups}>
        <div className={styles.group}>
<<<<<<< HEAD
          <label htmlFor="orderFirstName">FIRST NAME</label>
          <input
            id="orderFirstName"
            type="text"
            placeholder="First name"
            required
            name="orderFirstName"
            value={orderFirstName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="orderLastName">LAST NAME</label>
          <input
            id="orderLastName"
            type="text"
            placeholder="Last name"
            required
            name="orderLastName"
            value={orderLastName}
            onChange={handleChange}
          />
=======
          <label htmlFor="first_name">FIRST NAME</label>
          <input id="first_name" type="text" placeholder="First name" required />
        </div>
        <div className={styles.group}>
          <label htmlFor="last_name">LAST NAME</label>
          <input id="last_name" type="text" placeholder="Last name" required />
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
        </div>
      </div>
      
      <div className={styles.form_group}>
<<<<<<< HEAD
        <label htmlFor="orderAddress">ADDRESS</label>
        <input
          id="orderAddress"
          type="text"
          placeholder=""
          required
          name="orderAddress"
          value={orderAddress}
          onChange={handleChange}
        />
=======
        <label htmlFor="first_name">ADDRESS</label>
        <input id="first_name" type="text" placeholder="" required />
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      </div>

      <div className={styles.groups}>
        <div className={styles.group}>
<<<<<<< HEAD
          <label htmlFor="orderCity">CITY</label>
          <input
            id="orderCity"
            type="text"
            placeholder=""
            required
            name="orderCity"
            value={orderCity}
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="orderPostcode">POSTCODE</label>
          <input
            id="orderPostcode"
            type="text"
            placeholder=""
            name="orderPostcode"
            value={orderPostcode}
            onChange={handleChange}
          />
=======
          <label htmlFor="city">CITY</label>
          <input id="city" type="text" placeholder="" required />
        </div>
        <div className={styles.group}>
          <label htmlFor="postcode">POSTCODE</label>
          <input id="postcode" type="text" placeholder="" required />
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
        </div>
      </div>

      <div className={styles.form_group}>
<<<<<<< HEAD
        <label htmlFor="orderPhone">PHONE</label>
        <input
          id="orderPhone"
          type="text"
          placeholder=""
          required
          name="orderPhone"
          value={orderPhone}
          onChange={handleChange}
        />
=======
        <label htmlFor="phone">PHONE</label>
        <input id="phone" type="text" placeholder="" required />
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      </div>
  </div>
  )
}

export default DeliveryForm