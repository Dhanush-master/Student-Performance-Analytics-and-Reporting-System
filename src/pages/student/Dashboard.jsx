import React, { useEffect, useState } from 'react'
import { fetchStudents } from '../../services/api'
import ChartComponent from '../../components/ChartComponent'

export default function StudentDashboard(){
  const [student, setStudent] = useState(null)

  useEffect(()=>{
    fetchStudents().then(s=> setStudent(s[0]))
  }, [])

  if(!student) return <div>Loading...</div>

  const overall = Math.round(student.subjects.reduce((a,b)=>a+b.marks,0)/student.subjects.length)
  const labels = student.subjects.map(s=>s.subject)
  const data = { labels, datasets: [{ label:'Marks', data: student.subjects.map(s=>s.marks), backgroundColor: labels.map(l=> l==='Math' ? 'rgba(34,197,94,0.6)' : 'rgba(234,179,8,0.6)') }] }

  const weak = student.subjects.filter(s => s.marks < 60).map(s=>s.subject)

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="bg-white p-4 rounded shadow flex-1">
          <div className="text-sm text-gray-500">Overall Performance</div>
          <div className="text-2xl font-bold">{overall}%</div>
        </div>
        <div className="bg-white p-4 rounded shadow w-48">
          <div className="text-sm text-gray-500">Attendance</div>
          <div className="text-2xl font-bold">{student.attendance}%</div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="font-semibold mb-2">Subject-wise Marks</div>
        <ChartComponent type="bar" data={data} />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="font-semibold mb-2">Weak Subjects</div>
        {weak.length ? <ul className="text-red-600 list-disc pl-5">{weak.map(w=> <li key={w}>{w}</li>)}</ul> : <div className="text-green-600">None</div>}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="font-semibold mb-2">Improvement Suggestions</div>
        <div className="text-sm text-gray-700">Focus on weak topics, practise with past papers and attend remedial sessions.</div>
      </div>
    </div>
  )
}
