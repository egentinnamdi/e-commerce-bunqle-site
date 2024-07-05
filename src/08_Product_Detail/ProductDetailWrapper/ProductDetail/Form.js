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
  { memoryOptions: ["Select an option", "8GB", "16GB"] },
  { storageOptions: ["Select an option", "256GB", "512GB"] },
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
const style = "ring-offset-4 ring-1 ring-primary-green";

export const Form = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSecondColor, setSelectedSecondColor] = useState(null);
  const [size, memory, storage] = formItems;

  const handleColorClick = () => {
    if (selectedColor) {
      setSelectedColor(null);
    } else {
      setSelectedColor(style);
      setSelectedSecondColor(null);
    }
  };

  const handleSecondColorClick = () => {
    if (selectedSecondColor) {
      setSelectedSecondColor(null);
    } else {
      setSelectedSecondColor(style);
      setSelectedColor(null);
    }
  };

  return (
    <form className="flex flex-col w-full gap-[16px] ">
      <div className="flex  gap-[24px] ">
        <div className="flex flex-col gap-[8px]">
          <div className=" w-[312px] text-gray-900 ">Color</div>
          <div className="flex gap-[12px] ">
            <div
              className={`w-8 h-8 bg-[#e0e1e1] rounded-[16px] m-2  ${selectedColor}
              }`}
              onClick={() => handleColorClick()}
            ></div>
            <div
              className={`w-8 h-8 bg-[#e0e1e1] rounded-[16px] m-2 ${selectedSecondColor}
              }
              `}
              onClick={() => handleSecondColorClick()}
            ></div>
            {/* <button
              type="button"
              className={`inline-flex items-start gap-[10px] p-[6px] relative flex-[0_0_auto] bg-gray-00 rounded-[160px] border-2 border-solid ${
                selectedColor === "gray"
                  ? "border-primary-green"
                  : " border-transparent"
              }`}
              onClick={() => handleColorClick("green")}
            >
              <div className="relative w-[32px] h-[32px] bg-[#e0e1e1] rounded-[16px] shadow-[inset_0px_2px_6px_#0000001f,inset_0px_-2px_6px_#ffffff3d]" />
            </button> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[16px] ">
        <div className="inline-flex items-start gap-[24px] ">
          <div className="flex flex-col items-start gap-[8px] ">
            <label htmlFor="size">Size</label>
            <select
              id="size"
              name="size"
              className="border border-[#e4e7e9] flex text-gray-700 focus:border p-3 focus:border-[#00a218] focus:outline-none rounded-[2px]"
            >
              {size.sizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-start gap-[24px]">
          <div className="flex flex-col items-start gap-[8px]">
            <label htmlFor="memory">Memory</label>
            <select className=" rounded-[2px] border  border-[#e4e7e9]">
              {memory.memoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
            <div className="relative w-[312px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
              Storage
            </div>
            <select className="relative self-stretch w-full h-[44px] bg-gray-00 rounded-[2px] overflow-hidden border border-solid border-[#e4e7e9]">
              {storage.storageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};
