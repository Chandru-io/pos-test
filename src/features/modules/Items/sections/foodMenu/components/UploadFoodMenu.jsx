/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useRef } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const UploadFoodMenuModal = ({ isOpen, onClose, onSubmit }) => {
  const uploadRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file:", file);
      // Pass the file to the parent onSubmit if needed
      if (onSubmit) {
        onSubmit(file);
      }
    }
  };

  const handleUploadClick = () => {
    // Trigger the hidden file input
    uploadRef.current?.click();
  };

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="xl" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Upload Food Menu</h2>
            <p className="text-sm text-gray-500">
              Choose a document of uploading your food Menu.
            </p>
          </div>
        </div>

        {/* Form */}
        <form>
          {/* Upload Section */}
          <div
            className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center mb-6 cursor-pointer"
            onClick={handleUploadClick}
          >
            <div className="flex justify-center mb-3">
              <MdOutlineFileUpload size={30} className="text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mb-1">
              <span className="text-blue-500">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-400">
              SVG, PNG, JPG, or GIF (max. 800×400px)
            </p>
            <input
              type="file"
              ref={uploadRef}
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium"
              onClick={() => console.log("Download sample clicked")}
            >
              Download Sample
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UploadFoodMenuModal;
