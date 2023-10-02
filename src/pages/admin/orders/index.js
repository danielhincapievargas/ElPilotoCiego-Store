import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminOrdersTable from '@/components/AdminOrdersTable'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const AdminOrders = () => {
  return (
    <>
      <AdminHeader />
      <AdminOrdersTable />
    </>
  )
}

export default authenticatedRoute(AdminOrders, {pathAfterFailure: '/'})