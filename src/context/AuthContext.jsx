import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }){
  const [role, setRole] = useState(localStorage.getItem('role') || null)

  useEffect(()=>{
    if(role) localStorage.setItem('role', role)
    else localStorage.removeItem('role')
  }, [role])

  const login = (r) => setRole(r)
  const logout = () => setRole(null)

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
