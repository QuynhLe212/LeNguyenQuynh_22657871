import { useState } from 'react';

function EditStudent({ student, onUpdate }) {
  const [editedStudent, setEditedStudent] = useState({ ...student });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent({ ...editedStudent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...editedStudent, age: Number(editedStudent.age) });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        name="name"
        value={editedStudent.name}
        onChange={handleInputChange}
        placeholder="Họ tên"
        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />
      <input
        type="text"
        name="class"
        value={editedStudent.class}
        onChange={handleInputChange}
        placeholder="Lớp"
        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />
      <input
        type="number"
        name="age"
        value={editedStudent.age}
        onChange={handleInputChange}
        placeholder="Tuổi"
        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Lưu
      </button>
    </form>
  );
}

export default EditStudent;