/* eslint-disable react/prop-types */
const ProductCard = ({ title, price }) => {
  return (
    <div className="rounded-lg p-2 h-full flex flex-col items-center hover:cursor-pointer relative ">
      <div className="w-24 h-24 rounded-full  mb-3 z-10">
        <img
          src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
          alt={title}
          className="w-full h-full object-cover "
        />
      </div>
      <h3 className="text-sm text-[#064E79] font-semibold text-center  z-10">
        {title}
      </h3>
      <p className="text-gray-600 text-center z-10">${price}</p>
      <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md absolute left-0 right-0  top-16 border  z-[0] bottom-0"></div>
    </div>
  );
};

export default ProductCard;
