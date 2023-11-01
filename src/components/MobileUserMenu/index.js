import React, { useState, useEffect } from 'react'
import styles from '@components/MobileUserMenu/mobileUserMenu.module.css'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import { getLoggedUser, stateUsers } from '@/redux/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'

const MobileUserMenu = ({mobileOpen}) => {

  const router = useRouter()
  const cookies = new Cookies()
  const { loggedUser } = useSelector(stateUsers)
  const dispatch = useDispatch()

  const handleLogout = () => {
    cookies.remove('token')
    cookies.remove('userFirstName')
    cookies.remove('userLastName')
    cookies.remove('userEmail')
    cookies.remove('userRole')

    dispatch(getLoggedUser({
      profile: {
        userEmail: "",
        userFirstName: "",
        userLastName: "",
        userRole: ""
      },
      token: ""
    }))
    router.push('/')
  }

  return (
    <>
    {loggedUser.token && <div className={mobileOpen ? `${styles.menu_overlay_user} ${styles.open_user}` : `${styles.menu_overlay_user} ${styles.closed_user}`}>
      <div className={styles.menu_user}>
        <div onClick={() =>router.push('/')} className={styles.item_user}>PROFILE</div>
        <div onClick={handleLogout} className={styles.item_user}>LOGOUT</div>
        {
          (loggedUser.profile.userRole === 'ADMIN') && (
            <div
              className={styles.item_user}
              onClick={() =>router.push('/admin/products')}
            >
            DASHBOARD
            </div>
          )
        }
      </div>
    </div>}
    </>
  )
}

export default MobileUserMenu