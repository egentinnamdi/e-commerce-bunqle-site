import { useState } from "react";
import { NavigationScreen } from "../08_Product_Detail/NavigationWrapper/NavigationWrapper";
import Hamburger from "../ui/Hamburger";
import Navbar from "./Navbar";
import Promo from "./Promo";

function SecondPage() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }

  function handleKeyDown(e) {
    console.log(e);
  }

  return (
    <div onKeyUp={handleKeyDown}>
      <Hamburger isOpen={isOpen} handleOpen={handleOpen} />
      <div className="grid  grid-rows-[201px_520px_1040px] pry-padding min-h-screen gap-y-10">
        <Navbar handleOpen={handleOpen} />
        <Promo />

        <div className="bg-green-500">hello world</div>
      </div>
    </div>
  );
}

export default SecondPage;
