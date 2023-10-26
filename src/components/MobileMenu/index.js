import React from 'react'
import styles from '@components/MobileMenu/mobileMenu.module.css'
import { useRouter } from 'next/router'

const MobileMenu = ({isOpen}) => {
  const router = useRouter()
  return (
    <>
    <div className={isOpen ? `${styles.mobile_menu_overlay} ${styles.mobile_open}` : `${styles.mobile_menu_overlay} ${styles.mobile_closed}`}>
      <div className={styles.mobile_menu}>
        <div onClick={() =>router.push('/apparel')} className={styles.mobile_item}>APPAREL</div>
        <div onClick={() =>router.push('/accesories')} className={styles.mobile_item}>ACCESORIES</div>
        <div onClick={() =>router.push('/music')} className={styles.mobile_item}>MUSIC</div>
        <div className={styles.mobile_item}>ABOUT</div>
      </div>
    </div>
    </>
  )
}

export default MobileMenu