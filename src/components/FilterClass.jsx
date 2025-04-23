function FilterClass({ students, onFilter }) {
    const classes = [...new Set(students.map((student) => student.class))];
  
    return (
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="border p-2 mb-4"
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