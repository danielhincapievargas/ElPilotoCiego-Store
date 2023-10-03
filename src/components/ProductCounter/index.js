import React from 'react'
import styles from '@components/ProductCounter/productCounter.module.css'

const ProductCounter = ({
  title,
  productCount,
  handleAdd,
  handleSubstract,
  disableAdd,
  disableSubstract
}) => {
  return (
    <div className={styles.quantity_container}>
      {title && <div className={styles.quantity_title}>QUANTITY</div>} 
      <div className={styles.quantity_counter}>
        <button disabled={disableSubstract} onClick={handleSubstract}>-</button>
        <div className={styles.count}>{productCount}</div>
        <button disabled={disableAdd} onClick={handleAdd}>+</button>
      </div>
    </div>
  )
}

export default ProductCounter