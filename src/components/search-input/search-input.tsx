import React from "react";
import "./search-input.css";

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
}) => (
  <div className="search-input-wrapper">
    <input
      type="text"
      className="search-input-field"
      placeholder={placeholder}
    />
    <span className="search-icon">🔍</span>
  </div>
);
