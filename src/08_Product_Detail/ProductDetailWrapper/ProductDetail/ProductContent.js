import React from "react";
import star from "../../assets/regular-star.svg";

export const ProductContent = () => {
  function ratingStar() {
    let rating = [];
    for (let i = 0; i < 5; i++) {
      rating.push(<img src={star} key={i} className=" w-5 h-5" />);
    }
    return rating;
  }
  return (
    <div className="flex flex-col  gap-[16px]">
      <div className="flex flex-col items-start gap-[8px]">
        <div className="flex  gap-[8px]">
          <p className="flex  gap-1 ">{ratingStar()}</p>
          <p>4.7 Star Rating</p>
          <p>(21,671 User feedback)</p>
        </div>
        <p className=" w-[648px] text-gray-900 leading-6 ">
          2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD
          Storage) - Space Gray
        </p>
      </div>
      <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
        <div
          className="flex  gap-[24px] [font-family:'Public_Sans-Regular',Helvetica]  text-[14px]
        "
        >
          <p className=" w-[312px]  ">
            <span className="text-[#5f6c72] ">Sku: </span>
            <span className=" text-[#191c1e] ">A264671</span>
          </p>
          <p className=" w-[312px]  ">
            <span className="text-[#5f6c72] ">Availability: </span>
            <span className=" text-[#191c1e] ">In Stock</span>
          </p>
        </div>
        <div className="inline-flex items-start gap-[24px]  flex-[0_0_auto]">
          <p className=" w-[312px]  ">
            <span className="text-[#5f6c72] ">Brand: </span>
            <span className=" text-[#191c1e]">Apple</span>
          </p>
          <p className=" w-[312px]  ">
            <span className="text-[#5f6c72]">Category: </span>
            <span className=" text-[#191c1e] ">Electronics Devices</span>
          </p>
        </div>
      </div>
    </div>
  );
};
