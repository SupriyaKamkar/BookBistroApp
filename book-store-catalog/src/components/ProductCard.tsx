import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";

interface IProductCard {
  title: string;
  price: number;
  imageUrl: URL;
}

const ProductCard = (props: IProductCard) => {
  return (
    <div className="grid grid-rows-product-card grid-cols-1 grid-flow-row outward-shadow rounded-2xl h-80 m-4">
      <div className="border-b-2 border-gray-300 ">
        <Image
          src={props.imageUrl.toString()}
          alt="Uploaded"
          className="w-full h-full p-4 rounded-2xl"
          width={500}
          height={500}
        />
      </div>
      <div className="grid grid-flow-col">
        <div className="grid justify-around content-center">
          <p className="text-xl px-4 text-accent">{props.title}</p>
          <p className="text-xl px-4 text-accent">Price: Rs {props.price}/-</p>
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
