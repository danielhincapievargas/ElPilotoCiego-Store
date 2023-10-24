import React from 'react'
import styles from '@components/CheckoutHeader/checkoutHeader.module.css'
import Image from 'next/image'
<<<<<<< HEAD
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { useRouter } from 'next/router'


const CheckoutHeader = () => {
  const router = useRouter()
=======
import { FaRegUserCircle } from 'react-icons/fa'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { Spin as Hamburger } from 'hamburger-react'

const CheckoutHeader = () => {
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  return (
    <div className={styles.header_container}>
    <div className={styles.header}>

<<<<<<< HEAD
        <Image
          onClick={() => router.push('/')}
          className={styles.logo_checkout}
          src="/elpiloto-logo.png"
          alt="El Piloto Ciego Logo"
          width={140}
          height={140}
          priority
        />

        <HiOutlineShoppingBag
          className={styles.cart_icon}
          onClick={() => router.push('/cart')}
        />
=======
        <Image 
        className={styles.logo_checkout}
        src="/elpiloto-logo.png"
        alt="El Piloto Ciego Logo"
        width={140}
        height={140}
        priority
        />

        <HiOutlineShoppingBag className={styles.cart_icon} />
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

    </div>
  </div>
  )
}

export default CheckoutHeader