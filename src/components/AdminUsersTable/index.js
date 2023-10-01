import React from 'react'
import styles from '@components/AdminUsersTable/adminUsersTable.module.css'
import { useRouter } from 'next/router'

const AdminUsersTable = () => {
  const router = useRouter()
  return (
    <div className={styles.users_container}>
      <h2 className={styles.users_title}>USERS</h2>
      <table className={styles.users_table}>
        <thead>
          <tr>
            <th className={styles.th_user_name}>NOMBRE</th>
            <th className={styles.th_user_email}>EMAIL</th>
            <th className={styles.th_user_orders}>ORDERS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td_user_name}>Daniel Hincapié Vargas</td>
            <td className={styles.td_user_email_container}>
              <div className={styles.td_user_email}>daniel.hincapie.vargas@gmail.com</div>
              <p onClick={() => router.push('/admin/users/user_orders')}>see orders</p>
            </td>
            <td className={styles.td_user_orders}>
              <div className={styles.see_orders} onClick={() => router.push('/admin/users/user_orders')}>
                see orders
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdminUsersTable