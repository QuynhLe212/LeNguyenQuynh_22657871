import { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import SearchStudent from './components/SearchStudent';
import FilterClass from './components/FilterClass';

function App() {
  // Khởi tạo state students từ localStorage hoặc danh sách mẫu
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem('students');
      return saved
        ? JSON.parse(saved)
        : [
            { id: 1, name: 'Nguyen Van A', class: '12A', age: 18 },
            { id: 2, name: 'Tran Thi B', class: '12B', age: 17 },
          ];
    } catch (error) {
      console.error('Error parsing localStorage:', error);
      return [
        { id: 1, name: 'Nguyen Van A', class: '12A', age: 18 },
        { id: 2, name: 'Tran Thi B', class: '12B', age: 17 },
      ];
    }
  });
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  // Debug log để kiểm tra state
  console.log('Students:', students);
  console.log('Filtered Students:', students
    .filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((student) => (selectedClass ? student.class === selectedClass : true)));

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Quản Lý Sinh Viên
        </h1>
        <div className="space-y-6">
          {/* Tìm kiếm và lọc */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <SearchStudent onSearch={setSearchTerm} />
            </div>
            <div className="w-full sm:w-48">
              <FilterClass students={students} onFilter={setSelectedClass} />
            </div>
          </div>
          {/* Form thêm sinh viên */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-yellow-700 mb-4">
              Thêm Sinh Viên Mới
            </h2>
            <AddStudent onAdd={handleAddStudent} />
          </div>
          {/* Form sửa sinh viên */}
          {editingStudent && (
            <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-yellow-700 mb-4">
                Sửa Thông Tin Sinh Viên
              </h2>
              <EditStudent student={editingStudent} onUpdate={handleUpdateStudent} />
            </div>
          )}
          {/* Danh sách sinh viên */}
          <div className="overflow-x-auto rounded-xl shadow-md">
            <StudentList
              students={filteredStudents}
              onDelete={handleDeleteStudent}
              onEdit={handleEditStudent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;