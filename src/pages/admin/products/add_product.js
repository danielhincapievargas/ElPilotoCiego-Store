import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminProductDetail from '@/components/AdminProductDetail'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const AddProduct = () => {
  return (
    <>
      <AdminHeader/>
      <AdminProductDetail action="add"/>
    </>
  )
}

export default authenticatedRoute(AddProduct, {pathAfterFailure: '/'})
