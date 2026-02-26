/**
 * Timetable Data Structure and Utilities
 * Provides reusable timetable data and helper functions
 */

// Days of the week
export const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Time slots for timetable
export const TIME_SLOTS = [
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 10:15', // Break
  '10:15 - 11:15',
  '11:15 - 12:15',
  '12:15 - 01:15', // Lunch
  '01:15 - 02:15',
  '02:15 - 03:15'
]

// Sample timetable data (can be fetched from API)
export const sampleTimetableData = [
  {
    id: 1,
    day: 'Monday',
    subject: 'Mathematics',
    timeSlot: '08:00 - 09:00',
    classroom: 'Room 101',
    teacher: 'Mr. Sharma'
  },
  {
    id: 2,
    day: 'Monday',
    subject: 'English',
    timeSlot: '09:00 - 10:00',
    classroom: 'Room 102',
    teacher: 'Ms. Gupta'
  },
  {
    id: 3,
    day: 'Monday',
    subject: 'Science',
    timeSlot: '10:15 - 11:15',
    classroom: 'Lab 1',
    teacher: 'Dr. Patel'
  },
  {
    id: 4,
    day: 'Tuesday',
    subject: 'History',
    timeSlot: '08:00 - 09:00',
    classroom: 'Room 103',
    teacher: 'Mr. Verma'
  },
  {
    id: 5,
    day: 'Tuesday',
    subject: 'Mathematics',
    timeSlot: '09:00 - 10:00',
    classroom: 'Room 101',
    teacher: 'Mr. Sharma'
  },
  {
    id: 6,
    day: 'Wednesday',
    subject: 'Computer Science',
    timeSlot: '08:00 - 09:00',
    classroom: 'Lab 2',
    teacher: 'Mr. Kapoor'
  },
  {
    id: 7,
    day: 'Wednesday',
    subject: 'Physics',
    timeSlot: '09:00 - 10:00',
    classroom: 'Lab 1',
    teacher: 'Dr. Patel'
  }
]

/**
 * Get timetable entries for a specific day
 * @param {Array} timetable - Array of timetable entries
 * @param {string} day - Day of the week
 * @returns {Array} Timetable entries for the day
 */
export const getTimetableForDay = (timetable, day) => {
  return timetable.filter(entry => entry.day === day)
}

/**
 * Get all timetable entries for a week organized by day
 * @param {Array} timetable - Array of timetable entries
 * @returns {Object} Timetable organized by day
 */
export const getTimetableByDay = (timetable) => {
  const result = {}
  DAYS_OF_WEEK.forEach(day => {
    result[day] = getTimetableForDay(timetable, day)
  })
  return result
}

/**
 * Format time range for display
 * @param {string} startTime - Start time (HH:MM format)
 * @param {string} endTime - End time (HH:MM format)
 * @returns {string} Formatted time range
 */
export const formatTimeRange = (startTime, endTime) => {
  return `${startTime} - ${endTime}`
}

/**
 * Check if a given time falls within a time slot
 * @param {string} currentTime - Current time (HH:MM format)
 * @param {string} timeSlot - Time slot (HH:MM - HH:MM format)
 * @returns {boolean} Whether time is within slot
 */
export const isTimeInSlot = (currentTime, timeSlot) => {
  const [startStr, endStr] = timeSlot.split(' - ')
  const [currentHour, currentMin] = currentTime.split(':').map(Number)
  const [startHour, startMin] = startStr.split(':').map(Number)
  const [endHour, endMin] = endStr.split(':').map(Number)

  const currentTotalMin = currentHour * 60 + currentMin
  const startTotalMin = startHour * 60 + startMin
  const endTotalMin = endHour * 60 + endMin

  return currentTotalMin >= startTotalMin && currentTotalMin < endTotalMin
}

/**
 * Get current day name
 * @returns {string} Current day name
 */
export const getCurrentDay = () => {
  const date = new Date()
  const dayIndex = date.getDay()
  const dayOffset = dayIndex === 0 ? 6 : dayIndex - 1 // Convert to 0=Monday
  return DAYS_OF_WEEK[dayOffset]
}

/**
 * Get current time in HH:MM format
 * @returns {string} Current time
 */
export const getCurrentTime = () => {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

/**
 * Check if an entry is the current class
 * @param {string} day - Day of week
 * @param {string} timeSlot - Time slot string
 * @returns {boolean} Whether this is the current class
 */
export const isCurrentClass = (day, timeSlot) => {
  return day === getCurrentDay() && isTimeInSlot(getCurrentTime(), timeSlot)
}

/**
 * Get color for subject (for UI purposes)
 * @param {string} subject - Subject name
 * @returns {string} Color code
 */
export const getSubjectColor = (subject) => {
  const colors = {
    'Mathematics': 'bg-blue-100 border-blue-500',
    'English': 'bg-green-100 border-green-500',
    'Science': 'bg-purple-100 border-purple-500',
    'Physics': 'bg-pink-100 border-pink-500',
    'Chemistry': 'bg-yellow-100 border-yellow-500',
    'Biology': 'bg-indigo-100 border-indigo-500',
    'History': 'bg-orange-100 border-orange-500',
    'Geography': 'bg-cyan-100 border-cyan-500',
    'Computer Science': 'bg-gray-100 border-gray-500'
  }
  return colors[subject] || 'bg-gray-100 border-gray-500'
}
