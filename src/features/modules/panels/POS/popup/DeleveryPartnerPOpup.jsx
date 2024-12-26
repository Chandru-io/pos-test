/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const deliveryPartners = [
  {
    id: 1,
    name: "Door Dash",
    logo: "https://via.placeholder.com/100?text=Door+Dash",
  },
  {
    id: 2,
    name: "Tim Hortons",
    logo: "https://via.placeholder.com/100?text=Tim+Hortons",
  },
  {
    id: 3,
    name: "Uber Eats",
    logo: "https://via.placeholder.com/100?text=Uber+Eats",
  },
  {
    id: 4,
    name: "Grub Hub",
    logo: "https://via.placeholder.com/100?text=Grub+Hub",
  },
  {
    id: 5,
    name: "Pathao Food Riders",
    logo: "https://via.placeholder.com/100?text=Pathao",
  },
];

function DeliveryPartners({ onCloseModal, isOpen }) {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const { t } = useTranslation();

  const selectPartner = (id) => {
    setSelectedPartner(id);
  };

  function handleSubmit() {
    if (selectedPartner === null) {
      toast.error("Select DeliveryPartner");
    } else {
      onCloseModal();
    }
  }
  function handleCancel() {
    if (selectedPartner === null) {
      toast.error("Select DeliveryPartner");
    } else {
      onCloseModal();
    }
  }
  return (
    <Modal show={isOpen} size="md" popup onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="flex justify-center items-center ">
          <div className="bg-white rounded-lg  w-full max-w-3xl  relative">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Delivery Partners
            </h2>

            <div className="grid grid-cols-3 gap-6 mb-6">
              {deliveryPartners.map((partner) => (
                <div
                  key={partner.id}
                  onClick={() => selectPartner(partner.id)}
                  className="relative flex flex-col items-center cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                  />
                  <p className="mt-2 text-gray-700 font-semibold">
                    {partner.name}
                  </p>
                  {selectedPartner === partner.id && (
                    <span className="absolute top-0 right-5 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                      ✓
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600"
                onClick={handleSubmit}
              >
                {t("Panels.Submit")}
              </button>
              <button
                className="bg-transparent text-red-500 border border-red-500 py-2 px-6 rounded-md hover:bg-red-100"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DeliveryPartners;
