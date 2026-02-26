import React from 'react'

export default function RecommendationBox({children, title='AI Recommendations'}){
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  )
}
