import StudentItem from './StudentItem';

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
          <StudentItem
            key={student.id}
            student={student}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;