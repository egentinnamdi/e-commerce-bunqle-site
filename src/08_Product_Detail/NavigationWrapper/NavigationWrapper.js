import React from "react";
import { Navigation } from "./Navigation/Navigation";
import { Widget } from "./Widget/Widget";
import { Icons } from "./Navigation/MiddleNav/Icons";

export const NavigationScreen = () => {
  return (
    <div className=" inline-flex flex-col items-start relative  ">

      <Widget className=""/>
      <Navigation  />

    </div>
  );
};