import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute'

const AdminNewsLetter = () => {
  return (
    <>
      <AdminHeader />
      <div>AdminNewsLetter</div>
    </>
  )
}

export default authenticatedRoute(AdminNewsLetter, {pathAfterFailure: '/'})