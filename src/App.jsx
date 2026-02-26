import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import TeacherDashboard from './pages/teacher/Dashboard'
import TeacherStudents from './pages/teacher/Students'
import TeacherAddStudent from './pages/teacher/AddStudent'
import TeacherReports from './pages/teacher/Reports'
import TeacherStudentDetails from './pages/teacher/StudentDetails'
import TeacherTimetable from './pages/teacher/Timetable'
import StudentDashboard from './pages/student/Dashboard'
import StudentReport from './pages/student/Report'
import StudentTimetable from './pages/student/Timetable'
import ProtectedRoute from './components/ProtectedRoute'

/**
 * Main App Component
 * Routes configuration for the application
 * Implements role-based access control for Teachers and Students
 */
export default function App(){
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      {/* Teacher Routes (Protected) */}
      <Route path="/teacher" element={<ProtectedRoute role="teacher" />}>
        <Route path="dashboard" element={<TeacherDashboard/>} />
        <Route path="student-details" element={<TeacherStudentDetails/>} />
        <Route path="students" element={<TeacherStudents/>} />
        <Route path="add-student" element={<TeacherAddStudent/>} />
        <Route path="timetable" element={<TeacherTimetable/>} />
        <Route path="reports" element={<TeacherReports/>} />
      </Route>

      {/* Student Routes (Protected) */}
      <Route path="/student" element={<ProtectedRoute role="student" />}>
        <Route path="dashboard" element={<StudentDashboard/>} />
        <Route path="timetable" element={<StudentTimetable/>} />
        <Route path="report" element={<StudentReport/>} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<div className="p-8">Page not found</div>} />
    </Routes>
  )
}
