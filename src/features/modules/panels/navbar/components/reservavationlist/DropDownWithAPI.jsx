/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownWithAPI = ({ status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(status || "Pending");
  const dropdownRef = useRef(null);

  const options = [
    { value: "Pending", color: "bg-yellow-300" },
    { value: "Accept", color: "bg-green-500" },
    { value: "Decline", color: "bg-red-500" },
    { value: "No Appear", color: "bg-gray-400" },
  ];

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = async (option) => {
    setSelected(option.value);
    setIsOpen(false);

    // Send API request
  };

  return (
    <div className="relative flex items-center" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          options.find((option) => option.value === selected)?.color ||
          "bg-white"
        }   py-2 rounded-lg cursor-pointer text-white flex items-center w-full justify-between px-3`}
      >
        {selected}
        <span className="ml-2 text-white">
          <FaChevronDown />
        </span>
      </div>

      {isOpen && (
        <ul className="absolute mt-2 w-full bg-white shadow-lg rounded-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                selected === option.value ? "bg-gray-200" : ""
              }`}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownWithAPI;
