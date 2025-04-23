function SearchStudent({ onSearch }) {
    return (
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Tìm kiếm theo tên"
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    );
  }
  
  export default SearchStudent;