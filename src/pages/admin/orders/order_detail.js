import React from 'react'
import AdminOrderDetail from '@/components/AdminOrderDetail'
import AdminHeader from '@/components/AdminHeader'
<<<<<<< HEAD
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const OrderDetail = () => {
=======

const order_detail = () => {
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  return (
    <>
      <AdminHeader /> 
      <AdminOrderDetail />
    </>
  )
}

<<<<<<< HEAD
export default authenticatedRoute(OrderDetail, {pathAfterFailure: '/'})
=======
export default order_detail
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
