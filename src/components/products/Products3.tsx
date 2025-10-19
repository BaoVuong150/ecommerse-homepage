import React from "react";
import ProductImg from "../../assets/productList1.png";
import StarRating from "../contexts/StarRating";

const Products3 = () => {
  return (
    <div>
      <ul className="flex px-4 sm:px-10 md:px-20 lg:px-40 gap-4 mb-8 w-full flex-wrap">
        {/* Gậy Đánh */}
        <li className="flex justify-center items-center w-full sm:w-[18rem] sm:h-[2rem] md:w-[18rem] md:h-[28rem] bg-gray-400 text-white text-center font-semibold text-xl">
          <p>Bàn Pool 3C</p>
        </li>

        {/* Product Items */}
        {[...Array(3)].map((_, index) => (
          <li key={index} className="w-full sm:w-[18rem] md:w-[18rem]">
            <div className="p-4 h-[28rem] flex flex-col">
              <div className="w-full h-[15rem] w-[15rem] p-2">
                <img
                  className="w-full h-full object-cover"
                  src={ProductImg}
                  alt={`Product ${index + 1}`}
                />
              </div>
              <div className="flex items-center gap-1 text-xs mt-2">
                <StarRating defaultValue={1} max={5} readOnly={false} />
                <p className="text-gray-400">Reviews (4)</p>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                </p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400">
                  <s>$499.00</s>
                </p>
              </div>
              <div>
                <p className="font-bold text-xl">$499.00</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products3;
