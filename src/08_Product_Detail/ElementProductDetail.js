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
    <div className="flex flex-col h-full w-full  items-center justify-cente bg-white">
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
