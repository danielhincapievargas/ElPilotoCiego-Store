import React, { useState } from 'react'
import styles from '@components/AdminTable/adminTable.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { stateProducts } from '@/redux/slices/productSlice'
import { useSelector } from 'react-redux'
import Modal from '@components/Modal'

export const AdminTable = () => {
  const { products } = useSelector(stateProducts)
  const [modal, setModal] = useState(false)
  const router = useRouter()
  const handleSelect = (product) => {
    router.push(`/admin/products/${product._id}`)
  }


  const fetchDeleteProduct = async (url) => {

    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      const res = await response.json();
      return res
    } catch (error) {
      alert('Error en Deleting Product', error)
    }
  }

  const handleDelete = async (product) => {
    const url = `http://localhost:8080/api/products/${product._id}`

    await fetchDeleteProduct(url)
    setModal(false)
    router.push('/admin/products/')
  }

  return (
    <>
      <div className={styles.product_container}>
        <h2 className={styles.product_title}>PRODUCTS</h2>
        <div className={styles.add_product}>
          <button
            className={styles.add_button}
            onClick={() => router.push('/admin/products/add_product')}
          >ADD PRODUCT</button>
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
            {products.map((product) => { 
          return (
            <tr key={product._id}>
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
                    <span
                      className={styles.edit_product}
                      onClick={() => {handleSelect(product)}}
                    >Edit</span>
                    <span>  |  </span>
                    <span className={styles.delete_product} onClick={() => {handleDelete(product)}}>Delete</span>
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
                <span className={styles.edit_product} onClick={() => {handleSelect(product)}}>Edit</span>
                <span>  |  </span>
                <span className={styles.delete_product} onClick={() => setModal(true)}>Delete</span>
              </td>
              <Modal isOpen={modal} title={'DELETE'} text={'ARE YOU SURE YOU WANT TO DELETE THIS PRODUCT?'}>
                <div className={styles.cancel_buttons}> 
                  <button onClick={() => {handleDelete(product)}}>YES</button>
                  <button onClick={() => setModal(false)}>CANCEL</button>
                </div>
              </Modal>
            </tr>
          )
            })}
          </tbody>
        </table>
      </div>
      
    </>
  )
}
