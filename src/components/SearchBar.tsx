import React, { useState } from "react";
import { SearchBarProps } from "../types/type";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type='button' onClick={handleSearch} disabled={loading}>Search</button>
    </div>
  );
};

export default SearchBar;