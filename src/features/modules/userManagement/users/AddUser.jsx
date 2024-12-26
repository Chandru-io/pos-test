/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import PhoneInputWithCountrySelect from "react-phone-number-input";

const AddUser = ({ isOpen, onClose, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [govtId, setSgovtId] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    mobileNumber: "",
    profile: null,
    email: "",
    password: "",
    role: "",
    isEnable: false,
    govtProof: null,
  });

  const fileInputRef = useRef(null);
  const [phone, setPhone] = useState("us");
  const [profile, setProfile] = useState(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleSetGovtProof = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSgovtId(file);
      setFormData((prevData) => ({ ...prevData, govtProof: file }));
    }
  };

  const handleProfile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(file);
      setFormData((prevData) => ({ ...prevData, profile: file }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.mobileNumber ||
      !formData.email ||
      !formData.password ||
      !formData.role ||
      !formData.isEnable
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("User Added Successfully");

    setTimeout(() => {
      setFormData({
        username: "",
        mobileNumber: "",
        email: "",
        password: "",
        role: "",
        isEnable: false,
        govtProof: null,
        profile: null,
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="3xl" popup onClose={onClose}>
      <Modal.Header />
      <div className="bg-white px-8 py-4  rounded-lg w-full max-w-3xl shadow_card overflow_scroll_list z-50 h-auto">
        <h3 className="text-lg font-bold mb-4">{type} User</h3>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold">User Name</label>
                <input
                  type="text"
                  name="username"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="block mb-2 font-semibold">Mobile</label>
                <div className="flex items-center">
                  <PhoneInputWithCountrySelect
                    className="w-full      px-2 rounded"
                    value={phone}
                    onChange={(value) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        mobileNumber: value,
                      }))
                    }
                    defaultCountry="GE"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">
                  Profile Picture
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg   flex justify-center items-center">
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleProfile}
                  />
                  <button
                    type="button"
                    onClick={handleFileClick}
                    className="flex flex-col items-center text-blue-600 justify-center w-full border rounded   bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <FiUpload className="mb-2" size={20} />
                    <span className="text-black"> Upload File </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <span
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <span
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Role</label>
                <select
                  name="role"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="">Select Role</option>
                </select>
              </div>

              <div className="flex items-center col-span-2">
                <label className="mr-2 font-semibold">Enable Login</label>
                <label className="switch">
                  <input
                    type="checkbox"
                    name="isEnable"
                    className="toggle-checkbox"
                    checked={formData.isEnable}
                    onChange={handleInputChange}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            <div className="mt-10">
              <label className="block mb-2 font-semibold">Govt. Proof</label>
              <div className="col-span-1">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center">
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleSetGovtProof}
                  />
                  <button
                    type="button"
                    onClick={handleFileClick}
                    className="flex flex-col items-center text-blue-600 justify-center w-full border rounded py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <FiUpload className="mb-2" size={20} />
                    <span className="text-black">Drag and Drop the file</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-2 flex justify-end mt-4 space-x-4 items-end">
              <button
                type="button"
                className="px-6 py-2 border  bg-white rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-primary_button hover:bg-primary_button_hover text-white rounded"
              >
                Update
              </button>
            </div>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default AddUser;
