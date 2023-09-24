import React from 'react'
import styles from '@components/ProductDetail/productDetail.module.css'
import Image from 'next/image'

const ProductDetail = () => {
  return (
    <div className={styles.product_detail}>
      <Image 
        className={styles.product_img}
        src="/elpiloto-badbrain-tee.png"
        alt="Tee"
        width={375}
        height={375}
        priority
      />
      <div className={styles.product_info}>

        <div className={styles.product_tags}>
          <div className={styles.product_name}>White Bad Bats Tee</div>
          <div className={styles.product_price}>{'$30.00'}</div>
        </div>

        <div className={styles.sizes_container}>
          <div className={styles.sizes_title}>SIZE</div>
          <ul className={styles.sizes_list}>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </div>

        <div className={styles.quantity_container}>
          <div className={styles.quantity_title}>QUANTITY</div>
          <div className={styles.quantity_counter}>
            <button>-</button>
            <div className={styles.count}>1</div>
            <button>+</button>
          </div>
        </div>

        <div className={styles.add_to_cart}>
          <button className={styles.add_button}>ADD TO CART</button>
        </div>
        
      </div>
    </div>
  )
}

export default ProductDetail