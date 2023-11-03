import React, { useState } from 'react'
import styles from '@components/Header/header.module.css'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { Spin as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import MobileMenu from '@components/MobileMenu'
import MobileUserMenu from '@components/MobileUserMenu'
import { getLoggedUser, stateUsers } from '@/redux/slices/usersSlice'
import { cart } from '@/redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const [loggedCard, setLoggedCard] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const { loggedUser } = useSelector(stateUsers)
  const currentCart = useSelector(cart)

  const dispatch = useDispatch()
  const router = useRouter()
  const cookies = new Cookies()

  const handleClick = () => {
    setMobileMenu(!mobileMenu)
  }

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

  console.log(currentCart.cart);

  return (

    <div className={styles.header_container}>
      <div className={styles.header}>

        <div className={styles.left_header}>
          <div className={styles.login_container}>
            <FaRegUserCircle className={styles.user_icon} onClick={() => loggedUser.token ? undefined : router.push('/login')} />
            <FaRegUserCircle className={styles.user_icon_mobile} onClick={() => loggedUser.token ? setLoggedCard(!loggedCard) : router.push('/login')} />

            {loggedUser.token && (
              <div className={styles.logged_card}>
                <div className={styles.logged_list}>
                  <div className={styles.logged_list_tag}>Profile</div>
                  <div
                    className={styles.logged_list_tag}
                    onClick={handleLogout} 
                  >Logout</div>
                  {
                    (loggedUser.profile.userRole === 'ADMIN') && (
                      <div
                        className={styles.logged_list_tag}
                        onClick={() =>router.push('/admin/products')}
                      >
                      DASHBOARD
                      </div>
                    )
                  }
                </div>
              </div>
            )}
          </div>
          <ul>
            <li onClick={() => router.push('/apparel')}>APPAREL</li>
            <li onClick={() =>router.push('/accesories')}>ACCESORIES</li>
          </ul>

          <MobileUserMenu mobileOpen={loggedCard}/>

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
          {(currentCart.cart.length > 0) && <div className={styles.cart_quantity}>{currentCart.cart.length}</div>}
          <div onClick={handleClick} className={styles.hamburger}>
            <Hamburger
              size={20}
              direction="right"
              duration={0.7}
              distance="lg"
              color="#fff" 
            />
          </div>
          <MobileMenu isOpen={mobileMenu} />
        </div>


      </div>
    </div>

  )
}

export default Header