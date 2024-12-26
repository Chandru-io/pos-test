/* eslint-disable react/prop-types */
import { useState } from "react";
import Select from "react-select";

const ReportFilters = ({ formData = [], setFilterData = () => {} }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const completeData = { ...data, ...selectedOptions };

    setFilterData(completeData);
  };

  const handleSelectChange = (name, selectedOption) => {
    console.log(selectedOption);

    setSelectedOptions((prev) => ({
      ...prev,
      [name]: selectedOption,
    }));
  };

  return (
    <form
      className="flex justify-between items-end mb-4 "
      onSubmit={handleSubmit}
    >
      <div className="flex gap-x-3">
        {formData.map((field) => (
          <div key={field.id} className="flex flex-col ">
            <label htmlFor={field.name} className="font-semibold">
              {field.title}
            </label>
            {field.type === "date" ? (
              <input
                type="date"
                id={field.name}
                name={field.name}
                placeholder={field.title}
                className="border border-gray-300 rounded px-2 py-2 text-sm"
              />
            ) : field.type === "select" ? (
              <Select
                options={field.options}
                name={field.name}
                className="text-sm  z-50 w-40 "
                placeholder={`${field.title}`}
                isSearchable
                value={selectedOptions[field.name] || null}
                onChange={(selectedOption) =>
                  handleSelectChange(field.name, selectedOption)
                }
                styles={{
                  control: (base) => ({
                    ...base,

                    borderColor: "#d1d5db",
                    borderRadius: "4px",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    paddingLeft: "3px",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 100,
                  }),
                }}
              />
            ) : null}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="bg-primary_button hover:bg-primary_button_hover text-white rounded-lg px-4 py-2 "
      >
        Submit
      </button>
    </form>
  );
};

export default ReportFilters;
