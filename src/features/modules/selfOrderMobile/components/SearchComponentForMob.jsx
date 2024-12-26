import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import SearchBg from "../../../images/mix-vegetable-dry-recipe-bowl-indian-restaurant-style-veg-recipe-served-with-chapati.jpg";

const SearchComponentForMob = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative h-60 w-full ">
        <img
          src={SearchBg}
          alt="background image"
          className="h-full w-full object-cover rounded-b-3xl"
        />
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center w-[95%]">
        {/* Search Input */}
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3.5  rounded-xl shadow-sm focus:outline-none   focus:border-none"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Search Icon */}
        <IoIosSearch className="absolute left-3 text-[#064E79] text-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchComponentForMob;

SearchComponentForMob.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
