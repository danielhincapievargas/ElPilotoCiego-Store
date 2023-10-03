import React from 'react'
import Layout from '@/components/Layout'
import ProductDetail from '@/components/ProductDetail'
import { wrapper } from '@/redux/store'
import { getSingleProduct } from '@/redux/slices/productSlice'

const ProductDetailPage = () => {
  return (
    <Layout>
      <ProductDetail />
    </Layout>
  )
}

export default ProductDetailPage

export const getServerSideProps = wrapper.getServerSideProps( store => async ({ params }) => {

  await store.dispatch(getSingleProduct(params.id))
  })