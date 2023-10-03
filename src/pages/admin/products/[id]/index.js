import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminProductDetail from '@/components/AdminProductDetail'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import { wrapper } from '@/redux/store'
import { getSingleProduct } from '@/redux/slices/productSlice'

const EditProduct = () => {
  return (
    <>
      <AdminHeader/>
      <AdminProductDetail action="edit"/>
    </>
  )
}

export default authenticatedRoute(EditProduct, {pathAfterFailure: '/'})

export const getServerSideProps = wrapper.getServerSideProps( store => async ({ params }) => {

  await store.dispatch(getSingleProduct(params.id))
  })
