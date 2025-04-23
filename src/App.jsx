import { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import SearchStudent from './components/SearchStudent';
import FilterClass from './components/FilterClass';
import './index.css';

function App() {
  // Khởi tạo state students từ localStorage hoặc danh sách mẫu
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: 'Nguyen Van A', class: '12A', age: 18 },
          { id: 2, name: 'Tran Thi B', class: '12B', age: 17 },
        ];
  });
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  // Lưu students vào localStorage mỗi khi nó thay đổi
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

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

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((student) => (selectedClass ? student.class === selectedClass : true));

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Quản lý danh sách sinh viên</h1>
      <div className="space-y-4">
        <SearchStudent onSearch={setSearchTerm} />
        <FilterClass students={students} onFilter={setSelectedClass} />
        <AddStudent onAdd={handleAddStudent} />
        {editingStudent && (
          <EditStudent student={editingStudent} onUpdate={handleUpdateStudent} />
        )}
        <StudentList
          students={filteredStudents}
          onDelete={handleDeleteStudent}
          onEdit={handleEditStudent}
        />
      </div>
    </div>
  );
}

export default App;