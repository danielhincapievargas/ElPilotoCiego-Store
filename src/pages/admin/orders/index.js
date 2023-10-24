import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminOrdersTable from '@/components/AdminOrdersTable'
<<<<<<< HEAD
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

const AdminOrders = () => {
  return (
    <>
      <AdminHeader />
      <AdminOrdersTable />
    </>
  )
}

<<<<<<< HEAD
export default authenticatedRoute(AdminOrders, {pathAfterFailure: '/'})
=======
export default AdminOrders
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
