const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export async function fetchStudents() {
  const response = await fetch(`${BASE_URL}/api/students`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchStudentById(id) {
  const response = await fetch(`${BASE_URL}/api/students/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
