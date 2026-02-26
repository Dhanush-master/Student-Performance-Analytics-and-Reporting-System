import React, { useState } from 'react'

export default function TeacherAddStudent(){
  const [form, setForm] = useState({name:'', class:'', subjects:[{subject:'Math', marks:0}], attendance:0, remarks:''})

  function updateSubject(i, field, value){
    const s = [...form.subjects]
    s[i] = {...s[i], [field]: field==='marks' ? Number(value) : value}
    setForm({...form, subjects: s})
  }

  function addSubject(){ setForm({...form, subjects: [...form.subjects, {subject:'New', marks:0}]}) }
  function handleSubmit(e){ e.preventDefault(); alert('Student added (UI only)') }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input className="w-full border p-2 rounded" placeholder="Class" value={form.class} onChange={e=>setForm({...form, class:e.target.value})} />

        <div>
          <div className="font-semibold">Subjects</div>
          {form.subjects.map((s,i)=> (
            <div key={i} className="flex gap-2 mt-2">
              <input className="border p-2 rounded flex-1" value={s.subject} onChange={e=>updateSubject(i,'subject',e.target.value)} />
              <input className="border p-2 rounded w-24" type="number" value={s.marks} onChange={e=>updateSubject(i,'marks',e.target.value)} />
            </div>
          ))}
          <button type="button" onClick={addSubject} className="mt-2 text-sm text-blue-600">+ Add subject</button>
        </div>

        <input className="w-full border p-2 rounded" placeholder="Attendance" type="number" value={form.attendance} onChange={e=>setForm({...form, attendance: Number(e.target.value)})} />
        <textarea className="w-full border p-2 rounded" placeholder="Remarks" value={form.remarks} onChange={e=>setForm({...form, remarks:e.target.value})} />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  )
}
