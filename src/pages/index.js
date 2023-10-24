import React from 'react'
import HomeBanner from '@/components/HomeBanner'
import ProductList from '@/components/ProductList'
<<<<<<< HEAD
import { wrapper } from '@/redux/store'
import { getAllProducts } from '@/redux/slices/productSlice'
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

import Layout from '@/components/Layout'

const Home = () => {
  return (
    <>
      <Layout>
        <HomeBanner />
<<<<<<< HEAD
        <ProductList title={'FEATURED ITEMS'} />
=======
        <ProductList title={'FEATURED ITEMS'}/>
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      </Layout>
    </>
  )
}

<<<<<<< HEAD
export default Home

export const getServerSideProps = wrapper.getServerSideProps( store => async () => {

await store.dispatch(getAllProducts())
})
=======
export default Home
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
