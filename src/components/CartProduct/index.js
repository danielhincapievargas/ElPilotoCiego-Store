import React from 'react'
import styles from '@components/CartProduct/cartProduct.module.css'
import Image from 'next/image'

const CartProduct = () => {
  return (
    <div className={styles.cart_product}>
      <Image 
        className={styles.product_img}
        src="/elpiloto-badbrain-tee.png"
        alt="Tee"
        width={100}
        height={100}
        priority
      />
      <div className={styles.name_size}>
        <div className={styles.product_name}>White Bad Bats Tee</div>
        <div className={styles.product_size}>Size: M</div>
        <div className={styles.remove}>Remove</div>
      </div>
    </div>
  )
}

export default CartProduct