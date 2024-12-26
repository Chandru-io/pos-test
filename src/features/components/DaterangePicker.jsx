import { useState, useRef } from "react";
import { DateRangePicker } from "react-date-range";
import { enGB } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PropTypes from "prop-types";
import useOutSideClick from "../hooks/UseOutsideClick.jsx";

const CustomDateRangePicker = ({ label, initialDateRange, onDateChange }) => {
  const [dateRange, setDateRange] = useState(initialDateRange);
  const datePickerRef = useRef(null);
  const [isVisible, setIsVisible, ref] = useOutSideClick();

  // Handle Date Change
  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
    if (onDateChange) onDateChange(ranges.selection);
  };

  return (
    <div className="flex flex-col w-full  sm:w-auto  " ref={ref}>
      <label htmlFor="start-month" className="text-sm   mb-1 text-black">
        {label}
      </label>
      <div className="relative ">
        <div
          className="daterangepicker flex border border-gray-300 rounded-md cursor-pointer text-xs w-full h-9 max-w-56"
          onClick={() => setIsVisible(!isVisible)}
        >
          <div className="m-1 px-2 flex-1 flex items-center justify-start bg-light">
            <p>{dateRange[0].startDate.toLocaleDateString()}</p>
          </div>
          <div className="m-1 px-2 flex-1 flex items-center justify-start bg-light">
            <p>{dateRange[0].endDate.toLocaleDateString()}</p>
          </div>
        </div>

        {isVisible && (
          <div
            ref={datePickerRef}
            className="absolute z-50 right-0 mt-2 bg-white shadow-md"
          >
            <DateRangePicker
              onChange={handleDateChange}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={1}
              ranges={dateRange}
              direction="horizontal"
              preventSnapRefocus={true}
              calendarFocus="backwards"
              locale={enGB}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDateRangePicker;

CustomDateRangePicker.propTypes = {
  label: PropTypes.string,
  initialDateRange: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.instanceOf(Date).isRequired,
      endDate: PropTypes.instanceOf(Date).isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDateChange: PropTypes.func,
};
