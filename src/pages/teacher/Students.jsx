import React, { useEffect, useState } from 'react'
import { fetchStudents } from '../../services/api'
import StudentTable from '../../components/StudentTable'
import { useNavigate } from 'react-router-dom'

export default function TeacherStudents(){
  const [students, setStudents] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{ fetchStudents().then(setStudents) }, [])

  function handleEdit(s){
    alert('Edit: ' + s.name)
  }
  function handleDelete(s){
    if(window.confirm('Delete '+s.name+'?')){
      setStudents(prev => prev.filter(x => x.id !== s.id))
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Students</h2>
        <button onClick={()=>navigate('/teacher/add-student')} className="btn-primary">Add Student</button>
      </div>
      <StudentTable data={students} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}
