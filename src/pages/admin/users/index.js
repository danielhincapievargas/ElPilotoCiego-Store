import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminUsersTable from '@/components/AdminUsersTable'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const AdminUsers = () => {
  return (
    <>
      <AdminHeader />
      <AdminUsersTable />
    </>
  )
}

export default authenticatedRoute(AdminUsers, {pathAfterFailure: '/'})