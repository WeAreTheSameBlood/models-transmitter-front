import React from "react";
import "./dropdown.css";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  selected: string;
  onChange: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="dropdown">
      <select
        className="dropdown-select"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="dropdown-arrow">▾</span>
    </div>
  );
};
