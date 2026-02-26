/**
 * Form Validation Utilities
 * Provides reusable validation functions for forms
 */

// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return {
    isValid: emailRegex.test(email),
    error: emailRegex.test(email) ? '' : 'Invalid email address'
  }
}

// Phone number validation (10 digits)
export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/
  return {
    isValid: phoneRegex.test(phone),
    error: phoneRegex.test(phone) ? '' : 'Phone must be 10 digits'
  }
}

// Required field validation
export const validateRequired = (value, fieldName = 'This field') => {
  const isValid = value && value.trim() !== ''
  return {
    isValid,
    error: isValid ? '' : `${fieldName} is required`
  }
}

// Number range validation
export const validateRange = (value, min, max, fieldName = 'Value') => {
  const num = parseFloat(value)
  const isValid = !isNaN(num) && num >= min && num <= max
  return {
    isValid,
    error: isValid ? '' : `${fieldName} must be between ${min} and ${max}`
  }
}

// Marks validation (0-100)
export const validateMarks = (marks) => {
  return validateRange(marks, 0, 100, 'Marks')
}

// Roll number validation (alphanumeric)
export const validateRollNumber = (rollNumber) => {
  const isValid = /^[A-Za-z0-9]+$/.test(rollNumber)
  return {
    isValid,
    error: isValid ? '' : 'Roll number must be alphanumeric'
  }
}

// Validate student details form
export const validateStudentDetails = (data) => {
  const errors = {}

  // Validate name
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Student name is required'
  }

  // Validate roll number
  const rollValidation = validateRollNumber(data.rollNumber || '')
  if (!data.rollNumber || data.rollNumber.trim() === '') {
    errors.rollNumber = 'Roll number is required'
  } else if (!rollValidation.isValid) {
    errors.rollNumber = rollValidation.error
  }

  // Validate class
  if (!data.class || data.class.trim() === '') {
    errors.class = 'Class is required'
  }

  // Validate section
  if (!data.section || data.section.trim() === '') {
    errors.section = 'Section is required'
  }

  // Validate semester
  if (!data.semester || data.semester.trim() === '') {
    errors.semester = 'Semester is required'
  }

  // Validate contact
  const phoneValidation = validatePhone(data.contact?.replace(/\D/g, '') || '')
  if (!data.contact || data.contact.trim() === '') {
    errors.contact = 'Contact number is required'
  } else if (!phoneValidation.isValid) {
    errors.contact = phoneValidation.error
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Validate timetable form
export const validateTimetableEntry = (data) => {
  const errors = {}

  // Validate day
  if (!data.day || data.day.trim() === '') {
    errors.day = 'Day is required'
  }

  // Validate subject
  if (!data.subject || data.subject.trim() === '') {
    errors.subject = 'Subject is required'
  }

  // Validate time slot
  if (!data.timeSlot || data.timeSlot.trim() === '') {
    errors.timeSlot = 'Time slot is required'
  }

  // Validate classroom
  if (!data.classroom || data.classroom.trim() === '') {
    errors.classroom = 'Classroom is required'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
