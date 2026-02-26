import React, { useState, useEffect } from 'react'
import StudentDetailsForm from '../../components/StudentDetailsForm'
import StudentDetailsTable from '../../components/StudentDetailsTable'

/**
 * StudentDetails Page (Teacher)
 * Allows teachers to view, add, edit, and delete student information
 * Features: CRUD operations, search, and filtering
 */
export default function StudentDetails() {
  // State management
  const [students, setStudents] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // Load students from localStorage on component mount
  useEffect(() => {
    const savedStudents = localStorage.getItem('studentDetails')
    if (savedStudents) {
      try {
        setStudents(JSON.parse(savedStudents))
      } catch (error) {
        console.error('Error loading students:', error)
      }
    }
  }, [])

  // Save students to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('studentDetails', JSON.stringify(students))
  }, [students])

  // Handle form submission (add or update)
  const handleFormSubmit = (formData) => {
    if (editingStudent) {
      // Update existing student
      setStudents(prev =>
        prev.map(student =>
          student.id === editingStudent.id
            ? { ...formData, id: student.id }
            : student
        )
      )
      setSuccessMessage(`Student '${formData.name}' updated successfully!`)
    } else {
      // Add new student
      const newStudent = {
        ...formData,
        id: Date.now() // Simple ID generation
      }
      setStudents(prev => [...prev, newStudent])
      setSuccessMessage(`Student '${formData.name}' added successfully!`)
    }

    // Reset form
    setShowForm(false)
    setEditingStudent(null)

    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  // Handle edit button click
  const handleEdit = (student) => {
    setEditingStudent(student)
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle delete button click
  const handleDelete = (student) => {
    setStudents(prev => prev.filter(s => s.id !== student.id))
    setSuccessMessage(`Student '${student.name}' deleted successfully!`)
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  // Handle cancel button
  const handleCancel = () => {
    setShowForm(false)
    setEditingStudent(null)
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Student Details Management</h1>
          <p className="text-gray-600 mt-1">Add, edit, and manage student information</p>
        </div>
        {!showForm && (
          <button
            onClick={() => {
              setShowForm(true)
              setEditingStudent(null)
            }}
            className="btn-primary text-lg px-6 py-3"
          >
            ➕ Add New Student
          </button>
        )}
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <div className="font-semibold text-green-800">{successMessage}</div>
            </div>
          </div>
        </div>
      )}

      {/* Form Section */}
      {showForm && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200">
          <StudentDetailsForm
            initialData={editingStudent}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
          />
        </div>
      )}

      {/* Table Section */}
      {students.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <h2 className="text-2xl font-bold text-gray-800">Student Roster</h2>
          </div>
          <StudentDetailsTable
            data={students}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onSearch={setSearchTerm}
          />
        </div>
      )}

      {/* Empty State */}
      {students.length === 0 && !showForm && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <div className="text-5xl mb-4">👥</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Students Added Yet</h3>
          <p className="text-gray-600 mb-6">Start by adding the first student to your database</p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary px-8 py-3"
          >
            ➕ Add First Student
          </button>
        </div>
      )}

      {/* Statistics */}
      {students.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card text-center">
            <div className="text-3xl font-bold text-blue-600">{students.length}</div>
            <div className="text-gray-600 text-sm">Total Students</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-green-600">
              {[...new Set(students.map(s => s.class))].length}
            </div>
            <div className="text-gray-600 text-sm">Classes</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-purple-600">
              {[...new Set(students.map(s => s.section))].length}
            </div>
            <div className="text-gray-600 text-sm">Sections</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-indigo-600">
              {[...new Set(students.map(s => s.semester))].length}
            </div>
            <div className="text-gray-600 text-sm">Semesters</div>
          </div>
        </div>
      )}
    </div>
  )
}
