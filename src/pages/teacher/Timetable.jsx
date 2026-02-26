import React, { useState, useEffect } from 'react'
import TeacherTimetableForm from '../../components/TeacherTimetableForm'
import TimetableGrid from '../../components/TimetableGrid'
import { sampleTimetableData } from '../../data/timetable'

/**
 * TeacherTimetable Page (Teacher)
 * Allows teachers to create, view, edit, and delete timetable entries
 * Features: Form for adding entries, grid view with full CRUD
 */
export default function TeacherTimetable() {
  // State management
  const [timetable, setTimetable] = useState(() => {
    const saved = localStorage.getItem('teacherTimetable')
    return saved ? JSON.parse(saved) : sampleTimetableData
  })
  const [showForm, setShowForm] = useState(false)
  const [editingEntry, setEditingEntry] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')
  const [filteredDay, setFilteredDay] = useState('')

  // Save to localStorage whenever timetable changes
  useEffect(() => {
    localStorage.setItem('teacherTimetable', JSON.stringify(timetable))
  }, [timetable])

  // Handle form submission (add or update)
  const handleFormSubmit = (formData) => {
    if (editingEntry) {
      // Update existing entry
      setTimetable(prev =>
        prev.map(entry =>
          entry.id === editingEntry.id
            ? { ...formData, id: entry.id }
            : entry
        )
      )
      setSuccessMessage(`Timetable entry updated successfully!`)
    } else {
      // Add new entry
      const newEntry = {
        ...formData,
        id: Date.now() // Simple ID generation
      }
      setTimetable(prev => [...prev, newEntry])
      setSuccessMessage(`New timetable entry added successfully!`)
    }

    // Reset form
    setShowForm(false)
    setEditingEntry(null)

    // Clear message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  // Handle edit button
  const handleEdit = (entry) => {
    setEditingEntry(entry)
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle delete button
  const handleDelete = (entry) => {
    setTimetable(prev => prev.filter(e => e.id !== entry.id))
    setSuccessMessage(`Timetable entry deleted successfully!`)
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  // Handle cancel button
  const handleCancel = () => {
    setShowForm(false)
    setEditingEntry(null)
  }

  // Filter timetable by selected day
  const displayTimetable = filteredDay
    ? timetable.filter(entry => entry.day === filteredDay)
    : timetable

  const days = [...new Set(timetable.map(t => t.day))]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Timetable Management</h1>
          <p className="text-gray-600 mt-1">Create and manage class schedule</p>
        </div>
        {!showForm && (
          <button
            onClick={() => {
              setShowForm(true)
              setEditingEntry(null)
            }}
            className="btn-primary text-lg px-6 py-3"
          >
            ⏰ Add New Entry
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
          <TeacherTimetableForm
            initialData={editingEntry}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
          />
        </div>
      )}

      {/* Filter Bar */}
      {timetable.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <label className="font-semibold text-gray-700">Filter by Day:</label>
            <select
              value={filteredDay}
              onChange={(e) => setFilteredDay(e.target.value)}
              className="select-field max-w-xs"
            >
              <option value="">All Days</option>
              {days.map(day => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            {filteredDay && (
              <button
                onClick={() => setFilteredDay('')}
                className="btn-secondary"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>
      )}

      {/* Stats */}
      {timetable.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card text-center">
            <div className="text-3xl font-bold text-blue-600">{displayTimetable.length}</div>
            <div className="text-gray-600 text-sm">
              {filteredDay ? `${filteredDay} Classes` : 'Total Classes'}
            </div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-green-600">
              {[...new Set(displayTimetable.map(t => t.subject))].length}
            </div>
            <div className="text-gray-600 text-sm">Subjects</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-purple-600">
              {[...new Set(displayTimetable.map(t => t.classroom))].length}
            </div>
            <div className="text-gray-600 text-sm">Rooms</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-indigo-600">
              {[...new Set(displayTimetable.map(t => t.teacher))].length}
            </div>
            <div className="text-gray-600 text-sm">Teachers</div>
          </div>
        </div>
      )}

      {/* Timetable Grid */}
      {timetable.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📅</span>
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredDay ? `${filteredDay} Schedule` : 'Weekly Schedule'}
            </h2>
          </div>
          <TimetableGrid
            timetableData={displayTimetable}
            viewMode="teacher"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      )}

      {/* Empty State */}
      {timetable.length === 0 && !showForm && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <div className="text-5xl mb-4">📅</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Timetable Entries Yet</h3>
          <p className="text-gray-600 mb-6">Start creating your timetable by adding class entries</p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary px-8 py-3"
          >
            ⏰ Create First Entry
          </button>
        </div>
      )}
    </div>
  )
}
