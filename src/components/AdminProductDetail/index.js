import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@components/AdminProductDetail/adminProductDetail.module.css'

const AdminProductDetail = ({action}) => {

  const [type, setType] = useState('') 

  const handleType = (e) => {
    const choosedType = e.target.value;
    setType(choosedType)
  }

  return (
    <div className={styles.add_product_container}>
      <div className={styles.image_group}>
        <h2>PRODUCT IMAGE</h2>
        <Image 
          className={styles.product_img}
          src="/elpiloto-badbrain-tee-black.jpeg"
          alt="Tee"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className={styles.product_info}>
        <form className={styles.delivery_form}>

          <h2 className={styles.delivery}>PRODUCT INFO</h2>

          <div className={styles.form_group}>
            <label htmlFor="product_name">Name</label>
            <input id="product_name" type="text" placeholder="Product name" required />
          </div>

          <div className={styles.groups}>
            <div className={styles.group}>
              <label htmlFor="product_type">Product Type</label>
              <select onChange={handleType} id="product_type" type="text" placeholder="Type" required>
                <option value="">Choose Type</option>
                <option value="Tee">Tee</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Cap">Cap</option>
                <option value="CD">CD</option>
                <option value="LP">LP</option>
                <option value="Accesorie">Accesorie</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.group}>
              <label htmlFor="prduct_price">Price</label>
              <input id="prduct_price" type="text" placeholder="Price" required />
            </div>
          </div>

          {(type === 'Tee' || type === 'Hoodie') && (
            <div className={styles.groups}>
              <div className={styles.group}>
                <label htmlFor="s_stock">S</label>
                <input id="s_stock" type="text" placeholder="S Stock" required />
              </div>
              <div className={styles.group}>
                <label htmlFor="m_stock">M</label>
                <input id="m_stock" type="text" placeholder="M Stock" required />
              </div>
              <div className={styles.group}>
                <label htmlFor="l_stock">L</label>
                <input id="l_stock" type="text" placeholder="L Stock" required />
              </div>
              <div className={styles.group}>
                <label htmlFor="xl_stock">XL</label>
                <input id="xl_stock" type="text" placeholder="XL Stock" required />
              </div>
            </div>
          )}

          <div className={styles.groups}>
            <div className={styles.group}>
              <label htmlFor="stock">STOCK</label>
              <input id="stock" type="number" min={0} placeholder="Stock" required />
            </div>

            <div className={styles.group}>
              <label htmlFor="featured">FEATURED?</label>
              <select id="featured" type="text" placeholder="" required>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {action === 'add' && (
            <div className={styles.add_product}>
              <button className={styles.add_button}>ADD PRODUCT</button>
            </div>
          )}

          {action === 'edit' && 
            <div className={styles.edit_product}>
              <button className={styles.edit_button}>SAVE CHANGES</button>
            </div>
          }


        </form>
      </div>
    </div>
  )
}

export default AdminProductDetail