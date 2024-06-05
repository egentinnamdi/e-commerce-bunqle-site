import React from "react";

export const Prices = () => {
  return (
    <div className="flex items-center gap-[12px] [font-family:'Public_Sans-Regular',Helvetica] border-b-2 border-b-[#00a218] w-full pb-6">
      <span>$1699</span>
      <span className="text-gray-500 text-[18px]  line-through">$1999.00</span>

      <span className=" bg-[#f7e336] p-1 text-gray-900">21% OFF</span>
    </div>
  );
};
