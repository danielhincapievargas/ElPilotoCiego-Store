import React from 'react'
import styles from '@components/MobileUserMenu/mobileUserMenu.module.css'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'

const MobileUserMenu = ({mobileOpen}) => {
  const router = useRouter()
  const cookies = new Cookies()

  const token = cookies.get('token')
  const role = cookies.get('userRole')

  const handleLogout = () => {
    cookies.remove('token')
    cookies.remove('userFirstName')
    cookies.remove('userLastName')
    cookies.remove('userEmail')
    cookies.remove('userRole')
    router.push('/')
  }

  return (
    <>
    {token && <div className={mobileOpen ? `${styles.menu_overlay_user} ${styles.open_user}` : `${styles.menu_overlay_user} ${styles.closed_user}`}>
      <div className={styles.menu_user}>
        <div onClick={() =>router.push('/')} className={styles.item_user}>PROFILE</div>
        <div onClick={handleLogout} className={styles.item_user}>LOGOUT</div>
        <div onClick={() =>router.push('/admin/products')} className={styles.item_user}>DASHBOARD</div>
      </div>
    </div>}
    </>
  )
}

export default MobileUserMenu