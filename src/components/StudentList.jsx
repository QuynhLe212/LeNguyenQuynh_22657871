import StudentItem from './StudentItem';

function StudentList({ students, onDelete, onEdit }) {
  return (
    <table className="w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-200 p-2 text-gray-700 font-semibold">Tên</th>
          <th className="border border-gray-200 p-2 text-gray-700 font-semibold">Lớp</th>
          <th className="border border-gray-200 p-2 text-gray-700 font-semibold">Tuổi</th>
          <th className="border border-gray-200 p-2 text-gray-700 font-semibold">Hành động</th>
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