function StudentItem({ student, onDelete, onEdit }) {
    return (
      <tr>
        <td className="border p-2">{student.name}</td>
        <td className="border p-2">{student.class}</td>
        <td className="border p-2">{student.age}</td>
        <td className="border p-2">
          <button
            onClick={() => onEdit(student)}
            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
          >
            Sửa
          </button>
          <button
            onClick={() => onDelete(student.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
  
  export default StudentItem;