import { useState } from 'react';

function AddStudent({ onAdd }) {
  const [newStudent, setNewStudent] = useState({ name: '', class: '', age: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...newStudent, age: Number(newStudent.age) });
    setNewStudent({ name: '', class: '', age: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        name="name"
        value={newStudent.name}
        onChange={handleInputChange}
        placeholder="Họ tên"
        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />
      <input
        type="text"
        name="class"
        value={newStudent.class}
        onChange={handleInputChange}
        placeholder="Lớp"
        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />
      <input
        type="number"
        name="age"
        value={newStudent.age}
        onChange={handleInputChange}
        placeholder="Tuổi"
        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Thêm sinh viên
      </button>
    </form>
  );
}

export default AddStudent;