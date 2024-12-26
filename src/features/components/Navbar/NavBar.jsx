import { FaBars, FaSearch } from "react-icons/fa";

import PropTypes from "prop-types";
import Notification from "./Notification";
import User from "./User";

const NavBar = ({ openSideBar }) => {
  return (
    <header className="flex h-16 sticky top-0 bg-white border-b border-stroke dark:border-strokedark z-50">
      <div className="flex w-full items-center justify-between py-3 px-3 md:px-6 2xl:px-11">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center lg:hidden md:hidden">
          <button
            aria-controls="sidebar"
            onClick={openSideBar}
            className="z-50 block rounded-sm border border-stroke bg-white p-2 dark:border-strokedark dark:bg-boxdark"
          >
            <FaBars className="h-5 w-5 text-black dark:text-white" />
          </button>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center justify-end gap-3 sm:gap-7 ml-auto relative w-full lg:w-auto">
          <ul className="flex items-center gap-2 sm:gap-4 w-full lg:w-auto justify-between">
            {/* Search Form */}
            <div className="flex-1 hidden sm:block lg:flex scale-95">
              <form className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full sm:w-72 h-10 pl-4 pr-11 text-sm border border-[#A4B4CB] rounded-md focus:outline-none dark:bg-boxdark dark:text-white"
                  />
                  <FaSearch
                    className="absolute top-1/2 right-3 h-4 -translate-y-1/2 text-[#8e99aa] dark:text-[#c2c9d6]"
                    alt="Search Icon"
                  />
                </div>
              </form>
            </div>

            {/* Notification Dropdown */}
            <li className="relative flex-shrink-0">
              <Notification />
            </li>
          </ul>

          {/* User Dropdown */}
          <div className="flex items-center justify-end flex-shrink-0">
            <User />
          </div>
        </div>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  openSideBar: PropTypes.func,
};

export default NavBar;
