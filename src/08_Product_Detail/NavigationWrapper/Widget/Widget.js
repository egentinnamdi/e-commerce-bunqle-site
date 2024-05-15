import React from "react";
import X from "../../assets/duotone-x.svg";
import ArrowRight from "../../assets/regular-caretright-1.svg";
export const Widget = () => {
  return (
    <div className="relative w-[1920px] h-[80px] bg-black text-white">
      <div className="inline-flex items-center justify-center gap-[8px] absolute top-[16px] left-[870px]">
        <div className="relative w-fit font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-00 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
          Up to
        </div>
        <div className="relative w-fit mt-[-1.00px] font-display-04 font-[number:var(--display-04-font-weight)] text-[#00a218] text-[length:var(--display-04-font-size)] tracking-[var(--display-04-letter-spacing)] leading-[var(--display-04-line-height)] whitespace-nowrap [font-style:var(--display-04-font-style)]">
          59%
        </div>
        <div className="relative w-fit font-body-XL-600 font-[number:var(--body-XL-600-font-weight)] text-gray-00 text-[length:var(--body-XL-600-font-size)] tracking-[var(--body-XL-600-letter-spacing)] leading-[var(--body-XL-600-line-height)] whitespace-nowrap [font-style:var(--body-XL-600-font-style)]">
          OFF
        </div>
      </div>
      <button className="all-[unset] box-border inline-flex items-center justify-center gap-[8px] px-[24px] py-0 absolute top-[16px] left-[1464px] bg-[#00a218] rounded-[2px]">
        <div className="relative w-fit mt-[-1.00px] font-heading-07 font-[number:var(--heading-07-font-weight)] text-black text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] whitespace-nowrap [font-style:var(--heading-07-font-style)]">
          SHOP NOW
        </div>
        <img src={ArrowRight} className="!relative !w-[20px] !h-[20px]" />
      </button>
      <div className="inline-flex items-start gap-[10px] p-[8px] absolute top-[24px] left-[1864px] bg-gray-200 rounded-[2px]">
        <img src={X} className="!relative !w-[16px] !h-[16px]" />
      </div>
    </div>
  );
};