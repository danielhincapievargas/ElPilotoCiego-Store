import React from 'react'
import styles from '@components/DeliveryForm/deliveryForm.module.css'
import { useRouter } from 'next/router'
import { changeForm, form } from '@/redux/slices/formSlice'
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
  } = currentForm.form

  const handleChange = (e) => {
    const {name, value} = e.target
    dispatch(changeForm({name, value}))
  }

  console.log("CurrentForm", currentForm.form);

  return (
    <div className={styles.delivery_form}>

      <h2 className={styles.contact}>CONTACT</h2>
      <div className={styles.form_group}>
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
      </div>

      <h2 className={styles.delivery}>DELIVERY</h2>

      <div className={styles.form_group}>
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
      </div>

      <div className={styles.groups}>
        <div className={styles.group}>
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
        </div>
      </div>
      
      <div className={styles.form_group}>
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
      </div>

      <div className={styles.groups}>
        <div className={styles.group}>
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
        </div>
      </div>

      <div className={styles.form_group}>
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
      </div>
  </div>
  )
}

export default DeliveryForm