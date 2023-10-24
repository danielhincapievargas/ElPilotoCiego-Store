import React from 'react'
import AdminUserOrders from '@/components/AdminUserOrders'
import AdminHeader from '@/components/AdminHeader'
<<<<<<< HEAD
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

const UserOrders = () => {
  return (
    <>
      <AdminHeader />
      <AdminUserOrders />
    </>
  )
}

<<<<<<< HEAD
export default authenticatedRoute(UserOrders, {pathAfterFailure: '/'})
=======
export default UserOrders
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
