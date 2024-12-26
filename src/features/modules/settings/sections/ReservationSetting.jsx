/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const TimeDropdown = ({ label, value, onChange, isVisible, toggle }) => (
  <div className="relative">
    <p
      type="button"
      aria-expanded={isVisible}
      className="bg-secondary rounded-md px-6     cursor-pointer font-medium hover:bg-secondary_hover p-0 inline-flex items-center"
      onClick={toggle}
    >
      <p className="px-6 py-1 rounded-md    text-center ">
        {value || "Select Time"}
      </p>
      <FaAngleDown />{" "}
    </p>
    {isVisible && (
      <div className="absolute bg-white border rounded shadow-lg p-2 z-10">
        <label className="block mb-2 text-sm font-medium">{label}</label>
        <input
          type="time"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    )}
  </div>
);

const ReservationSetting = () => {
  const [reservations, setReservations] = useState([
    {
      availability: true,
      date: "Sunday",
      startTime: "11:00",
      endTime: "12:00",
    },
    {
      availability: true,
      date: "Monday",
      startTime: "11:00",
      endTime: "12:00",
    },
    {
      availability: true,
      date: "Tuesday",
      startTime: "11:00",
      endTime: "12:00",
    },
    {
      availability: true,
      date: "Wednesday",
      startTime: "11:00",
      endTime: "12:00",
    },
    {
      availability: true,
      date: "Thursday",
      startTime: "11:00",
      endTime: "12:00",
    },
    {
      availability: true,
      date: "Friday",
      startTime: "11:00",
      endTime: "12:00",
    },
    {
      availability: true,
      date: "Saturday",
      startTime: "11:00",
      endTime: "12:00",
    },
  ]);

  const [dropdownState, setDropdownState] = useState(false);

  const handleInputChange = (index, field, value) => {
    const updatedReservations = [...reservations];
    updatedReservations[index][field] = value;
    setReservations(updatedReservations);
  };

  const dropdownRef = useRef(null);

  const toggleTimeDropdown = (index, type) => {
    setDropdownState((prevState) => {
      if (prevState[type] === index) {
        return { ...prevState, [type]: null };
      }
      return { ...prevState, [type]: index };
    });
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const validateTimeRange = (start, end) => {
    return new Date(`1970-01-01T${start}`) < new Date(`1970-01-01T${end}`);
  };

  const handleConfirm = () => {
    const invalidReservations = reservations.filter(
      (reservation) =>
        !validateTimeRange(reservation.startTime, reservation.endTime)
    );

    if (invalidReservations.length > 0) {
      alert("Some reservations have invalid time ranges.");
      return;
    }
    alert("Reservations saved successfully!");
  };

  return (
    <div className="p-8 bg-white w-full">
      <div className="mb-6">
        <p className="text-xl font-bold ">Reservation Settings </p>
      </div>

      {/* URL Input */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium">
          Reservation Page URL
        </label>
        <div className="flex gap-6">
          <input
            type="text"
            placeholder="https://xyzlodgingdemo.com"
            className="w-full p-1.5 border border-gray-300 rounded focus:outline-blue-500"
          />
          <p className="bg-blue-500 p-2 rounded text-white" title="Copy">
            <FaRegCopy size={20} />
          </p>
          <p className="bg-blue-500 p-2 rounded text-white" title="share">
            <IoIosShareAlt size={20} />
          </p>
        </div>
      </div>

      <div className="overflow-x-scroll scrollbar-hide">
        {/* Grid Table Header */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6 text-center font-medium">
          <div className="col-span-1">Availability</div>
          <div className="col-span-1">Date</div>
          <div className="col-span-1">Start time</div>
          <div className="col-span-1">End time</div>
        </div>

        {/* Reservation Rows */}
        {reservations.map((reservation, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-center p-2 bg-white rounded-md w-full justify-evenly text-center"
          >
            {/* Availability Checkbox */}
            <div className="col-span-1 text-center">
              <input
                type="checkbox"
                checked={reservation.availability}
                onChange={(e) =>
                  handleInputChange(index, "availability", e.target.checked)
                }
                className="w-6 h-6 sm:w-4 sm:h-4 rounded text-primary"
              />
            </div>

            {/* Date */}
            <div className="col-span-1 text-center">{reservation.date}</div>

            {/* Start Time */}
            <div className="col-span-1">
              <TimeDropdown
                label="Start Time:"
                value={reservation.startTime}
                onChange={(value) =>
                  handleInputChange(index, "startTime", value)
                }
                isVisible={dropdownState.start === index}
                toggle={() => toggleTimeDropdown(index, "start")}
              />
            </div>

            {/* End Time */}
            <div className="col-span-1">
              <TimeDropdown
                label="End Time:"
                value={reservation.endTime}
                onChange={(value) => handleInputChange(index, "endTime", value)}
                isVisible={dropdownState.end === index}
                toggle={() => toggleTimeDropdown(index, "end")}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Confirm Button */}
      <div className=" flex justify-self-end    ">
        <button
          onClick={handleConfirm}
          className="p-2 bg-primary text-white font-medium rounded-lg shadow hover:bg-primary_hover"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ReservationSetting;
