import React from 'react'
import styles from '@components/CartProduct/cartProduct.module.css'
import Image from 'next/image'

const CartProduct = ({ 
  productImage,
  productType,
  productName,
  productSize,
  page
}) => {
  return (
    <div className={styles.cart_product}>
      <Image 
        className={styles.product_img}
        src={productImage}
        alt={productType}
        width={100}
        height={100}
        priority
      />
      <div className={styles.name_size}>
        <div className={styles.product_name}>{productName}</div>
        <div className={styles.product_size}>Size: <span>{productSize}</span></div>
        {(page === 'cart') ? (<div className={styles.remove}>Remove</div>) : undefined}   
      </div>
    </div>
  )
}

export default CartProduct