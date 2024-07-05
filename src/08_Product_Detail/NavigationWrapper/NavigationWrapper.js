import React from "react";
import { Navigation } from "./Navigation/Navigation";
import { Widget, WidgetProduct } from "./Widget/WidgetProduct";
import { Icons } from "./Navigation/MiddleNav/Icons";

export const NavigationScreen = () => {
  return (
    <div className=" inline-flex flex-col items-start relative  ">
      <WidgetProduct />
      {/* <Widget className="" /> */}
      <Navigation />
    </div>
  );
};
