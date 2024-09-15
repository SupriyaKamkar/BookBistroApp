import { CircleArrowOutUpRight } from "lucide-react";
const ProductCard = () => {
  return (
    <div className="grid grid-rows-product-card grid-cols-1 grid-flow-row outward-shadow rounded-2xl h-80 m-4">
      <div className="border-b-2 border-gray-300 "></div>
      <div className="grid grid-flow-col">
        <div className="grid justify-around content-center">
          <p className="text-xl px-4 text-accent">Book Title</p>
          <p className="text-xl px-4 text-accent">Price</p>
        </div>
        <div className="circle grid grid-cols-1 grid-rows-1">
          <span className="circle-btn inner-shadow">
            <CircleArrowOutUpRight className="arrow text-accent"></CircleArrowOutUpRight>
          </span>
          <span className="back-1"></span>
          <span className="back-2"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
