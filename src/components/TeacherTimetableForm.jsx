import React, { useState, useEffect } from 'react'
import { validateTimetableEntry } from '../utils/validation'
import { TIME_SLOTS, DAYS_OF_WEEK } from '../data/timetable'

/**
 * TeacherTimetableForm Component
 * Form for creating and editing timetable entries
 * Supports day, subject, time slot, and classroom details
 */
export default function TeacherTimetableForm({ initialData = null, onSubmit, onCancel }) {
  // Form state
  const [formData, setFormData] = useState({
    day: '',
    subject: '',
    timeSlot: '',
    classroom: '',
    teacher: ''
  })

  // Validation errors
  const [errors, setErrors] = useState({})

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
    // Clear error for this field
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

    // Validate form
    const validation = validateTimetableEntry(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    // Clear errors and submit
    setErrors({})
    onSubmit(formData)
  }

  // Common subjects
  const subjects = [
    'Mathematics',
    'English',
    'Science',
    'Physics',
    'Chemistry',
    'Biology',
    'History',
    'Geography',
    'Computer Science',
    'Physical Education',
    'Art',
    'Music'
  ]

  return (
    <div className="card max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {initialData ? 'Edit Timetable Entry' : 'Create Timetable Entry'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Day Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Day of Week *
            </label>
            <select
              name="day"
              value={formData.day}
              onChange={handleChange}
              className={`select-field ${errors.day ? 'border-red-500' : ''}`}
            >
              <option value="">Select Day</option>
              {DAYS_OF_WEEK.map(day => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            {errors.day && <span className="text-red-600 text-sm mt-1">{errors.day}</span>}
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Subject *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`select-field ${errors.subject ? 'border-red-500' : ''}`}
            >
              <option value="">Select Subject</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subject && <span className="text-red-600 text-sm mt-1">{errors.subject}</span>}
          </div>

          {/* Time Slot Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Time Slot *
            </label>
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className={`select-field ${errors.timeSlot ? 'border-red-500' : ''}`}
            >
              <option value="">Select Time Slot</option>
              {TIME_SLOTS.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.timeSlot && <span className="text-red-600 text-sm mt-1">{errors.timeSlot}</span>}
          </div>

          {/* Classroom Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Classroom/Lab *
            </label>
            <input
              type="text"
              name="classroom"
              value={formData.classroom}
              onChange={handleChange}
              placeholder="e.g., Room 101, Lab 1"
              className={`input-field ${errors.classroom ? 'border-red-500' : ''}`}
            />
            {errors.classroom && <span className="text-red-600 text-sm mt-1">{errors.classroom}</span>}
          </div>

          {/* Teacher Field (Optional) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Teacher Name (Optional)
            </label>
            <input
              type="text"
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              placeholder="Enter teacher name"
              className="input-field"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex gap-4 pt-4 border-t border-gray-200">
          <button
            type="submit"
            className="btn-primary flex-1"
          >
            {initialData ? 'Update Entry' : 'Create Entry'}
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
        * Required fields are marked with asterisk
      </div>

      {/* Time Slots Info */}
      <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
        <div className="font-semibold mb-2">Available Time Slots:</div>
        <div className="grid grid-cols-2 gap-2">
          {TIME_SLOTS.map((slot, index) => (
            <div key={index} className="text-xs">{slot}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
