import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function ProtectedRoute({role: expectedRole}){
  const { role } = useContext(AuthContext)
  if(!role) return <Navigate to="/login" replace />
  if(role !== expectedRole) return <Navigate to="/login" replace />

  return (
    <div className="min-h-screen flex">
      <Sidebar role={role} />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
