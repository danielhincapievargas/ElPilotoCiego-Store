import React from 'react'
import HomeBanner from '@/components/HomeBanner'
import FeaturedItems from '@/components/FeaturedItems'

import Layout from '@/components/Layout'

const Home = () => {
  return (
    <>
      <Layout>
        <HomeBanner />
        <FeaturedItems/>
      </Layout>
    </>
  )
}

export default Home