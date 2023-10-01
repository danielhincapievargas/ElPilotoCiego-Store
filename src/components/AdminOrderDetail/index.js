import React from 'react'
import styles from '@components/AdminOrderDetail/adminOrderDetail.module.css'
import Image from 'next/image'

const AdminOrderDetail = () => {
  return (
    <div className={styles.order_container}>
      <h2 className={styles.order_title}>ORDER DETAIL</h2>
      <div>ID: <span>ijas7saf78sdcu</span></div>
      <div>Date: <span>03/07/2024</span></div>
      <div className={styles.order_status_container}>
        <div> Status:</div>
        <select>
          <option value="Pending">Pending</option>
          <option value="In Process">In Process</option>
          <option value="Sent">Sent</option>
          <option value="Delivered">Delivered</option>
        </select>
        <div>
          <button>Update Status</button>
        </div>
      </div>
    <div className={styles.table_info_container}>
      <div className={styles.products_table_container}>
        <table className={styles.product_table}>
          <thead>
            <tr>
              <th>PRODUCT INFO</th>
              <th className={styles.price_title}>PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td_product_info}>

                  <Image 
                    className={styles.product_img}
                    src='/elpiloto-badbrain-tee-black.jpeg'
                    alt='Tee'
                    width={100}
                    height={100}
                    priority
                  />

                <div>
                  <div>Black Bad Bats Tee 2</div>
                  <div>QTY: <span>1</span></div>
                  <div>Size: <span>M</span></div>
                </div>
              </td>
              <td>{'$30.00'}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.customer_info_container}>
        <h3 className={styles.customer_info_title}>CUSTOMER INFO</h3>
        <div className={styles.customer_info}>
          <div className={styles.customer_tag}>
            Name: <span>Daniel Hincapié</span>
          </div>
          <div className={styles.customer_tag}>
            Email: <span>dhincap@test.com</span>
          </div>
          <div className={styles.customer_tag}>
            Phone: <span>301 123 12 34 </span>
          </div>
          <div className={styles.customer_tag}>
            Country: <span>Colombia</span>
          </div>
          <div className={styles.customer_tag}>
            City: <span>Medellín</span>
          </div>
          <div className={styles.customer_tag}>
            Postcode: <span>05004</span>
          </div>
          <div className={styles.customer_tag}>
            Adress: <span>Cll 57 #83-98</span>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default AdminOrderDetail