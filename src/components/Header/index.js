import React, { useState } from 'react'
import styles from '@components/Header/header.module.css'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { Spin as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [logged, setLogged] = useState(false)
  return (

    <div className={styles.header_container}>
      <div className={styles.header}>

        <div className={styles.left_header}>
          <div className={styles.login_container}>
            <FaRegUserCircle className={styles.user_icon} onClick={() => router.push('/login')} />
            <div className={styles.logged_card}>
              <div className={styles.logged_list}>
                <div className={styles.logged_list_tag}>Profile</div>
                <div className={styles.logged_list_tag}>Logout</div>
              </div>
            </div>
          </div>
          <ul>
            <li onClick={() => router.push('/apparel')}>APPAREL</li>
            <li onClick={() =>router.push('/accesories')}>ACCESORIES</li>
          </ul>

        </div>

        <div className={styles.middle_block}>|</div>
        <Image
          onClick={() =>router.push('/')} 
          className={styles.logo}
          src="/elpiloto-logo.png"
          alt="El Piloto Ciego Logo"
          width={200}
          height={200}
          priority
        />

        <div className={styles.right_header}>

          <ul>
            <li onClick={() =>router.push('/music')}>MUSIC</li>
            <li>ABOUT</li>
          </ul>
          <HiOutlineShoppingBag onClick={() =>router.push('/cart')} className={styles.cart_icon} />
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

export default Header