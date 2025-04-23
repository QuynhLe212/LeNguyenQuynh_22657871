function SearchStudent({ onSearch }) {
    return (
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Tìm kiếm theo tên"
        className="border p-2 mb-4 w-full"
      />
    );
  }
  
  export default SearchStudent;