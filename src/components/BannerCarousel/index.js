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
          <div className={styles.single_slide}>
            <Image
              className={styles.slide_img}
              src="/epc-1frontcover.jpg"
              alt="front cover"
              width={330}
              height={330}
              priority
            />
          </div>
          <div className={styles.single_slide}>
            <Image
              className={styles.slide_img}
              src="/epc-mock_page1.jpg"
              alt="front cover"
              width={330}
              height={330}
              priority
            />
          </div>
          <div className={styles.single_slide}>
            <Image
              className={styles.slide_img}
              src="/epc-mock_page2.jpg"
              alt="front cover"
              width={330}
              height={330}
              priority
            />
          </div>
          <div className={styles.lp_cover}>
            <Image
              className={styles.slide_img}
              src="/epc-xbackcover.jpg"
              alt="front cover"
              width={330}
              height={330}
              priority
            />
          </div>
        </Slider>
      </div>
    );
}

export default BannerCarousel