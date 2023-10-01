import React from 'react'
import styles from '@components/AdminOrdersTable/adminOrdersTable.module.css'
import { useRouter } from 'next/router'

const AdminOrdersTable = () => {
  const router = useRouter()
  return (
    <div className={styles.orders_container}>
      <h2 className={styles.orders_title}>ORDERS</h2>
      <table className={styles.orders_table}>
        <thead>
          <tr>
            <th className={styles.th_order_id}>ID</th>
            <th className={styles.th_order_email}>EMAIL</th>
            <th className={styles.th_order_date}>DATE</th>
            <th className={styles.th_order_status}>STATUS</th>
            <th className={styles.th_order_detail}>DETAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td_order_id}>2390483292343</td>
            <td className={styles.td_order_email}>dhincap@test.com</td>
            <td className={styles.td_order_date}>12/03/2024</td>
            <td className={styles.td_order_status}>On process</td>
            <td className={styles.td_order_detail} onClick={() => router.push('/admin/orders/order_detail')}>See detail</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdminOrdersTable