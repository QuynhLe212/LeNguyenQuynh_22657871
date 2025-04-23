import { useState } from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import SearchStudent from './components/SearchStudent';
import FilterClass from './components/FilterClass';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyen Van A', class: '12A', age: 18 },
    { id: 2, name: 'Tran Thi B', class: '12B', age: 17 },
  ]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý danh sách sinh viên</h1>
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
  );
}

export default App;