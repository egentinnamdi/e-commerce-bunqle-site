import React from "react";

import { HouseIcon } from "./House";
import { RegularCaretright1 } from "./Caretright";

export const Breadcrumb = () => {
  return (
    <div className="relative w-[1920px] h-[72px] bg-gray-200">
      <div className="text-gray-600 inline-flex items-center justify-center gap-[12px] relative top-[26px] left-[300px]">
        <HouseIcon className="!relative !w-[20px] !h-[20px]" />
        <span>Home &gt; </span>
        <span>Shop &gt;</span>
        <span>Shop Grid &gt; </span>
        <span>Electronics Devices &gt; </span>
        <span className="text-[#00a218] ">Macbook Pro</span>
      </div>
    </div>
  );
};

{
  /* <RegularCaretright1 className="!relative !w-[12px] !h-[12px]" /> */
}
