import React from 'react'

// Dashboard card component with gradient header and shadow
export default function DashboardCard({title, value, children, borderColor = 'from-blue-500 to-indigo-600'}){
  return (
    <div className={`card border-t-4 bg-gradient-to-br from-white to-blue-50`}>
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${borderColor} text-white px-4 py-2 -mx-6 -mt-6 mb-4 rounded-t-lg`}>
        <div className="font-semibold text-sm">{title}</div>
      </div>
      
      {/* Content */}
      <div className="mt-2">
        <div className="text-3xl font-bold text-gray-800">{value}</div>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  )
}
