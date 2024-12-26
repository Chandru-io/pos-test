import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative flex items-center w-full max-w-sm">
      <IoIosSearch className="absolute left-3 text-[#064E79] text-lg cursor-pointer" />
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;

SearchComponent.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};
