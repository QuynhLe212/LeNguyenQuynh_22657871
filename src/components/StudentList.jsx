function StudentList({ students, onDelete, onEdit }) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Tên</th>
          <th className="border p-2">Lớp</th>
          <th className="border p-2">Tuổi</th>
          <th className="border p-2">Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
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
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;