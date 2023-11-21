import React from 'react'
import styles from '@components/CheckoutHeader/checkoutHeader.module.css'
import Image from 'next/image'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { useRouter } from 'next/router'
import { cart } from '@/redux/slices/cartSlice'
import { useSelector } from 'react-redux'


const CheckoutHeader = () => {
  const router = useRouter()
  const currentCart = useSelector(cart)
  return (
  <div className={styles.header_container}>
    <div className={styles.header}>

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
        {(currentCart.cart.length > 0) && <div className={styles.cart_quantity}>{currentCart.cart.length}</div>}

    </div>
  </div>
  )
}

export default CheckoutHeader