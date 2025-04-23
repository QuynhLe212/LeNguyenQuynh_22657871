import { useState } from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyen Van A', class: '12A', age: 18 },
    { id: 2, name: 'Tran Thi B', class: '12B', age: 17 },
  ]);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
    setEditingStudent(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý danh sách sinh viên</h1>
      <AddStudent onAdd={handleAddStudent} />
      {editingStudent && (
        <EditStudent student={editingStudent} onUpdate={handleUpdateStudent} />
      )}
      <StudentList
        students={students}
        onDelete={handleDeleteStudent}
        onEdit={handleEditStudent}
      />
    </div>
  );
}

export default App;