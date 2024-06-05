import { useState } from "react";

const categories = [
  "electronics",
  "computers",
  "fashion",
  "men",
  "women",
  " boys",
  "girls",
  "phones",
  "phones accessories",
  "beauty and personal care",
  "smart home",
  "home and furniture",
];

function Hamburger({ isOpen, handleOpen }) {
 
  return (
    // <div className="w-full h-full ">
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-[-100%]"
      } transition-all duration-500  ease-in-out pl-5 uppercase text-white min-h-96  bg-primary-green  w-1/4 absolute z-1 top-0 left-0 `}
    >
      <h1 className="relative font-semibold text-2xl">
        shop by department{" "}
        <span
          onClick={handleOpen}
          className="absolute right-0 top-[-15%] pr-5  text-4xl inline-block cursor-pointer"
        >
          &times;
        </span>
      </h1>
      {categories.map((item) => (
        <p key={item} className="font-medium py-5">
          {item}
        </p>
      ))}
    </div>
    // </div>
  );
}

export default Hamburger;
