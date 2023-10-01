import React from 'react'
import styles from '@components/AdminUserOrders/adminUserOrders.module.css'
import { useRouter } from 'next/router'

const AdminUserOrders = () => {
  const router = useRouter()
  return (
    <div className={styles.user_orders_container}>
      <h2 className={styles.user_orders_title}>USER ORDERS</h2>
      <div>Daniel Hincapié Vargas</div>
      <table className={styles.user_orders_table}>
        <thead>
          <tr>
            <th className={styles.th_user_orders_id}>ID</th>
            <th className={styles.th_user_orders_date}>FECHA</th>
            <th className={styles.th_user_orders_total}>TOTAL</th>
            <th className={styles.th_user_orders_detail}>DETAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td_user_orders_id}>
              <div>
                OSDF8FDSKJNCD88E3FDSF
              </div>
              <div className={styles.td_user_orders_id_date}>
                Date: <span>03/12/2024</span>
              </div>
            </td>
            <td className={styles.td_user_orders_date}>03/12/2024</td>
            <td className={styles.td_user_orders_total_container}>
              <div className={styles.td_user_orders_total}>{'$30.00'}</div>
              <p onClick={() => router.push('/admin/orders/order_detail')}>see order</p>
            </td>
            <td className={styles.td_user_orders_detail}>
              <div className={styles.see_orders} onClick={() => router.push('/admin/orders/order_detail')}>
                see order
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdminUserOrders