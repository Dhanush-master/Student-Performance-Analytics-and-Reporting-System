import React, { useState, useEffect } from 'react'
import { validateStudentDetails } from '../utils/validation'

/**
 * StudentDetailsForm Component
 * Form for adding/editing student information
 * Supports name, roll number, class, section, semester, and contact details
 */
export default function StudentDetailsForm({ initialData = null, onSubmit, onCancel }) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    class: '',
    section: '',
    semester: '',
    contact: '',
    email: '',
    dateOfBirth: '',
    address: ''
  })

  // Validation errors
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Load initial data if editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    // Validate form
    const validation = validateStudentDetails(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    // Clear errors and submit
    setErrors({})
    onSubmit(formData)
  }

  return (
    <div className="card max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {initialData ? 'Edit Student Details' : 'Add New Student'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Student Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className={`input-field ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-600 text-sm mt-1">{errors.name}</span>}
          </div>

          {/* Roll Number Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Roll Number *
            </label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="e.g., A001"
              className={`input-field ${errors.rollNumber ? 'border-red-500' : ''}`}
            />
            {errors.rollNumber && <span className="text-red-600 text-sm mt-1">{errors.rollNumber}</span>}
          </div>

          {/* Class Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Class *
            </label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className={`select-field ${errors.class ? 'border-red-500' : ''}`}
            >
              <option value="">Select Class</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
            {errors.class && <span className="text-red-600 text-sm mt-1">{errors.class}</span>}
          </div>

          {/* Section Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Section *
            </label>
            <select
              name="section"
              value={formData.section}
              onChange={handleChange}
              className={`select-field ${errors.section ? 'border-red-500' : ''}`}
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
              <option value="D">Section D</option>
            </select>
            {errors.section && <span className="text-red-600 text-sm mt-1">{errors.section}</span>}
          </div>

          {/* Semester Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Semester *
            </label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className={`select-field ${errors.semester ? 'border-red-500' : ''}`}
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
            </select>
            {errors.semester && <span className="text-red-600 text-sm mt-1">{errors.semester}</span>}
          </div>

          {/* Contact Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact Number *
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="10-digit phone number"
              className={`input-field ${errors.contact ? 'border-red-500' : ''}`}
            />
            {errors.contact && <span className="text-red-600 text-sm mt-1">{errors.contact}</span>}
          </div>

          {/* Email Field (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="input-field"
            />
          </div>

          {/* Date of Birth Field (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Birth (Optional)
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        {/* Address Field (Optional) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Address (Optional)
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter student's address"
            rows="3"
            className="textarea-field"
          />
        </div>

        {/* Form Actions */}
        <div className="flex gap-4 pt-4 border-t border-gray-200">
          <button
            type="submit"
            className="btn-primary flex-1"
          >
            {initialData ? 'Update Student' : 'Add Student'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="btn-secondary flex-1"
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Helper text */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
        * Required fields must be filled
      </div>
    </div>
  )
}
