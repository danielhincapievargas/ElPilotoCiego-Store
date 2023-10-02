import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminProductDetail from '@/components/AdminProductDetail'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const EditProduct = () => {
  return (
    <>
      <AdminHeader/>
      <AdminProductDetail action="edit"/>
    </>
  )
}

export default authenticatedRoute(EditProduct, {pathAfterFailure: '/'})
