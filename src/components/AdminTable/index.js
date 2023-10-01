import React from 'react'
import styles from '@components/AdminTable/adminTable.module.css'
import Image from 'next/image'
import mockData from '@/services/mockData'
import { useRouter } from 'next/router'

export const AdminTable = () => {
  const router = useRouter()
  return (
    <div className={styles.product_container}>
      <h2 className={styles.product_title}>PRODUCTS</h2>
      <div className={styles.add_product}>
        <button className={styles.add_button} onClick={() => router.push('/admin/products/add_product')}>ADD PRODUCT</button>
      </div>
      <table className={styles.product_table}>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th className={styles.name_title}>NAME</th>
            <th className={styles.price_title}>PRICE</th>
            <th className={styles.stock_title}>STOCK</th>
            <th className={styles.action_title}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((product) => { 
        return (
          <tr key={product.id}>
            <td>
              <Image 
                className={styles.product_img}
                src={product.productImage}
                alt={product.productType}
                width={100}
                height={100}
                priority
              />
            </td>
            <td className={styles.product_name_container}>
              <div className={styles.product_name}>{product.productName}</div>
              <div className={styles.stock_action}>
                <div className={styles.stock_mobile}>
                  <div className={styles.stock}>Stock</div>
                  <div className={styles.product_stock_mobile} >
                    {product.productStock}
                  </div>
                </div>
                <div className={styles.actions_mobile}>
                  <span className={styles.edit_product} onClick={() => router.push('/admin/products/edit_product')}>Edit</span>
                  <span>  |  </span>
                  <span className={styles.delete_product}>Delete</span>
                </div>
              </div>
            </td>
            <td className={styles.product_price}>{product.productPrice}</td>
            <td className={styles.product_stock_td}>
              <div className={styles.product_stock}>
                {product.productStock}
              </div>
            </td>
            <td className={styles.actions}>
              <span className={styles.edit_product} onClick={() => router.push('/admin/products/edit_product')}>Edit</span>
              <span>  |  </span>
              <span className={styles.delete_product}>Delete</span>
            </td>
          </tr>
        )
          })}
        </tbody>
      </table>
    </div>
  )
}