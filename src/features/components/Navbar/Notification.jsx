import { Link } from "react-router";
import { IoMdNotifications } from "react-icons/io";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const Notification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current || !dropdownOpen) return;
      if (dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  // Close dropdown on Esc key press
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

  const handleNotificationClick = () => {
    setNotifying(false);
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Notification Icon */}
      <Link
        ref={trigger}
        onClick={handleNotificationClick}
        to="#"
        className="relative flex items-center justify-center rounded-xl"
        tabIndex={0}
      >
        {/* Notification Indicator */}
        {notifying && (
          <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red-600">
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>
        )}
        <IoMdNotifications
          className="text-[#858D9D] dark:text-white"
          size={22}
        />
      </Link>

      {/* Notification Dropdown */}
      {dropdownOpen && (
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className="absolute mt-6 sm:mt-8 flex h-auto max-h-72 w-64 sm:w-72 flex-col overflow-hidden rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
          style={{ left: "-300%", transform: "translateX(-50%)" }}
        >
          {/* Dropdown Header */}
          <div className="px-4 py-3">
            <h5 className="text-sm font-bold text-black dark:text-white">
              Notification
            </h5>
          </div>

          {/* Notification Items */}
          <ul className="flex flex-col overflow-y-auto max-h-64">
            <NotificationItem
              date="12 May, 2025"
              text="Edit your information in a swipe"
              description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
            />
            <NotificationItem
              date="24 Feb, 2025"
              text="It is a long established fact"
              description="That a reader will be distracted by the readable."
            />
            <NotificationItem
              date="04 Jan, 2025"
              text="There are many variations"
              description="Of passages of Lorem Ipsum available, but the majority have suffered."
            />
            <NotificationItem
              date="01 Dec, 2024"
              text="There are many variations"
              description="Of passages of Lorem Ipsum available, but the majority have suffered."
            />
          </ul>
        </div>
      )}
    </div>
  );
};

// Notification Item Component
const NotificationItem = ({ date, text, description }) => (
  <li>
    <Link
      className="flex flex-col gap-2 border-t border-stroke px-4 py-2 sm:px-5 sm:py-3 hover:bg-gray-100 dark:border-strokedark dark:hover:bg-meta-4"
      to="#"
    >
      {/* Notification Text */}
      <p className="text-sm leading-snug">
        <span className="font-semibold text-black dark:text-white">{text}</span>{" "}
        {description}
      </p>

      {/* Notification Date */}
      <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
    </Link>
  </li>
);

// Prop Validation
NotificationItem.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Notification;
