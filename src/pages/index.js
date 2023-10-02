import React from 'react'
import HomeBanner from '@/components/HomeBanner'
import ProductList from '@/components/ProductList'
import { wrapper } from '@/redux/store'
import { getAllProducts } from '@/redux/slices/productSlice'

import Layout from '@/components/Layout'

const Home = () => {
  return (
    <>
      <Layout>
        <HomeBanner />
        <ProductList title={'FEATURED ITEMS'} />
      </Layout>
    </>
  )
}

export default Home

export const getServerSideProps = wrapper.getServerSideProps( store => async () => {

await store.dispatch(getAllProducts())
})