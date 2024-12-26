import { Card } from "flowbite-react";
import PropTypes from "prop-types";
const FoodCard = ({ name, image, price, onClick }) => {
  return (
    <div className=" flex flex-grow">
      <Card
        className="max-w-md h-full  "
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={image}
        href="hover:shadow-md "
        onClick={onClick}
      >
        <h5 className="text-xxl font-bold tracking-tight text-gray-900 dark:text-white ">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{price}</p>
      </Card>
    </div>
  );
};

export default FoodCard;

FoodCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  onClick: PropTypes.func,
};
