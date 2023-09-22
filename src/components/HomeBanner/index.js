import React from 'react'
import styles from '@components/HomeBanner/homeBanner.module.css'
import BannerCarousel from '../BannerCarousel'

const HomeBanner = () => {
  return (
    <div className={styles.banner_container}>
      <h2>NEW LP</h2>
      <BannerCarousel />
      <h3>cuatro años sin torre de control</h3>

    </div>
  )
}

export default HomeBanner