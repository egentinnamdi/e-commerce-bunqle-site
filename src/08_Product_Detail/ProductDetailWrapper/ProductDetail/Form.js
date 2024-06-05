import React, { useState } from "react";
import CaretDown from "../../assets/regular-caretdown-1.svg";

const formItems = [
  {
    sizeOptions: [
      "Select an option",
      "14-inch Liquid Retina XDR display",
      "16-inch Liquid Retina XDR display",
    ],
  },
  { memoryOptions: ["8GB", "16GB"] },
  { storageOptions: ["256GB", "512GB"] },
];

// { label: "Select an option", value: "" },
// { label: "14-inch Liquid Retina XDR display", value: "14-inch" },
// { label: "16-inch Liquid Retina XDR display", value: "16-inch" },

// { label: "Select an option", value: "" },
// { label: "8GB" },
// { label: "16GB" },

// { label: "Select an option", value: "" },
// { label: "256GB" },
// { label: "512GB" },

export const Form = () => {
  const [selectedColor, setSelectedColor] = useState("green");
  const [size, memory, storage] = formItems;

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <form className="inline-flex flex-col items-start gap-[16px] relative">
      <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
          <div className="relative w-[312px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
            Color
          </div>
          <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
            <button
              type="button"
              className={`inline-flex items-start gap-[10px] p-[6px] relative flex-[0_0_auto] bg-gray-00 rounded-[160px] border-2 border-solid ${
                selectedColor === "green"
                  ? "border-[#00a218]"
                  : " border-transparent"
              }`}
              onClick={() => handleColorClick("gray")}
            >
              <div className="relative w-[32px] h-[32px] bg-[#b1b5b8] rounded-[16px] shadow-[inset_0px_2px_6px_#0000001f,inset_0px_-2px_6px_#ffffff3d]" />
            </button>
            <button
              type="button"
              className={`inline-flex items-start gap-[10px] p-[6px] relative flex-[0_0_auto] bg-gray-00 rounded-[160px] border-2 border-solid ${
                selectedColor === "gray"
                  ? "border-[#00a218]"
                  : " border-transparent"
              }`}
              onClick={() => handleColorClick("green")}
            >
              <div className="relative w-[32px] h-[32px] bg-[#e0e1e1] rounded-[16px] shadow-[inset_0px_2px_6px_#0000001f,inset_0px_-2px_6px_#ffffff3d]" />
            </button>
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col items-start gap-[16px] relative">
        <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
            <label htmlFor="size">Size</label>
            <div className="relative self-stretch w-full h-[44px] bg-gray-00 rounded-[2px] overflow-hidden border border-solid border-[#e4e7e9]">
              <select
                id="size"
                className=" flex place-items-center p-[10px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 "
              >
                {size.sizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
            <div className="relative w-[312px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
              Memory
            </div>
            <select className="relative self-stretch w-full h-[44px] bg-gray-00 rounded-[2px] overflow-hidden border border-solid border-[#e4e7e9]">
              {memoryOptions.map((option) => (
                <option key={option.label} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
            <div className="relative w-[312px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
              Storage
            </div>
            <select className="relative self-stretch w-full h-[44px] bg-gray-00 rounded-[2px] overflow-hidden border border-solid border-[#e4e7e9]">
              {storageOptions.map((option) => (
                <option key={option.label} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div> */}
      </div>
    </form>
  );
};
