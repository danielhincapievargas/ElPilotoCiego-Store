import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import { AdminTable } from '@/components/AdminTable'
<<<<<<< HEAD
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
import { wrapper } from '@/redux/store'
import { getAllProducts } from '@/redux/slices/productSlice'
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

const AdminProducts = () => {
  return (
    <>
      <AdminHeader />
      <AdminTable />
    </>
  )
}

<<<<<<< HEAD
export default authenticatedRoute(AdminProducts, {pathAfterFailure: '/'})

export const getServerSideProps = wrapper.getServerSideProps( store => async () => {

  await store.dispatch(getAllProducts())
  })
=======
export default AdminProducts
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
