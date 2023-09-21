import React from 'react'
import styles from '@components/Footer/footer.module.css'
import Image from 'next/image'
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        <div className={styles.footer_left}>
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
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_section}>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className={styles.footer_newsletter}>
            <h5>NEWSLETTER</h5>
            <p>Suscribe to stay in the loop about music, merch, shows, and more.</p>
            <div className={styles.email_container}>
              <input type="email" placeholder="Enter your email" />
              <TfiEmail className={styles.email_icon}/>
            </div>
          </div>
        </div>
      </div>
        <p className={styles.made_by}>This website was made by Daniel Hincapié Vargas</p>
    </div>
  )
}

export default Footer