import React from 'react'
import styles from '@components/Header/header.module.css'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { Spin as Hamburger } from 'hamburger-react'

const Header = () => {
  return (

    <div className={styles.header_container}>
      <div className={styles.header}>

        <div className={styles.left_header}>

          <FaRegUserCircle className={styles.user_icon}/>
          <ul>
            <li>APPAREL</li>
            <li>ACCESORIES</li>
          </ul>

        </div>

        <div className={styles.middle_block}>|</div>
        <Image 
        className={styles.logo}
        src="/elpiloto-logo.png"
        alt="El Piloto Ciego Logo"
        width={200}
        height={200}
        priority
        />

        <div className={styles.right_header}>

          <ul>
            <li>MUSIC</li>
            <li>ABOUT</li>
          </ul>
          <HiOutlineShoppingBag className={styles.cart_icon} />
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