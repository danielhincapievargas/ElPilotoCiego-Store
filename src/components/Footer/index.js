import React from 'react'
import styles from '@components/Footer/footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_logo}>
        <Image 
        className={styles.logo}
        src="/elpiloto-logo.png"
        alt="El Piloto Ciego Logo"
        width={150}
        height={150}
        priority
        />
      </div>
      <div className={styles.footer_section}>
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.footer_section}>
        <ul>
          <li>Apparel</li>
          <li>Accesories</li>
          <li>Music</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.footer_section}>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Do not sell or share my personal information</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer