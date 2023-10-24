import React from 'react'
import styles from '@components/AdminTable/adminTable.module.css'
import Image from 'next/image'
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { stateProducts } from '@/redux/slices/productSlice'
import { useSelector } from 'react-redux'

export const AdminTable = () => {
  const { products } = useSelector(stateProducts)
  const router = useRouter()
  const handleSelect = (product) => {
    router.push(`/admin/products/${product._id}`)
  }
=======
import mockData from '@/services/mockData'
import { useRouter } from 'next/router'

export const AdminTable = () => {
  const router = useRouter()
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  return (
    <div className={styles.product_container}>
      <h2 className={styles.product_title}>PRODUCTS</h2>
      <div className={styles.add_product}>
<<<<<<< HEAD
        <button
          className={styles.add_button}
          onClick={() => router.push('/admin/products/add_product')}
        >ADD PRODUCT</button>
=======
        <button className={styles.add_button} onClick={() => router.push('/admin/products/add_product')}>ADD PRODUCT</button>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
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
<<<<<<< HEAD
          {products.map((product) => { 
        return (
          <tr key={product._id}>
=======
          {mockData.map((product) => { 
        return (
          <tr key={product.id}>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
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
<<<<<<< HEAD
                  <span
                    className={styles.edit_product}
                    onClick={() => {handleSelect(product)}}
                  >Edit</span>
=======
                  <span className={styles.edit_product} onClick={() => router.push('/admin/products/edit_product')}>Edit</span>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
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
<<<<<<< HEAD
              <span className={styles.edit_product} onClick={() => {handleSelect(product)}}>Edit</span>
=======
              <span className={styles.edit_product} onClick={() => router.push('/admin/products/edit_product')}>Edit</span>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
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
