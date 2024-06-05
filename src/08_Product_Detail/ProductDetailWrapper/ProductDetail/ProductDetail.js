import React from "react";
import { Form } from "./Form";
import { Prices } from "./Prices";
import { ProductContent } from "./ProductContent";
// import { Content } from "./Content";

export const ProductDetail = () => {
  return (
    <div className="inline-flex flex-col items-start gap-[24px] relative">
      <ProductContent />
      <Prices />
      <Form />
      {/* <Content /> */}
    </div>
  );
};
