import React from 'react'
import styles from '@components/CartProduct/cartProduct.module.css'
import Image from 'next/image'

<<<<<<< HEAD
const CartProduct = ({ 
  productImage,
  productType,
  productName,
  productSize,
  productCount,
  page
}) => {


=======
const CartProduct = () => {
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  return (
    <div className={styles.cart_product}>
      <Image 
        className={styles.product_img}
<<<<<<< HEAD
        src={productImage}
        alt={productType}
=======
        src="/elpiloto-badbrain-tee.png"
        alt="Tee"
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
        width={100}
        height={100}
        priority
      />
      <div className={styles.name_size}>
<<<<<<< HEAD
        <div className={styles.product_name}>{productName}</div>
        {(productType === 'Tee' || productType === 'Hoodie' ) 
        ? (<div className={styles.product_size}>Size: <span>{productSize}</span></div>)
        : undefined
      }

      { (page === 'checkout') 
        ? (<div className={styles.product_size}>{`Qty: ${productCount}`}</div>)
        : undefined
      }

        
=======
        <div className={styles.product_name}>White Bad Bats Tee</div>
        <div className={styles.product_size}>Size: M</div>
        <div className={styles.remove}>Remove</div>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      </div>
    </div>
  )
}

export default CartProduct