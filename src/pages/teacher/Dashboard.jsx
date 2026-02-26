import React, { useEffect, useState } from 'react'
import DashboardCard from '../../components/DashboardCard'
import ChartComponent from '../../components/ChartComponent'
import RecommendationBox from '../../components/RecommendationBox'
import { fetchStudents } from '../../services/api'

export default function TeacherDashboard(){
  const [students, setStudents] = useState([])

  useEffect(()=>{
    fetchStudents().then(setStudents)
  }, [])

  const total = students.length
  const classAvg = total ? Math.round(students.reduce((s,st)=>{
    const avg = st.subjects.reduce((a,b)=>a+b.marks,0)/st.subjects.length
    return s + avg
  },0)/total) : 0

  const subjectTotals = {}
  students.forEach(st => st.subjects.forEach(sub => {
    subjectTotals[sub.subject] = subjectTotals[sub.subject] || {sum:0, count:0}
    subjectTotals[sub.subject].sum += sub.marks
    subjectTotals[sub.subject].count += 1
  }))

  const labels = Object.keys(subjectTotals)
  const data = {
    labels,
    datasets: [{ label: 'Avg Marks', data: labels.map(l=>Math.round(subjectTotals[l].sum/subjectTotals[l].count)), backgroundColor: 'rgba(34,197,94,0.6)' }]
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <DashboardCard title="Total Students" value={total} />
        <DashboardCard title="Class Average" value={`${classAvg}%`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="font-semibold mb-2">Subject-wise Performance</div>
          <ChartComponent type="bar" data={data} />
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="font-semibold mb-2">Recent Activity</div>
            <ul className="text-sm text-gray-700 list-disc pl-5">
              <li>Marked attendance for 10A</li>
              <li>Added exam results for Rahul</li>
            </ul>
          </div>
          <RecommendationBox>
            Suggest one-on-one for weak students in Science.
          </RecommendationBox>
        </div>
      </div>
    </div>
  )
}
