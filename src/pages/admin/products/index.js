import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import { AdminTable } from '@/components/AdminTable'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const AdminProducts = () => {
  return (
    <>
      <AdminHeader />
      <AdminTable />
    </>
  )
}

export default authenticatedRoute(AdminProducts, {pathAfterFailure: '/'})