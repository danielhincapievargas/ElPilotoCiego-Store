import React from 'react'
import AdminUserOrders from '@/components/AdminUserOrders'
import AdminHeader from '@/components/AdminHeader'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const UserOrders = () => {
  return (
    <>
      <AdminHeader />
      <AdminUserOrders />
    </>
  )
}

export default authenticatedRoute(UserOrders, {pathAfterFailure: '/'})