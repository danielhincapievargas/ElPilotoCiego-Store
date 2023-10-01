import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminProductDetail from '@/components/AdminProductDetail'

const EditProduct = () => {
  return (
    <>
      <AdminHeader/>
      <AdminProductDetail action="edit"/>
    </>
  )
}

export default EditProduct