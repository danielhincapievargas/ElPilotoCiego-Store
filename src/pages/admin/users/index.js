import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminUsersTable from '@/components/AdminUsersTable'
<<<<<<< HEAD
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

const AdminUsers = () => {
  return (
    <>
      <AdminHeader />
      <AdminUsersTable />
    </>
  )
}

<<<<<<< HEAD
export default authenticatedRoute(AdminUsers, {pathAfterFailure: '/'})
=======
export default AdminUsers
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
