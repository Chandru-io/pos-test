/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";

const promos = [
  {
    title: "Black Friday Offer",
    type: "Discount",
    foodMenu: "Fish and Chips",
    discount: "5%",
  },
  {
    title: "2023 New Year Offer",
    type: "Free Item",
    foodMenu: (
      <div>
        <p>Buy : Mongolian Beef (1 Qty)</p>
        <p>Get : Pepsi 250ml (1 Qty)</p>
      </div>
    ),
    discount: "-",
  },
  {
    title: "Black Friday Offer",
    type: "Discount",
    foodMenu: "Fish and Chips",
    discount: "5%",
  },
  {
    title: "2023 New Year Offer",
    type: "Free Item",
    foodMenu: (
      <div>
        <p>Buy : Mongolian Beef (1 Qty)</p>
        <p>Get : Pepsi 250ml (1 Qty)</p>
      </div>
    ),
    discount: "-",
  },
];

function PromoTable({ onCloseModal, isOpen }) {
  if (!isOpen) return null;
  return (
    <Modal show={isOpen} onClose={onCloseModal} size="3xl" popup>
      <Modal.Header />
      <div className="flex justify-center items-center ">
        <div className="bg-white rounded-lg  w-full max-w-2xl  relative">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Promo</h2>
          <Modal.Body>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-2 px-4 font-semibold">Title</th>
                  <th className="py-2 px-4 font-semibold">Type</th>
                  <th className="py-2 px-4 font-semibold">Food Menu</th>
                  <th className="py-2 px-4 font-semibold">Discount</th>
                  <th className="py-2 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {promos.map((promo, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{promo.title}</td>
                    <td className="py-2 px-4">{promo.type}</td>
                    <td className="py-2 px-4">{promo.foodMenu}</td>
                    <td className="py-2 px-4">{promo.discount}</td>
                    <td className="py-2 px-4">
                      <button className="bg-blue-600 text-white py-1 px-3 rounded-md">
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default PromoTable;
