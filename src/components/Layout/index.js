import React from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>El Piloto Ciego Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
        {children}
      <Footer />
    </>
  )
}

export default Layout