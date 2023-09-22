import React from 'react'
import styles from '@components/HomeBanner/homeBanner.module.css'
import BannerCarousel from '../BannerCarousel'

const HomeBanner = () => {
  return (
    <div className={styles.banner_container}>
      <h2>NEW LP OUT NOW!</h2>
      <BannerCarousel />
      <h3>Cuatro Años Sin Torre de Control</h3>
      <p>all the tracks from 2019 to 2022</p>
    </div>
  )
}

export default HomeBanner