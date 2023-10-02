import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import Router from 'next/router'

const authenticatedRoute = (Component = null, options = {}) => {
  const AuthenticatedRoute = (props) => {
    const [loading, setLoading] = useState(true) 
    const cookies = new Cookies()
    const role = cookies.get('userRole')
  
    useEffect(() => {
      if(role === 'ADMIN') {
        setLoading(false)
      } else {
        Router.replace(options.pathAfterFailure || '/')
      }
    }, [role])
  
    if(loading) {
      return <div>Loading...</div>
    }
  
    return (
      <Component {...props}/>
    )
  }
  return AuthenticatedRoute
}

export default authenticatedRoute