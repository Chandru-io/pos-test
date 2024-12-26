/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";

const ViewUser = ({ data, onClose, onToggleLogin, isOpen }) => {
  const {
    name,
    role,
    email,
    contact,
    services,
    image,
    date,
    govDocument,
    userId,
    enableLogin,
  } = data;

  // State to handle the login enabled status
  const [isLoginEnabled, setIsLoginEnabled] = useState(enableLogin);

  // Toggle function for login status
  const handleToggle = () => {
    const newStatus = !isLoginEnabled;
    setIsLoginEnabled(newStatus);
    // Notify parent component about the change if necessary
    if (onToggleLogin) {
      onToggleLogin(userId, newStatus);
    }
  };
  if (!isOpen) return null;
  return (
    <Modal show={isOpen} size="lg" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="bg-white rounded-lg     max-w-lg w-full relative ">
          <div className="grid grid-cols-2 items-center gap-6">
            {/* Profile Picture Placeholder */}
            <div className="w-full h-full mt-5">
              <img
                src={image}
                alt="profile"
                className="rounded-md border-2 border-black"
              />
              <p className="text-sm text-center">
                <strong>ID:</strong> {userId}
              </p>
            </div>
            <div>
              {/* User Details */}
              <h2 className="text-xl font-bold">{name}</h2>
              <div className="flex items-center justify-between w-full mt-2 mb-4">
                <label className="block text-gray-600 text-sm font-medium">
                  Login Enabled
                </label>
                <div
                  className={`ml-3 w-12 h-6 flex items-center ${
                    isLoginEnabled ? "bg-green-500" : "bg-gray-300"
                  } rounded-full p-1 cursor-pointer transition duration-300`}
                  onClick={handleToggle}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
                      isLoginEnabled ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
              </div>

              <div className="text-left w-full">
                <p className="text-sm mb-2">
                  <strong>Role:</strong> {role}
                </p>
                <p className="text-sm mb-2">
                  <strong>Email:</strong> {email}
                </p>
                <p className="text-sm mb-2">
                  <strong>Contact:</strong> {contact}
                </p>
                <p className="text-sm mb-2">
                  <strong>Services:</strong> {services}
                </p>
                <p className="text-sm mb-2">
                  <strong>Date of Joining:</strong> {date}
                </p>
                <p className="text-sm mb-2">
                  <strong>Govt Proof:</strong>{" "}
                  {govDocument ? (
                    <a
                      href={govDocument}
                      download
                      className="text-blue-600 hover:underline"
                    >
                      {govDocument.split("/").pop()}
                    </a>
                  ) : (
                    "Not Provided"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewUser;
