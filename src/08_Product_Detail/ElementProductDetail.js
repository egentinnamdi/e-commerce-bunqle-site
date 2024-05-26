import React from "react";
import { Breadcrumb } from "./Breadcrumb/Breadcumb";
import { FooterScreen } from "./FooterWrapper/Footer";
import { ProductsScreen } from "./Products/Products";
import { ProductInformationScreen } from "./ProductInformation/ProductInformation";
import { NavigationScreen } from "./NavigationWrapper/NavigationWrapper";
import { ProductDetailScreen } from "./ProductDetailWrapper/ProductDetail";

// import { ProductsScreen } from "./Products/Products";

const ElementProductDetail = () => {
  return (
    <div className="inline-flex flex-col h-[2504px] items-center justify-center relative bg-white overflow-hidden">
      <NavigationScreen />
      <Breadcrumb />
      <ProductDetailScreen />
      <ProductInformationScreen />
      <ProductsScreen />
      <FooterScreen />
    </div>
  );
};

export default ElementProductDetail;
