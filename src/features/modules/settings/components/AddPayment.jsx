/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";

const AddPayment = ({ isOpen, onCloseModal, type }) => {
  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <Modal show={isOpen} size="2xl" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="bg-white p-2 rounded-md md:w-[30vw]">
          <h2 className=" text-xl font-semibold text-black px-2">
            {type} Payment Method
          </h2>
          <div className="grid grid-cols-1 gap-2 p-6">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-1">
                <label className="text-[#344054] font-semibold">
                  Payment Method Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="p-2 rounded-md border bg-white focus:outline-blue-500"
                  placeholder="Enter the Payment Method"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label className="text-[#344054] font-semibold">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  className="p-2 rounded-md border bg-white focus:outline-blue-500"
                  placeholder="Enter the Description"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center justify-between gap-x-4 px-4">
            <button
              className="p-2 text-center border bg-white w-full rounded-md border-gray-200 hover:bg-gray-100 duration-200 cursor-pointer
        "
              onClick={onCloseModal}
            >
              Back
            </button>
            <button
              className="p-2 text-center border text-white w-full rounded-md bg-primary_button hover:bg-primary_button_hover duration-200 cursor-pointer
        "
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddPayment;
