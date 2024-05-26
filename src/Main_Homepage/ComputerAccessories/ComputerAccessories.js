import React from "react";
import { ProductDetail } from "src\08_Product_DetailProductDetailWrapperProductDetailProductDetail";
import { ArrowRight } from "./ArrowRight";
import { OnlyForSmartphoneProduct } from "./OnlyForSmartphoneProduct";

export const ComputerAccessories = () => {
  return (
    <div className="inline-flex items-center justify-center gap-[24px] px-[300px] py-[72px] relative">
      <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
        <div className="flex w-[984px] items-center justify-between relative flex-[0_0_auto]">
          <div className="relative w-fit font-heading-03 font-[number:var(--heading-03-font-weight)] text-gray-900 text-[length:var(--heading-03-font-size)] tracking-[var(--heading-03-letter-spacing)] leading-[var(--heading-03-line-height)] whitespace-nowrap [font-style:var(--heading-03-font-style)]">
            Computer Accessories
          </div>
          <div className="inline-flex items-center justify-center gap-[16px] relative flex-[0_0_auto]">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="shadow-[inset_0px_-2px_0px_#f98131] inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-gray-00">
                <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-900 text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
                  All Product
                </div>
              </div>
              <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-gray-00">
                <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                  Keyboard &amp; Mouse
                </div>
              </div>
              <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-gray-00">
                <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                  Headphone
                </div>
              </div>
              <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-gray-00">
                <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                  Webcam
                </div>
              </div>
              <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-gray-00">
                <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                  Printer
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-[8px] px-0 py-[6px] relative flex-[0_0_auto] bg-gray-00">
              <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-[#00a218] text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
                Browse All Product
              </div>
              <ArrowRight className="!relative !w-[20px] !h-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex-col inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
          </div>
          <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center justify-center gap-[24px] p-[32px] relative flex-[0_0_auto] bg-warning-200 rounded-[4px]">
          <div className="gap-[12px] inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
            <img className="relative w-[156px] h-[156px] mt-[-12.00px]" alt="Image" src="image.png" />
            <div className="gap-[16px] inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                <div className="relative w-[248px] mt-[-1.00px] font-heading-02 font-[number:var(--heading-02-font-weight)] text-gray-900 text-[length:var(--heading-02-font-size)] text-center tracking-[var(--heading-02-letter-spacing)] leading-[var(--heading-02-line-height)] [font-style:var(--heading-02-font-style)]">
                  Xiaomi True Wireless Earbuds
                </div>
                <p className="relative w-[248px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-gray-700 text-[length:var(--body-medium-400-font-size)] text-center tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] [font-style:var(--body-medium-400-font-style)]">
                  Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
                </p>
              </div>
              <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                  Only for:
                </div>
                <div className="inline-flex items-start gap-[10px] px-[12px] py-[6px] relative flex-[0_0_auto] bg-gray-00 rounded-[3px]">
                  <div className="relative w-fit mt-[-2.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-gray-900 text-[length:var(--body-medium-600-font-size)] text-center tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] whitespace-nowrap [font-style:var(--body-medium-600-font-style)]">
                    $299 USD
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#00a218] flex w-[248px] items-center justify-center gap-[8px] px-[24px] py-0 relative flex-[0_0_auto] rounded-[2px]">
            <div className="relative w-fit mt-[-1.00px] font-heading-07 font-[number:var(--heading-07-font-weight)] text-gray-00 text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] whitespace-nowrap [font-style:var(--heading-07-font-style)]">
              SHOP NOW
            </div>
            <ArrowRight className="!relative !w-[20px] !h-[20px]" />
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-center gap-[24px] px-[24px] py-[40px] relative flex-[0_0_auto] bg-[#00a218] rounded-[4px]">
          <div className="gap-[12px] inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
            <div className="px-[12px] py-[6px] relative flex-[0_0_auto] bg-[#ffffff1f] inline-flex items-start gap-[10px] rounded-[2px]">
              <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-00 text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
                SUMMER SALES
              </div>
            </div>
            <div className="relative w-[248px] font-heading-02 font-[number:var(--heading-02-font-weight)] text-white text-[length:var(--heading-02-font-size)] text-center tracking-[var(--heading-02-letter-spacing)] leading-[var(--heading-02-line-height)] [font-style:var(--heading-02-font-style)]">
              37% DISCOUNT
            </div>
            <OnlyForSmartphoneProduct className="!relative !w-[245.24px] !flex-[0_0_auto]" />
          </div>
          <div className="bg-gray-900 flex w-[248px] items-center justify-center gap-[8px] px-[24px] py-0 relative flex-[0_0_auto] rounded-[2px]">
            <div className="relative w-fit mt-[-1.00px] font-heading-07 font-[number:var(--heading-07-font-weight)] text-gray-00 text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] whitespace-nowrap [font-style:var(--heading-07-font-style)]">
              SHOP NOW
            </div>
            <ArrowRight className="!relative !w-[20px] !h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};