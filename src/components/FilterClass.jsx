function FilterClass({ students, onFilter }) {
    const classes = [...new Set(students.map((student) => student.class))];
  
    return (
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        <option value="">Tất cả lớp</option>
        {classes.map((cls) => (
          <option key={cls} value={cls}>
            {cls}
          </option>
        ))}
      </select>
    );
  }
  
  export default FilterClass;