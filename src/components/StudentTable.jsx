import React, { useState, useMemo } from 'react'

export default function StudentTable({data, onEdit, onDelete}){
  const [query, setQuery] = useState('')
  const [cls, setCls] = useState('')

  const classes = useMemo(()=>[...new Set(data.map(s=>s.class))], [data])

  const filtered = data.filter(s => {
    const matchQ = s.name.toLowerCase().includes(query.toLowerCase())
    const matchC = cls ? s.class === cls : true
    return matchQ && matchC
  })

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex gap-2 mb-4">
        <input placeholder="Search by name" className="border p-2 rounded flex-1" value={query} onChange={e=>setQuery(e.target.value)} />
        <select className="border p-2 rounded" value={cls} onChange={e=>setCls(e.target.value)}>
          <option value="">All classes</option>
          {classes.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-gray-600">
            <th className="py-2">Name</th>
            <th>Class</th>
            <th>Average</th>
            <th>Attendance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(s => {
            const avg = Math.round(s.subjects.reduce((a,b)=>a+b.marks,0)/s.subjects.length)
            return (
              <tr key={s.id} className="border-t">
                <td className="py-2">{s.name}</td>
                <td>{s.class}</td>
                <td>{avg}%</td>
                <td>{s.attendance}%</td>
                <td>
                  <button onClick={()=>onEdit(s)} className="text-blue-600 mr-2">Edit</button>
                  <button onClick={()=>onDelete(s)} className="text-red-600">Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
