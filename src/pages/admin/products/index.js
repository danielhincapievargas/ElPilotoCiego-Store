import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import { AdminTable } from '@/components/AdminTable'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import { wrapper } from '@/redux/store'
import { getAllProducts } from '@/redux/slices/productSlice'

const AdminProducts = () => {
  return (
    <>
      <AdminHeader />
      <AdminTable />
    </>
  )
}

export default authenticatedRoute(AdminProducts, {pathAfterFailure: '/'})

export const getServerSideProps = wrapper.getServerSideProps( store => async () => {

  await store.dispatch(getAllProducts())
  })