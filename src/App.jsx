import { useState } from 'react';
import StudentList from './components/StudentList';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyen Van A', class: '12A', age: 18 },
    { id: 2, name: 'Tran Thi B', class: '12B', age: 17 },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý danh sách sinh viên</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;