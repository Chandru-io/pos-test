/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useRef, useEffect } from "react";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";

const UserDetailsModal = ({ role, onClose, isOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="xl" popup onClose={onClose}>
      <Modal.Header>
        <h3 className="text-xl font-bold mb-4">User Details</h3>
        <p>Total Users: {role.length}</p>
      </Modal.Header>
      <Modal.Body>
        <table className="w-full mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">User Id</th>
              <th className="py-2 px-4">Mail id</th>
              <th className="py-2 px-4">Mobile</th>
              <th className="py-2 px-4">Assigned On</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {role.length > 0 ? (
              role.map((user, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.userId}</td>
                  <td className="py-2 px-4">{user.mailId}</td>
                  <td className="py-2 px-4">{user.mobile}</td>
                  <td className="py-2 px-4">{user.assignedOn}</td>
                  <td className="py-2 px-4">
                    <button className="bg-red-500 p-2 rounded-md text-white">
                      <MdOutlinePersonRemoveAlt1 />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
};

export default UserDetailsModal;
