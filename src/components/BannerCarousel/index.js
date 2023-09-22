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
          {/* <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
    );
}

export default BannerCarousel