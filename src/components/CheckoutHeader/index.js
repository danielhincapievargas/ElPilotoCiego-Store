import React from 'react'
import styles from '@components/CheckoutHeader/checkoutHeader.module.css'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { Spin as Hamburger } from 'hamburger-react'

const CheckoutHeader = () => {
  return (
    <div className={styles.header_container}>
    <div className={styles.header}>

        <Image 
        className={styles.logo_checkout}
        src="/elpiloto-logo.png"
        alt="El Piloto Ciego Logo"
        width={140}
        height={140}
        priority
        />

        <HiOutlineShoppingBag className={styles.cart_icon} />

    </div>
  </div>
  )
}

export default CheckoutHeader