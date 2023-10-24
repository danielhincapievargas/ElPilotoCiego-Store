import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminProductDetail from '@/components/AdminProductDetail'
<<<<<<< HEAD
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

const AddProduct = () => {
  return (
    <>
      <AdminHeader/>
      <AdminProductDetail action="add"/>
    </>
  )
}

<<<<<<< HEAD
export default authenticatedRoute(AddProduct, {pathAfterFailure: '/'})
=======
export default AddProduct
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
