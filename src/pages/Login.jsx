import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login(){
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    
    try {
      const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: email,
          password: password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || 'Login failed');
        return;
      }
      
      const data = await response.json();
      login(data.role); // Server now dictates the role
      
      if(data.role === 'teacher' || data.role === 'ROLE_ADMIN') navigate('/teacher/dashboard')
      else navigate('/student/dashboard')
      
    } catch (error) {
      alert("Error connecting to server. Make sure the Spring Boot backend is running.");
    }
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
            <input placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input placeholder="Enter password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" required />
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
