import React, { useState, useEffect } from 'react'
import styles from '@components/MobileUserMenu/mobileUserMenu.module.css'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import { getLoggedUser } from '@/redux/slices/usersSlice'
import { useDispatch } from 'react-redux'

const MobileUserMenu = ({mobileOpen}) => {
  const [token, setToken] = useState('')
  const router = useRouter()
  const cookies = new Cookies()
  const dispatch = useDispatch()
  const role = cookies.get('userRole')

  useEffect(() => {
    setToken(cookies.get('token'))
  },[])

  const handleLogout = () => {
    cookies.remove('token')
    cookies.remove('userFirstName')
    cookies.remove('userLastName')
    cookies.remove('userEmail')
    cookies.remove('userRole')
    setToken('')
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
    {token && <div className={mobileOpen ? `${styles.menu_overlay_user} ${styles.open_user}` : `${styles.menu_overlay_user} ${styles.closed_user}`}>
      <div className={styles.menu_user}>
        <div onClick={() =>router.push('/')} className={styles.item_user}>PROFILE</div>
        <div onClick={handleLogout} className={styles.item_user}>LOGOUT</div>
        {
          (role === 'ADMIN') && (
            <div
              className={styles.item_user}
              onClick={() =>router.push('/admin/products')}
            >
            Dashboard
            </div>
          )
        }
      </div>
    </div>}
    </>
  )
}

export default MobileUserMenu