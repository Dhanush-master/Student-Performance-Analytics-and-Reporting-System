import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

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
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-blue-600">SPARS</div>
          <p className="text-gray-600 mt-1 text-sm">Student Performance Analytics</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input placeholder="Enter email" className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input placeholder="Enter password" className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
            <select value={role} onChange={e=>setRole(e.target.value)} className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button type="submit" className="w-full btn-primary py-3 font-semibold mt-6">Sign In</button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          New user? <Link to="/register" className="text-blue-600 font-semibold">Register</Link>
        </div>
      </div>
    </div>
  )
}
