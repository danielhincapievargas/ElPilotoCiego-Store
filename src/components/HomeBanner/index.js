import React from 'react'
import styles from '@components/HomeBanner/homeBanner.module.css'
import BannerCarousel from '../BannerCarousel'

const HomeBanner = () => {
  return (
    <div>
      <h2>New LP</h2>
      <BannerCarousel />
    </div>
  )
}

export default HomeBanner