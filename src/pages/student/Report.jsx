import React, { useEffect, useState } from 'react'
import { fetchStudents } from '../../services/api'
import ChartComponent from '../../components/ChartComponent'

export default function StudentReport(){
  const [student, setStudent] = useState(null)

  useEffect(()=>{ fetchStudents().then(s=> setStudent(s[0])) }, [])

  if(!student) return <div>Loading...</div>

  const history = [
    { exam: 'Term 1', avg: 65 },
    { exam: 'Term 2', avg: 72 },
    { exam: 'Term 3', avg: Math.round(student.subjects.reduce((a,b)=>a+b.marks,0)/student.subjects.length) }
  ]

  const data = {
    labels: history.map(h=>h.exam),
    datasets: [{ label: 'Overall', data: history.map(h=>h.avg), borderColor: 'rgba(16,185,129,0.9)', backgroundColor:'rgba(16,185,129,0.1)' }]
  }

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Report for</div>
            <div className="font-semibold">{student.name}</div>
          </div>
          <button className="btn-primary">Download Report</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <ChartComponent data={data} />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="font-semibold mb-2">Exam History</div>
        <table className="w-full text-left">
          <thead><tr className="text-sm text-gray-600"><th>Exam</th><th>Overall</th></tr></thead>
          <tbody>
            {history.map(h=> <tr key={h.exam} className="border-t"><td className="py-2">{h.exam}</td><td>{h.avg}%</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
