import React from "react";
import Image from "next/image";
import Hero1 from "../../assets/images/FeatureSection/Feature_1.jpg";
function ProductCard({ productName, Price, Stock }) {
  return (
    <div>
      <div className="border m-10 border-transparent bg-gray-200 backdrop-blur-lg w-90 shadow rounded-md">
        <div className="">
          <Image width={420} height={420} alt="Product Photo" src={Hero1} />
        </div>
        <div className="items-center text-center my-4">
          <div>
            <p className="text-xl font-bold">{productName}</p>
          </div>
          <div>{Stock} Existencias</div>
          <div className="text-xs">Precio: {Price}</div>
          <div>
            <button className="border border-transparent bg-indigo-600 hover:bg-indigo-800 px-2.5 py-1.5 rounded-md text-white">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
