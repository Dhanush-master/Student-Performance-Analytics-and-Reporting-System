import React, { useEffect, useState } from 'react'
import { fetchStudents } from '../../services/api'
import ChartComponent from '../../components/ChartComponent'
import RecommendationBox from '../../components/RecommendationBox'

export default function TeacherReports(){
  const [students, setStudents] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(()=>{ fetchStudents().then(s=>{ setStudents(s); setSelected(s[0]?.id || null) }) }, [])

  const student = students.find(s=>s.id===Number(selected))

  const overall = student ? Math.round(student.subjects.reduce((a,b)=>a+b.marks,0)/student.subjects.length) : 0

  const data = student ? {
    labels: student.subjects.map(s=>s.subject),
    datasets: [{ label: 'Marks', data: student.subjects.map(s=>s.marks), backgroundColor:'rgba(234,88,12,0.7)' }]
  } : {labels:[], datasets:[]}

  const trend = student ? {
    labels: ['Exam 1','Exam 2','Exam 3'],
    datasets: [{ label:'Trend', data: [60,70, overall], borderColor: 'rgba(59,130,246,0.8)', backgroundColor:'rgba(59,130,246,0.1)' }]
  } : {labels:[], datasets:[]}

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">Reports</div>
            <select value={selected || ''} onChange={e=>setSelected(e.target.value)} className="border p-2 rounded">
              <option value="">Select student</option>
              {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded">Overall percentage: <span className="font-bold">{overall}%</span></div>
            <div className="p-4 bg-gray-50 rounded">Attendance: <span className="font-bold">{student?.attendance || '-' }%</span></div>
          </div>

          <div className="mt-4">
            <ChartComponent type="bar" data={data} />
          </div>

          <div className="mt-4">
            <ChartComponent type="line" data={trend} />
          </div>
        </div>
      </div>

      <div>
        <RecommendationBox />
      </div>
    </div>
  )
}
