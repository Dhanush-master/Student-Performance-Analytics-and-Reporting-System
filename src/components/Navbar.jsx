import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Navbar(){
  const { role, logout } = useContext(AuthContext)
  
  // Format role for display
  const roleDisplay = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'GUEST'
  
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md border-b-2 border-blue-100">
      {/* Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
          S
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-gray-800">Student Analytics</div>
          <div className="text-xs text-gray-500">Performance & Reporting</div>
        </div>
      </div>

      {/* User Info and Logout */}
      <div className="flex items-center gap-6">
        {role && (
          <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {roleDisplay[0]}
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-gray-600">Logged in as</div>
              <div className="text-sm font-semibold text-gray-800">{roleDisplay}</div>
            </div>
          </div>
        )}
        {role && (
          <button 
            onClick={logout} 
            className="btn-danger text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}
