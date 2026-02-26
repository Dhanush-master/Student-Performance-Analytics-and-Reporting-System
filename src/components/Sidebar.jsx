import React from 'react'
import { NavLink } from 'react-router-dom'

// Sidebar link component with active state styling
function Link({to, children}){
  return (
    <NavLink to={to} className={({isActive}) => `
      block px-4 py-3 rounded-lg font-medium transition-all duration-200
      ${isActive 
        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }
    `}>
      {children}
    </NavLink>
  )
}

export default function Sidebar({role}){
  return (
    <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg p-6 min-h-screen text-white">
      {/* Logo/Title */}
      <div className="mb-8">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          SPARS
        </div>
        <div className="text-xs text-gray-400 mt-1">Student Performance System</div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {role === 'teacher' ? (
          <>
            {/* Teacher Menu Items */}
            <div className="text-xs uppercase text-gray-500 font-semibold px-4 py-2 mt-4">Main</div>
            <Link to="/teacher/dashboard">📊 Dashboard</Link>
            
            <div className="text-xs uppercase text-gray-500 font-semibold px-4 py-2 mt-6">Management</div>
            <Link to="/teacher/student-details">👥 Student Details</Link>
            <Link to="/teacher/students">📝 Student Marks</Link>
            <Link to="/teacher/add-student">➕ Add Student</Link>
            
            <div className="text-xs uppercase text-gray-500 font-semibold px-4 py-2 mt-6">Academics</div>
            <Link to="/teacher/timetable">⏰ Timetable</Link>
            <Link to="/teacher/reports">📈 Reports</Link>
          </>
        ) : (
          <>
            {/* Student Menu Items */}
            <div className="text-xs uppercase text-gray-500 font-semibold px-4 py-2 mt-4">Main</div>
            <Link to="/student/dashboard">📊 Dashboard</Link>
            
            <div className="text-xs uppercase text-gray-500 font-semibold px-4 py-2 mt-6">Academics</div>
            <Link to="/student/timetable">⏰ Timetable</Link>
            <Link to="/student/report">📈 Reports</Link>
          </>
        )}
      </nav>
    </div>
  )
}
