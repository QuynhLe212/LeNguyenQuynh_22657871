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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        value={newStudent.name}
        onChange={handleInputChange}
        placeholder="Họ tên"
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        name="class"
        value={newStudent.class}
        onChange={handleInputChange}
        placeholder="Lớp"
        className="border p-2 mr-2"
        required
      />
      <input
        type="number"
        name="age"
        value={newStudent.age}
        onChange={handleInputChange}
        placeholder="Tuổi"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Thêm sinh viên
      </button>
    </form>
  );
}

export default AddStudent;