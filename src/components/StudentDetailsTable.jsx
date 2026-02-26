import React, { useState } from 'react'

/**
 * StudentDetailsTable Component
 * Displays student details in a table with search, filter, and action buttons
 * Supports edit and delete operations
 */
export default function StudentDetailsTable({ data = [], onEdit, onDelete, onSearch }) {
  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('')
  const [filterClass, setFilterClass] = useState('')
  const [filterSection, setFilterSection] = useState('')

  // Filter and search data
  const filteredData = data.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesClass = !filterClass || student.class === filterClass
    const matchesSection = !filterSection || student.section === filterSection
    
    return matchesSearch && matchesClass && matchesSection
  })

  // Get unique classes and sections for filter dropdowns
  const classes = [...new Set(data.map(s => s.class))].sort()
  const sections = [...new Set(data.map(s => s.section))].sort()

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Search by Name/Roll No.
            </label>
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                onSearch?.(e.target.value)
              }}
              className="input-field"
            />
          </div>

          {/* Class Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Filter by Class
            </label>
            <select
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
              className="select-field"
            >
              <option value="">All Classes</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Section Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Filter by Section
            </label>
            <select
              value={filterSection}
              onChange={(e) => setFilterSection(e.target.value)}
              className="select-field"
            >
              <option value="">All Sections</option>
              {sections.map(sec => (
                <option key={sec} value={sec}>
                  Section {sec}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold text-blue-600">{filteredData.length}</span> of <span className="font-semibold">{data.length}</span> students
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        {filteredData.length === 0 ? (
          <div className="bg-white p-8 rounded-xl text-center">
            <div className="text-gray-500 font-semibold mb-2">No students found</div>
            <div className="text-sm text-gray-400">
              {searchTerm || filterClass || filterSection 
                ? 'Try adjusting your search or filters' 
                : 'No students have been added yet'}
            </div>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Class</th>
                <th>Section</th>
                <th>Semester</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((student) => (
                <tr key={student.id} className="hover:bg-blue-50 transition-colors">
                  <td className="font-semibold text-gray-900">{student.name}</td>
                  <td className="text-gray-700">{student.rollNumber}</td>
                  <td>
                    <span className="badge-info">Class {student.class}</span>
                  </td>
                  <td>
                    <span className="badge-info">Section {student.section}</span>
                  </td>
                  <td className="text-gray-700">Sem {student.semester}</td>
                  <td className="text-gray-700">{student.contact}</td>
                  <td>
                    <div className="flex gap-2">
                      {/* Edit Button */}
                      <button
                        onClick={() => onEdit(student)}
                        title="Edit student"
                        className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium transition-colors text-sm"
                      >
                        ✏️ Edit
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete ${student.name}? This action cannot be undone.`)) {
                            onDelete(student)
                          }
                        }}
                        title="Delete student"
                        className="px-3 py-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 font-medium transition-colors text-sm"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Summary Stats */}
      {filteredData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="text-3xl font-bold text-blue-600">{filteredData.length}</div>
            <div className="text-gray-600 text-sm">Total Students</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-green-600">{[...new Set(filteredData.map(s => s.class))].length}</div>
            <div className="text-gray-600 text-sm">Classes</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-indigo-600">{[...new Set(filteredData.map(s => s.section))].length}</div>
            <div className="text-gray-600 text-sm">Sections</div>
          </div>
        </div>
      )}
    </div>
  )
}
