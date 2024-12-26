/* eslint-disable react/prop-types */

const HelpPopup = ({ onCloseModal }) => {
  return (
    <div className="flex items-center justify-center  z-50">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg relative">
        {/* Help Icon */}
        <div className=" bg-green-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md mb-2">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="4" width="48" height="48" rx="24" fill="#C0FF93" />
            <rect
              x="4"
              y="4"
              width="48"
              height="48"
              rx="24"
              stroke="#D7FFBB"
              strokeWidth="8"
            />
            <path
              d="M23.5 28L26.5 31L32.5 25M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
              stroke="#C0FF93"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 38C33.5228 38 38 33.5228 38 28C38 22.4772 33.5228 18 28 18C22.4772 18 18 22.4772 18 28C18 33.5228 22.4772 38 28 38Z"
              stroke="#026902"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.0898 25.0006C25.3249 24.3322 25.789 23.7687 26.3998 23.4097C27.0106 23.0507 27.7287 22.9195 28.427 23.0393C29.1253 23.1591 29.7587 23.5221 30.2149 24.0641C30.6712 24.6061 30.9209 25.2921 30.9198 26.0006C30.9198 28.0006 27.9198 29.0006 27.9198 29.0006"
              stroke="#026902"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 33H28.01"
              stroke="#026902"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Help</h2>
        {/* Content */}
        <div className="text-sm text-gray-600 space-y-4">
          <p>
            You should click on one/multiple item to mark it as{" "}
            <b>Started Cooking</b> or <b>Done</b>.
          </p>
          <p>
            You cannot select any item for <b>Take Away</b> or <b>Delivery</b>{" "}
            type orders, as you need to deliver these types of orders as a pack.
            Blue color indicates <b>Started Cooking</b>, whereas green color
            indicates that the item is <b>Done Cooking</b>.
          </p>
          <p>
            Until an order is closed from the <b>POS Panel</b>, that order will
            remain here.
          </p>
        </div>

        <button
          onClick={onCloseModal}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg w-full hover:bg-green-600 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default HelpPopup;
