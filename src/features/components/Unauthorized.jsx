import { useNavigate } from "react-router";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-9xl font-bold text-purple-500">401</h1>
      <p className="mt-4 text-xl font-semibold text-gray-700">
        No authorization found.
      </p>
      <p className="mt-2 text-gray-500 text-center">
        This page is not publicly available. To access it, please log in first.
      </p>
      <button
        onClick={handleReturnHome}
        className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
      >
        Return Home
      </button>
    </div>
  );
};

export default Unauthorized;
