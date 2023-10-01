import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminProductDetail from '@/components/AdminProductDetail'

const AddProduct = () => {
  return (
    <>
      <AdminHeader/>
      <AdminProductDetail action="add"/>
    </>
  )
}

export default AddProduct