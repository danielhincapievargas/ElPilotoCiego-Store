import React from 'react'
import Layout from '@/components/Layout'
import ProductList from '@/components/ProductList'

const MusicPage = () => {
  return (
    <Layout>
      <ProductList title={'MUSIC'} page={'Music'}/>
    </Layout>
  )
}

export default MusicPage