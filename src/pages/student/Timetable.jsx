import React, { useState, useEffect } from 'react'
import TimetableGrid from '../../components/TimetableGrid'
import { sampleTimetableData } from '../../data/timetable'

/**
 * StudentTimetable Page (Student)
 * Read-only timetable view for students
 * Features: Weekly grid layout with current class highlighting
 */
export default function StudentTimetable() {
  // State management
  const [timetable, setTimetable] = useState([])
  const [loading, setLoading] = useState(true)

  // Load timetable data on component mount
  useEffect(() => {
    // Simulate loading from API
    setTimeout(() => {
      // Try to get teacher's timetable, otherwise use sample data
      const savedTimetable = localStorage.getItem('teacherTimetable')
      const data = savedTimetable ? JSON.parse(savedTimetable) : sampleTimetableData
      setTimetable(data)
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-5xl mb-4">⏳</div>
          <div className="text-xl font-semibold text-gray-600">Loading timetable...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">My Timetable</h1>
        <p className="text-gray-600 mt-2">Your weekly class schedule</p>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <div className="text-sm text-gray-600">Total Classes Per Week</div>
              <div className="text-2xl font-bold text-blue-600">{timetable.length}</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-4">
            <div className="text-3xl">📖</div>
            <div>
              <div className="text-sm text-gray-600">Subjects</div>
              <div className="text-2xl font-bold text-green-600">
                {[...new Set(timetable.map(t => t.subject))].length}
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-4">
            <div className="text-3xl">🏫</div>
            <div>
              <div className="text-sm text-gray-600">Classrooms/Labs</div>
              <div className="text-2xl font-bold text-purple-600">
                {[...new Set(timetable.map(t => t.classroom))].length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="text-2xl mt-1">⚠️</div>
          <div>
            <h3 className="font-semibold text-yellow-800 mb-1">Important Notice</h3>
            <p className="text-yellow-700 text-sm">
              Please check this timetable regularly for any updates or changes. Your teachers may adjust the schedule as needed.
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-200 border-2 border-yellow-500 rounded"></div>
            <span className="text-sm text-gray-700">🔴 Current Class</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <span className="text-sm text-gray-700">Free Slot</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 border-2 border-red-400 rounded"></div>
            <span className="text-sm text-gray-700">Break/Lunch</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">📍 Location</span>
          </div>
        </div>
      </div>

      {/* Timetable Grid (Read-only) */}
      {timetable.length > 0 ? (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📅</span>
            <h2 className="text-2xl font-bold text-gray-800">Weekly Schedule</h2>
          </div>
          <TimetableGrid
            timetableData={timetable}
            viewMode="student"
          />
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <div className="text-5xl mb-4">📭</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Timetable Yet</h3>
          <p className="text-gray-600">
            Your teachers will publish the timetable soon. Please check back later.
          </p>
        </div>
      )}

      {/* Tips Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-semibold text-blue-900 mb-4">📝 Tips</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>✓ Check the current class indicator (🔴) to see what class is happening right now</li>
          <li>✓ Remember the location (📍) of each class to avoid getting lost</li>
          <li>✓ Plan your break-time activities between class slots</li>
          <li>✓ Note down your teacher names for better communication</li>
          <li>✓ Bookmark this page for quick access to your timetable</li>
        </ul>
      </div>

      {/* Subject Color Guide */}
      {timetable.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">📚 Subject Guide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...new Set(timetable.map(t => t.subject))].map(subject => (
              <div key={subject} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-200 border-2 border-blue-500"></div>
                <span className="text-sm text-gray-700">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
