/* eslint-disable react/prop-types */

const Header = ({ title, children }) => {
  return (
    <div className="bg-white p-5 rounded-md">
      <h3 className="text-xl text-[#064E79] font-semibold">{title}</h3>
      {children}
    </div>
  );
};

export default Header;
