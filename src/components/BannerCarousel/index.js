import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
import styles from '@components/BannerCarousel/bannerCarousel.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  }
    return (
      <div className={styles.slider_container}>
        <Slider {...settings}>
          <div className={styles.front_cover}>
            <Image 
              src="/epc-1frontcover.jpg"
              alt="front cover"
              width={375}
              height={375}
              priority
            />
          </div>
          <div className={styles.front_cover}>
            <Image 
              src="/epc-mock_page1.jpg"
              alt="front cover"
              width={375}
              height={375}
              priority
            />
          </div>
          <div className={styles.front_cover}>
            <Image 
              src="/epc-mock_page2.jpg"
              alt="front cover"
              width={375}
              height={375}
              priority
            />
          </div>
          <div className={styles.front_cover}>
            <Image 
              src="/epc-xbackcover.jpg"
              alt="front cover"
              width={375}
              height={375}
              priority
            />
          </div>
        </Slider>
      </div>
    );
}

export default BannerCarousel