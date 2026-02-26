import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

/**
 * Login Page
 * Allows users to authenticate as teacher or student
 */
export default function Login(){
  const { login } = useContext(AuthContext)
  const [role, setRole] = useState('teacher')
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    login(role)
    if(role === 'teacher') navigate('/teacher/dashboard')
    else navigate('/student/dashboard')
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-blue-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            SPARS
          </div>
          <p className="text-gray-600 mt-2 text-sm">Student Performance Analytics System</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input 
              placeholder="Enter your email" 
              className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input 
              placeholder="Enter your password" 
              type="password" 
              className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Login As</label>
            <select 
              value={role} 
              onChange={e=>setRole(e.target.value)} 
              className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="teacher">👨‍🏫 Teacher (Admin)</option>
              <option value="student">👨‍🎓 Student</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full btn-primary py-3 font-semibold mt-6"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/register" className="text-blue-600 font-semibold hover:underline">Register here</Link>
        </div>

        {/* Info Message */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
          <strong>Demo Mode:</strong> Use any email/password combination
        </div>
      </div>
    </div>
  )
}
