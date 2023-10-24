import React from 'react'
import AdminHeader from '@/components/AdminHeader'
<<<<<<< HEAD
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

const AdminNewsLetter = () => {
  return (
    <>
      <AdminHeader />
      <div>AdminNewsLetter</div>
    </>
  )
}

<<<<<<< HEAD
export default authenticatedRoute(AdminNewsLetter, {pathAfterFailure: '/'})
=======
export default AdminNewsLetter
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
