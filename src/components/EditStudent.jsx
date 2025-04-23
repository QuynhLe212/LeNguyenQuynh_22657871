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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        value={editedStudent.name}
        onChange={handleInputChange}
        placeholder="Họ tên"
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        name="class"
        value={editedStudent.class}
        onChange={handleInputChange}
        placeholder="Lớp"
        className="border p-2 mr-2"
        required
      />
      <input
        type="number"
        name="age"
        value={editedStudent.age}
        onChange={handleInputChange}
        placeholder="Tuổi"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Lưu
      </button>
    </form>
  );
}

export default EditStudent;