/* eslint-disable react/prop-types */

const WastNotice = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-3/4 max-w-lg p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>

        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <div className="bg-green-100 text-green-600 rounded-full p-2 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M12 17.5A5.5 5.5 0 1012 6a5.5 5.5 0 000 11zm0 2.5a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Notice</h2>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          You must enter the Quantity/Amount in the Unit showing just right
          after the Quantity/Amount field, otherwise Stock will not match.
        </p>

        {/* Detailed Content */}
        <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 overflow-auto">
          <h3 className="font-semibold mb-2">Description</h3>
          <p>
            Click Here to know measurement of specific ingredient, something
            like: 1 Cup Soya Bean Oil=240 ml, 1 Cup Wheat Flour=100.8 g, 1
            Tablespoon Chopped Pepper=10.8 g.
          </p>
          <p className="mt-2">
            And those you cannot measure in this way. Like you buy 1 packet
            Chaomin, then divide that by how many you can make by 1 packet.
            Something like you buy 1 packet Chaomin,{" that's"} weight is 500 g
            and you can make 4 dishes. Then enter the consumption 125 g (500 g /
            4 dish=125 g).
          </p>
          <p className="mt-2 font-semibold">
            NB: These are just examples, calculate the consumption on your own.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              console.log("Confirmed!");
              onClose();
            }}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default WastNotice;
