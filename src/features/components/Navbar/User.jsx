import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { IoSettings } from "react-icons/io5";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

const User = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownRef.current || !dropdownOpen) return;
      if (
        !dropdownRef.current.contains(target) &&
        !triggerRef.current.contains(target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (dropdownOpen && keyCode === 27) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <Link
        ref={triggerRef}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4 cursor-pointer"
      >
        {/* User Info */}
        <span className="hidden lg:block text-right">
          <span className="block text-sm font-bold text-black dark:text-white">
            Hari
          </span>
          <span className="block text-xs font-semibold text-black dark:text-white">
            Hari@gmail.com
          </span>
        </span>

        {/* Profile Picture */}
        <span className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
          <img
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="User"
            className="object-fill"
          />
        </span>

        {/* Dropdown Icon */}
        <FaChevronDown className="hidden sm:block text-black dark:text-white" />
      </Link>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-4 sm:left-10 w-48 sm:w-60 flex flex-col rounded-xl border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark"
        >
          {/* Menu Items */}
          <ul className="flex flex-col gap-4 border-b border-stroke px-4 py-5 dark:border-strokedark">
            <li>
              <Link
                to="/admin/profile"
                className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <FaUserCircle />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/pages/settings"
                className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <IoSettings />
                Account Settings
              </Link>
            </li>
          </ul>
          {/* Logout Button */}
          <button className="flex items-center gap-3 px-4 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <AiOutlineLogout />
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
