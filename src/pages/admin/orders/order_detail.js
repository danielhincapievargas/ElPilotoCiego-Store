import React from 'react'
import AdminOrderDetail from '@/components/AdminOrderDetail'
import AdminHeader from '@/components/AdminHeader'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const OrderDetail = () => {
  return (
    <>
      <AdminHeader /> 
      <AdminOrderDetail />
    </>
  )
}

export default authenticatedRoute(OrderDetail, {pathAfterFailure: '/'})
