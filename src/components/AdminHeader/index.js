import React from 'react'
import styles from '@components/AdminHeader/adminHeader.module.css'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
<<<<<<< HEAD
=======
import { HiOutlineShoppingBag } from "react-icons/hi2"
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
import { Spin as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router'

const AdminHeader = () => {
  const router = useRouter()
  return (
  <div className={styles.header_container}>
    <div className={styles.header}>

      <div className={styles.left_header}>

        <FaRegUserCircle className={styles.user_icon}/>
        <ul>
          <li onClick={() => router.push('/admin/products')}>PRODUCTS</li>
          <li onClick={() =>router.push('/admin/orders')}>ORDERS</li>
        </ul>

      </div>

      <div className={styles.middle_block}>|</div>
      <Image
        className={styles.logo}
<<<<<<< HEAD
        onClick={() => router.push('/')}
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
        src="/elpiloto-logo.png"
        alt="El Piloto Ciego Logo"
        width={200}
        height={200}
        priority
      />

      <div className={styles.right_header}>

        <ul>
          <li onClick={() =>router.push('/admin/users')}>USERS</li>
          <li onClick={() =>router.push('/admin/newsletter')}>NEWSLETTER</li>
        </ul>
<<<<<<< HEAD
        <div className={styles.admin}>ADMIN</div>
=======
        <HiOutlineShoppingBag onClick={() =>router.push('/cart')} className={styles.cart_icon} />
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
        <div className={styles.hamburger}>
          <Hamburger
            size={20}
            direction="right"
            duration={0.7}
            distance="lg"
            color="#fff" 
          />
        </div>

      </div>
    </div>
  </div>
  )
}

export default AdminHeader