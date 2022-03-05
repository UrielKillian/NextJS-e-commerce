import React from "react";
import Image from "next/image";
import Hero1 from "../../assets/images/FeatureSection/Feature_1.jpg";
import Shoes from "../../assets/images/Dummy/shoes.jpg";
import { useRouter } from "next/router";
function ProductCard({ productName, Price, Stock, id }) {
  const router = useRouter();

  const goToProductPage = (e) => {
    e.preventDefault();
    router.push("/producto/" + id);
  };

  return (
    <div>
      <div className="border m-10 border-transparent bg-palette-4 backdrop-filter backdrop-blur w-90 drop-shadow-md shadow rounded-md">
        <div className="">
          <Image width={420} height={460} alt="Product Photo" src={Shoes} />
        </div>
        <div className="items-center text-center my-4">
          <div>
            <p className="text-xl font-extrabold">{productName}</p>
          </div>
          <div className="mt-1">
            <p className=" text-xs font-normal">
              <span className="bg-green-300 rounded-md px-1.5 py-0.5">
                {Stock} Existencias
              </span>
            </p>
          </div>
          <div className="flex items-center m-4 justify-between">
            <div className="inline-flex text-xs">
              <span className="bg-indigo-400 px-1.5 py-0.5 rounded-md text-white">
                {Price}
              </span>
            </div>
            <button
              onClick={goToProductPage}
              className="border border-transparent bg-indigo-600 backdrop-blur-md hover:bg-indigo-800 px-2.5 py-1.5 rounded-md text-white"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
