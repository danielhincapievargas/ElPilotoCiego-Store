import React from 'react'
import HomeBanner from '@/components/HomeBanner'
import ProductList from '@/components/ProductList'

import Layout from '@/components/Layout'

const Home = () => {
  return (
    <>
      <Layout>
        <HomeBanner />
        <ProductList title={'FEATURED ITEMS'}/>
      </Layout>
    </>
  )
}

export default Home