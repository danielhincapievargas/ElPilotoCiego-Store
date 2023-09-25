import React from 'react'
import styles from '@components/ProductList/productList.module.css'
import Image from 'next/image'
import mockData from '../../services/mockData'

const ProductList = ({title}) => {
  return (
    <div className={styles.featured_items}>
      <h2>{title}</h2>
      <div className={styles.items_list}>
        {
          mockData.map((item) => {
            return (
              <div key={item.id} className={styles.product_card}>
                <Image
                  className={styles.product_img}
                  src={item.productImg}
                  alt={item.productName}
                  width={162}
                  height={162}
                  priority
                />
                <div className={styles.product_name}>{item.productName}</div>
                <div className={styles.product_price}>{item.price}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductList