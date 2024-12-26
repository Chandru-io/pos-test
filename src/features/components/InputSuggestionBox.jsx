/* eslint-disable react/prop-types */
import { useState } from "react";
import useOutSideClick from "../hooks/UseOutsideClick.jsx";
import { useTranslation } from "react-i18next";

const InputSuggestionBox = ({
  suggestions,
  onSuggestionSelect,
  placeholder,
  customStyle,
  inputValue,
  setInputValue,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const { t } = useTranslation();

  const [isVisible, setIsVisible, ref] = useOutSideClick();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsVisible(true);
    } else {
      setFilteredSuggestions([]);
      setIsVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.name);
    setIsVisible(false);

    onSuggestionSelect(suggestion);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={t(placeholder)}
        className={customStyle}
      />
      {isVisible && (
        <ul
          ref={ref}
          className="absolute top-full left-0 z-20 w-full border rounded shadow-lg bg-white mt-1 max-h-40 overflow-y-auto"
        >
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 cursor-pointer text-sm hover:bg-gray-100"
              >
                {suggestion.name}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default InputSuggestionBox;
