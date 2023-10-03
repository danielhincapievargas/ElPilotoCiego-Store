import React from 'react'
import styles from '@components/CartProduct/cartProduct.module.css'
import Image from 'next/image'

const CartProduct = ({ 
  productImage,
  productType,
  productName,
  productSize,
  productCount,
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
        {(productType === 'Tee' || productType === 'Hoodie' ) 
        ? (<div className={styles.product_size}>Size: <span>{productSize}</span></div>)
        : undefined
      }

      { (page === 'checkout') 
        ? (<div className={styles.product_size}>{`Qty: ${productCount}`}</div>)
        : undefined
      }

        
      </div>
    </div>
  )
}

export default CartProduct