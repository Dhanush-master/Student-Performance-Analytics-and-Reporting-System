import React from 'react'
import { DAYS_OF_WEEK, TIME_SLOTS, isCurrentClass, getSubjectColor } from '../data/timetable'

/**
 * TimetableGrid Component
 * Displays timetable in a grid format
 * Supports both teacher (with edit/delete) and student (read-only) views
 * Highlights current class slot
 */
export default function TimetableGrid({ 
  timetableData = [], 
  viewMode = 'student', // 'student' or 'teacher'
  onEdit = null, 
  onDelete = null 
}) {
  // Create a grid: rows = time slots, columns = days
  const gridData = {}
  
  // Initialize grid
  TIME_SLOTS.forEach(slot => {
    gridData[slot] = {}
    DAYS_OF_WEEK.forEach(day => {
      gridData[slot][day] = null
    })
  })

  // Fill grid with timetable data
  timetableData.forEach(entry => {
    if (gridData[entry.timeSlot] && gridData[entry.timeSlot][entry.day]) {
      // Slot already filled, skip (handle conflicts)
      return
    }
    if (gridData[entry.timeSlot]) {
      gridData[entry.timeSlot][entry.day] = entry
    }
  })

  // Check if a slot is a break/lunch
  const isBreak = (timeSlot) => {
    return timeSlot.includes('10:15 - 10:15') || 
           timeSlot === '10:00 - 10:15' ||
           timeSlot === '12:15 - 01:15'
  }

  const getCurrentTime = () => {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const isTimeInSlot = (currentTime, timeSlot) => {
    const [startStr, endStr] = timeSlot.split(' - ')
    const [currentHour, currentMin] = currentTime.split(':').map(Number)
    const [startHour, startMin] = startStr.split(':').map(Number)
    const [endHour, endMin] = endStr.split(':').map(Number)

    const currentTotalMin = currentHour * 60 + currentMin
    const startTotalMin = startHour * 60 + startMin
    const endTotalMin = endHour * 60 + endMin

    return currentTotalMin >= startTotalMin && currentTotalMin < endTotalMin
  }

  const getCurrentDay = () => {
    const date = new Date()
    const dayIndex = date.getDay()
    return DAYS_OF_WEEK[dayIndex === 0 ? 6 : dayIndex - 1]
  }

  return (
    <div className="space-y-6">
      {/* Legend */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-200 border-2 border-yellow-500 rounded"></div>
            <span className="text-sm text-gray-700">Current Class</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <span className="text-sm text-gray-700">Free Slot</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 border-2 border-red-400 rounded"></div>
            <span className="text-sm text-gray-700">Break/Lunch</span>
          </div>
          {viewMode === 'teacher' && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">✏️ Edit & Delete available</span>
            </div>
          )}
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th className="w-32">Time Slot</th>
              {DAYS_OF_WEEK.map(day => (
                <th key={day} className="text-center">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIME_SLOTS.map((timeSlot, index) => {
              const breakSlot = isBreak(timeSlot)
              
              return (
                <tr key={index} className={breakSlot ? 'bg-red-50' : ''}>
                  {/* Time Slot Column */}
                  <td className={`font-semibold ${breakSlot ? 'bg-red-100' : ''}`}>
                    {timeSlot}
                    {breakSlot && <div className="text-xs text-red-700">(Break)</div>}
                  </td>

                  {/* Day Columns */}
                  {DAYS_OF_WEEK.map(day => {
                    const entry = gridData[timeSlot][day]
                    const isCurrentSlot = isTimeInSlot(getCurrentTime(), timeSlot) && day === getCurrentDay()
                    const colorClass = entry ? getSubjectColor(entry.subject) : 'bg-gray-50'

                    return (
                      <td 
                        key={`${timeSlot}-${day}`} 
                        className="p-2 text-center"
                      >
                        {entry ? (
                          <div className={`
                            p-3 rounded-lg border-2 transition-all
                            ${isCurrentSlot ? 'bg-yellow-100 border-yellow-500 ring-2 ring-yellow-300' : colorClass}
                          `}>
                            {/* Subject Name */}
                            <div className="font-bold text-sm text-gray-900">
                              {entry.subject}
                            </div>

                            {/* Classroom */}
                            <div className="text-xs text-gray-700 mt-1">
                              📍 {entry.classroom}
                            </div>

                            {/* Teacher (if available) */}
                            {entry.teacher && (
                              <div className="text-xs text-gray-600 mt-0.5">
                                👨‍🏫 {entry.teacher}
                              </div>
                            )}

                            {/* Current Class Indicator */}
                            {isCurrentSlot && (
                              <div className="text-xs font-bold text-yellow-700 mt-1">
                                🔴 ONGOING
                              </div>
                            )}

                            {/* Action Buttons (Teacher View Only) */}
                            {viewMode === 'teacher' && (
                              <div className="flex gap-1 mt-2 justify-center">
                                <button
                                  onClick={() => onEdit?.(entry)}
                                  className="px-2 py-1 bg-blue-200 text-blue-700 text-xs rounded hover:bg-blue-300 transition-colors"
                                  title="Edit"
                                >
                                  ✏️
                                </button>
                                <button
                                  onClick={() => {
                                    if (window.confirm('Delete this entry?')) {
                                      onDelete?.(entry)
                                    }
                                  }}
                                  className="px-2 py-1 bg-red-200 text-red-700 text-xs rounded hover:bg-red-300 transition-colors"
                                  title="Delete"
                                >
                                  🗑️
                                </button>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className={`p-3 rounded-lg text-gray-400 text-sm ${breakSlot ? 'bg-red-100' : 'bg-gray-100'}`}>
                            —
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {timetableData.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="text-gray-500 font-semibold mb-2">No timetable entries found</div>
          <div className="text-sm text-gray-400">
            {viewMode === 'teacher' 
              ? 'Create timetable entries to get started' 
              : 'Timetable will be displayed here'}
          </div>
        </div>
      )}

      {/* Statistics */}
      {timetableData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="text-3xl font-bold text-blue-600">{timetableData.length}</div>
            <div className="text-gray-600 text-sm">Total Classes</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-green-600">{[...new Set(timetableData.map(t => t.subject))].length}</div>
            <div className="text-gray-600 text-sm">Subjects</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-indigo-600">{[...new Set(timetableData.map(t => t.classroom))].length}</div>
            <div className="text-gray-600 text-sm">Rooms/Labs</div>
          </div>
        </div>
      )}
    </div>
  )
}
