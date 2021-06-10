import React from "react";
import "./Search.css";
const SearchPersonnel = ({ searchValue, handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="personnelSearch">
      <form className="personnelSearch__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search for personnels..."
        />
      </form>
    </div>
  );
};

export default SearchPersonnel;
