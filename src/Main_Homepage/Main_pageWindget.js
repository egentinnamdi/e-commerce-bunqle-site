import React from "react";
import ProductInformationScreen from "./Header/ProductInformationScreen";
import { Widget } from "./Widget";
export const ElementHomepage = () => {
  return (
    <div>
      {/* <ProductInformationScreen /> */}
      <Widget/>
    </div>
  )
}
// import { Widget } from "src\08_Product_DetailNavigationWrapperWidgetWidget";
// import { ProductDetail } from "src\08_Product_DetailProductDetailWrapperProductDetailProductDetail";
// import { ArrowRight } from "./ArrowRight";
// import { ArrowsCounterClockwise } from "./ArrowsCounterClockwise";
// import { CalendarBlank } from "./CalendarBlank";
// import { CaretDown } from "./CaretDown";
// import { ChatCircleDots } from "./ChatCircleDots";
// import { CreditCard } from "./CreditCard";
// import { Headphones } from "./Headphones";
// import { Heart } from "./Heart";
// import { IconComponentNode } from "./IconComponentNode";
// import { Info } from "./Info";
// import { Line1 } from "./Line1";
// import { Line2 } from "./Line2";
// import { MagnifyingGlass } from "./MagnifyingGlass";
// import { MapPinLine } from "./MapPinLine";
// import { NamecandidateNameCaretDownScore101 } from "./NamecandidateNameCaretDownScore101";
// import { NamecandidateNameHeadphonesScore101 } from "./NamecandidateNameHeadphonesScore101";
// import { OnlyForSmartphoneProduct } from "./OnlyForSmartphoneProduct";
// import { Package } from "./Package";
// import { PhoneCall } from "./PhoneCall";
// import { SocialIcon } from "./SocialIcon";
// import { Trophy } from "./Trophy";
// import { User } from "./User";
// import { UserCircle } from "./UserCircle";
// import { Vector } from "./Vector";

// export const ElementHomepage = () => {
//   return (
//     <div className="inline-flex flex-col items-center justify-center relative bg-[#f6f6f6]">
//       <header className="inline-flex flex-col items-center justify-center gap-[24px] relative flex-[0_0_auto] bg-transparent">
//         <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
//           <Widget />
//           <div className="relative w-[1920px] h-[220px]">
//             <div className="flex w-[1920px] items-center justify-around gap-[607px] px-[300px] py-[12px] absolute top-0 left-0 bg-white shadow-[inset_0px_-1px_0px_#ffffff29]">
//               <div className="justify-center gap-[24px] inline-flex items-center relative flex-[0_0_auto]">
//                 <div className="inline-flex items-center justify-center gap-[12px] relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-white text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                     Follow us:
//                   </div>
//                   <SocialIcon className="!relative !flex-[0_0_auto]" />
//                 </div>
//                 <Line1 className="!h-[28px] !relative !w-px !object-cover" />
//                 <div className="relative w-[44px] h-[20px]">
//                   <div className="inline-flex items-center justify-center gap-[6px] relative">
//                     <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-white text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       Eng
//                     </div>
//                     <CaretDown className="!relative !w-[12px] !h-[12px]" />
//                   </div>
//                 </div>
//                 <div className="relative w-[47px] h-[20px]">
//                   <div className="left-[-2px] inline-flex items-center justify-center gap-[6px] relative">
//                     <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-[#00a218] text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       NGN
//                     </div>
//                     <CaretDown className="!relative !w-[12px] !h-[12px]" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute w-[1920px] h-[168px] top-[52px] left-0">
//               <div className="inline-flex items-center justify-center gap-[211px] px-[152px] py-0 absolute top-0 left-0 bg-white">
//                 <div className="relative w-[262px] h-[101px]">
//                   <img
//                     className="absolute w-[386px] h-[64px] top-[19px] left-[-31px] object-cover"
//                     alt="Bunq WHITE"
//                     src="BUNQ-WHITE-1.png"
//                   />
//                 </div>
//                 <div className="gap-[8px] px-[20px] py-[14px] bg-gray-00 rounded-[2px] shadow-[0px_8px_32px_#00000014] inline-flex items-start relative flex-[0_0_auto]">
//                   <div className="relative w-[578px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-[#00a218] text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
//                     Search for anything...
//                   </div>
//                   <MagnifyingGlass className="!relative !w-[20px] !h-[20px]" />
//                 </div>
//                 <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
//                   <div className="relative w-[32px] h-[32px] mt-[-166.50px] ml-[-1482.00px] bg-[100%_100%]">
//                     <Vector className="!absolute !w-[4px] !h-[4px] !top-[25px] !left-[8px]" />
//                     <Vector className="!absolute !w-[4px] !h-[4px] !top-[25px] !left-[21px]" />
//                     <div className="absolute w-[38px] h-[29px] top-[-6px] left-0">
//                       <IconComponentNode className="!absolute !w-[29px] !h-[20px] !top-[8px] !left-0" />
//                       <div className="inline-flex flex-col items-start gap-[10px] px-0 py-[2px] absolute top-0 left-[14px] bg-white rounded-[100px] border-[1.5px] border-solid border-[#00a218]">
//                         <div className="relative w-[20px] font-body-tiny-600 font-[number:var(--body-tiny-600-font-weight)] text-[#00a218] text-[length:var(--body-tiny-600-font-size)] text-center tracking-[var(--body-tiny-600-letter-spacing)] leading-[var(--body-tiny-600-line-height)] [font-style:var(--body-tiny-600-font-style)]">
//                           2
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <Heart className="!relative !w-[32px] !h-[32px]" />
//                   <User className="!relative !w-[32px] !h-[32px]" />
//                 </div>
//               </div>
//               <div className="flex w-[1920px] items-center justify-between px-[300px] py-[16px] absolute top-[88px] left-0 bg-gray-00 shadow-[inset_0px_-1px_0px_#e4e7e9]">
//                 <div className="justify-center gap-[24px] inline-flex items-center relative flex-[0_0_auto]">
//                   <div className="relative w-[154px] h-[48px]">
//                     <div className="inline-flex items-center justify-center gap-[8px] px-[24px] py-[14px] relative bg-gray-50 rounded-[2px]">
//                       <div className="mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-[#191c1e] text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] relative w-fit whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
//                         All Category
//                       </div>
//                       <NamecandidateNameCaretDownScore101 className="!relative !w-[16px] !h-[16px]" />
//                     </div>
//                   </div>
//                   <div className="gap-[6px] inline-flex items-center relative flex-[0_0_auto]">
//                     <MapPinLine className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-black text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       Track Order
//                     </div>
//                   </div>
//                   <div className="gap-[6px] inline-flex items-center relative flex-[0_0_auto]">
//                     <ArrowsCounterClockwise className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-black text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       Compare
//                     </div>
//                   </div>
//                   <div className="gap-[6px] inline-flex items-center relative flex-[0_0_auto]">
//                     <Headphones className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-black text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       Customer Support
//                     </div>
//                   </div>
//                   <div className="gap-[6px] inline-flex items-center relative flex-[0_0_auto]">
//                     <Info className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-black text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       Need Help
//                     </div>
//                   </div>
//                 </div>
//                 <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
//                   <PhoneCall className="!relative !w-[28px] !h-[28px]" />
//                   <div className="relative w-fit font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-[#191c1e] text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] whitespace-nowrap [font-style:var(--body-large-400-font-style)]">
//                     +1-202-555-0104
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="inline-flex items-center justify-center gap-[28px] p-[16px] relative flex-[0_0_auto] bg-gray-00 rounded-[6px] border border-solid border-[#e4e7e9]">
//           <div className="inline-flex items-center justify-center gap-[16px] p-[16px] relative flex-[0_0_auto] bg-white">
//             <Package className="!relative !w-[40px] !h-[40px]" />
//             <div className="items-start gap-[4px] inline-flex flex-col relative flex-[0_0_auto]">
//               <div className="relative w-[192px] mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-900 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] [font-style:var(--label-03-font-style)]">
//                 FASTED DELIVERY
//               </div>
//               <div className="relative w-[192px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
//                 Delivery in 24/H
//               </div>
//             </div>
//           </div>
//           <Line2 className="!h-[56px] !relative !w-px !object-cover" />
//           <div className="inline-flex items-center justify-center gap-[16px] p-[16px] relative flex-[0_0_auto] bg-white">
//             <Trophy className="!relative !w-[40px] !h-[40px]" />
//             <div className="items-start gap-[4px] inline-flex flex-col relative flex-[0_0_auto]">
//               <div className="relative w-[192px] mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-900 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] [font-style:var(--label-03-font-style)]">
//                 24 HOURS RETURN
//               </div>
//               <div className="relative w-[192px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
//                 100% money-back guarantee
//               </div>
//             </div>
//           </div>
//           <Line2 className="!h-[56px] !relative !w-px !object-cover" />
//           <div className="inline-flex items-center justify-center gap-[16px] p-[16px] relative flex-[0_0_auto] bg-white">
//             <CreditCard className="!relative !w-[40px] !h-[40px]" />
//             <div className="items-start gap-[4px] inline-flex flex-col relative flex-[0_0_auto]">
//               <div className="relative w-[192px] mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-900 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] [font-style:var(--label-03-font-style)]">
//                 SECURE PAYMENT
//               </div>
//               <div className="relative w-[192px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
//                 Your money is safe
//               </div>
//             </div>
//           </div>
//           <Line2 className="!h-[56px] !relative !w-px !object-cover" />
//           <div className="inline-flex items-center justify-center gap-[16px] p-[16px] relative flex-[0_0_auto] bg-white">
//             <NamecandidateNameHeadphonesScore101 className="!relative !w-[40px] !h-[40px]" />
//             <div className="items-start gap-[4px] inline-flex flex-col relative flex-[0_0_auto]">
//               <div className="relative w-[192px] mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-900 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] [font-style:var(--label-03-font-style)]">
//                 SUPPORT 24/7
//               </div>
//               <div className="relative w-[192px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
//                 Live contact/message
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div className="relative flex-[0_0_auto]" />
//       <div className="relative flex-[0_0_auto]" />
//       <div className="relative flex-[0_0_auto]" />
//       <div className="inline-flex items-center justify-center gap-[24px] px-[300px] py-[72px] relative flex-[0_0_auto]">
//         <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
//           <div className="flex w-[984px] items-center justify-between relative flex-[0_0_auto]">
//             <div className="relative w-fit font-heading-03 font-[number:var(--heading-03-font-weight)] text-gray-900 text-[length:var(--heading-03-font-size)] tracking-[var(--heading-03-letter-spacing)] leading-[var(--heading-03-line-height)] whitespace-nowrap [font-style:var(--heading-03-font-style)]">
//               Computer Accessories
//             </div>
//             <div className="justify-center gap-[16px] inline-flex items-center relative flex-[0_0_auto]">
//               <div className="inline-flex items-start relative flex-[0_0_auto]">
//                 <div className="gap-[10px] p-[8px] bg-gray-00 shadow-[inset_0px_-2px_0px_#f98131] inline-flex items-start relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-900 text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
//                     All Product
//                   </div>
//                 </div>
//                 <div className="gap-[10px] p-[8px] bg-gray-00 inline-flex items-start relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                     Keyboard &amp; Mouse
//                   </div>
//                 </div>
//                 <div className="gap-[10px] p-[8px] bg-gray-00 inline-flex items-start relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                     Headphone
//                   </div>
//                 </div>
//                 <div className="gap-[10px] p-[8px] bg-gray-00 inline-flex items-start relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                     Webcam
//                   </div>
//                 </div>
//                 <div className="gap-[10px] p-[8px] bg-gray-00 inline-flex items-start relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                     Printer
//                   </div>
//                 </div>
//               </div>
//               <div className="inline-flex items-center gap-[8px] px-0 py-[6px] relative flex-[0_0_auto] bg-gray-00">
//                 <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-[#00a218] text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
//                   Browse All Product
//                 </div>
//                 <ArrowRight className="!relative !w-[20px] !h-[20px]" color="#191C1F" />
//               </div>
//             </div>
//           </div>
//           <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
//             <div className="gap-[16px] inline-flex items-start relative flex-[0_0_auto]">
//               <ProductDetail />
//               <ProductDetail />
//               <ProductDetail />
//               <ProductDetail />
//             </div>
//             <div className="gap-[16px] inline-flex items-start relative flex-[0_0_auto]">
//               <ProductDetail />
//               <ProductDetail />
//               <ProductDetail />
//               <ProductDetail />
//             </div>
//           </div>
//         </div>
//         <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
//           <div className="inline-flex flex-col items-center justify-center gap-[24px] p-[32px] relative flex-[0_0_auto] bg-warning-200 rounded-[4px]">
//             <div className="items-center justify-center gap-[12px] relative flex-[0_0_auto] inline-flex flex-col">
//               <img className="relative w-[156px] h-[156px] mt-[-12.00px]" alt="Image" src="image.png" />
//               <div className="items-center justify-center gap-[16px] relative flex-[0_0_auto] inline-flex flex-col">
//                 <div className="items-center justify-center gap-[8px] inline-flex flex-col relative flex-[0_0_auto]">
//                   <div className="relative w-[248px] mt-[-1.00px] font-heading-02 font-[number:var(--heading-02-font-weight)] text-gray-900 text-[length:var(--heading-02-font-size)] text-center tracking-[var(--heading-02-letter-spacing)] leading-[var(--heading-02-line-height)] [font-style:var(--heading-02-font-style)]">
//                     Xiaomi True Wireless Earbuds
//                   </div>
//                   <p className="relative w-[248px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-gray-700 text-[length:var(--body-medium-400-font-size)] text-center tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] [font-style:var(--body-medium-400-font-style)]">
//                     Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
//                   </p>
//                 </div>
//                 <div className="items-center justify-center gap-[8px] inline-flex relative flex-[0_0_auto]">
//                   <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                     Only for:
//                   </div>
//                   <div className="items-start gap-[10px] px-[12px] py-[6px] bg-gray-00 rounded-[3px] inline-flex relative flex-[0_0_auto]">
//                     <div className="relative w-fit mt-[-2.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-gray-900 text-[length:var(--body-medium-600-font-size)] text-center tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] whitespace-nowrap [font-style:var(--body-medium-600-font-style)]">
//                       $299 USD
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex w-[248px] items-center justify-center gap-[8px] px-[24px] py-0 relative flex-[0_0_auto] bg-[#00a218] rounded-[2px]">
//               <div className="mt-[-1.00px] font-heading-07 font-[number:var(--heading-07-font-weight)] text-gray-00 text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] relative w-fit whitespace-nowrap [font-style:var(--heading-07-font-style)]">
//                 SHOP NOW
//               </div>
//               <ArrowRight className="!relative !w-[20px] !h-[20px]" color="#191C1F" />
//             </div>
//           </div>
//           <div className="inline-flex flex-col items-center justify-center gap-[24px] px-[24px] py-[40px] relative flex-[0_0_auto] bg-[#00a218] rounded-[4px]">
//             <div className="items-center justify-center gap-[12px] relative flex-[0_0_auto] inline-flex flex-col">
//               <div className="px-[12px] py-[6px] relative flex-[0_0_auto] bg-[#ffffff1f] inline-flex items-start gap-[10px] rounded-[2px]">
//                 <div className="text-[length:var(--body-small-600-font-size)] leading-[var(--body-small-600-line-height)] relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-00 tracking-[var(--body-small-600-letter-spacing)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
//                   SUMMER SALES
//                 </div>
//               </div>
//               <div className="relative w-[248px] font-heading-02 font-[number:var(--heading-02-font-weight)] text-white text-[length:var(--heading-02-font-size)] text-center tracking-[var(--heading-02-letter-spacing)] leading-[var(--heading-02-line-height)] [font-style:var(--heading-02-font-style)]">
//                 37% DISCOUNT
//               </div>
//               <OnlyForSmartphoneProduct className="!relative !w-[245.24px] !flex-[0_0_auto]" />
//             </div>
//             <div className="flex w-[248px] items-center justify-center gap-[8px] px-[24px] py-0 relative flex-[0_0_auto] bg-gray-900 rounded-[2px]">
//               <div className="mt-[-1.00px] font-heading-07 font-[number:var(--heading-07-font-weight)] text-gray-00 text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] relative w-fit whitespace-nowrap [font-style:var(--heading-07-font-style)]">
//                 SHOP NOW
//               </div>
//               <ArrowRight className="!relative !w-[20px] !h-[20px]" color="#191C1F" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="relative w-[1438px] h-[424px] bg-gray-300">
//         <div className="items-start gap-[22px] absolute top-[80px] left-[72px] inline-flex flex-col">
//           <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
//             <div className="gap-[10px] px-[12px] py-[6px] bg-gray-900 rounded-[2px] inline-flex items-start relative flex-[0_0_auto]">
//               <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-00 text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
//                 SAVE UP TO $200.00
//               </div>
//             </div>
//             <div className="relative w-[424px] font-display-03 font-[number:var(--display-03-font-weight)] text-gray-900 text-[length:var(--display-03-font-size)] tracking-[var(--display-03-letter-spacing)] leading-[var(--display-03-line-height)] [font-style:var(--display-03-font-style)]">
//               Macbook Pro
//             </div>
//           </div>
//           <p className="relative w-[424px] font-body-XXL-400 font-[number:var(--body-XXL-400-font-weight)] text-gray-900 text-[length:var(--body-XXL-400-font-size)] tracking-[var(--body-XXL-400-letter-spacing)] leading-[var(--body-XXL-400-line-height)] [font-style:var(--body-XXL-400-font-style)]">
//             Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
//           </p>
//           <div className="inline-flex items-center justify-center gap-[12px] px-[32px] py-0 relative flex-[0_0_auto] bg-[#00a218] rounded-[3px]">
//             <div className="mt-[-1.00px] font-heading-06 font-[number:var(--heading-06-font-weight)] text-gray-00 text-[length:var(--heading-06-font-size)] tracking-[var(--heading-06-letter-spacing)] leading-[var(--heading-06-line-height)] relative w-fit whitespace-nowrap [font-style:var(--heading-06-font-style)]">
//               SHOP NOW
//             </div>
//             <ArrowRight className="!relative !w-[24px] !h-[24px]" color="#191C1F" />
//           </div>
//         </div>
//         <div className="absolute w-[564px] h-[424px] top-0 left-[828px]">
//           <img className="absolute w-[536px] h-[424px] top-0 left-[28px] object-cover" alt="Image" src="image-2.png" />
//           <div className="items-start gap-[10px] pl-[25px] pr-[24px] py-[41px] top-[34px] left-0 bg-primary-200 rounded-[1000px] border-[6px] border-solid border-white inline-flex absolute">
//             <div className="relative w-fit font-body-XL-600 font-[number:var(--body-XL-600-font-weight)] text-gray-900 text-[length:var(--body-XL-600-font-size)] tracking-[var(--body-XL-600-letter-spacing)] leading-[var(--body-XL-600-line-height)] whitespace-nowrap [font-style:var(--body-XL-600-font-style)]">
//               $1999
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="inline-flex items-center justify-center gap-[24px] px-[300px] py-[72px] relative flex-[0_0_auto]">
//         <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
//           <div className="relative w-[312px] mt-[-1.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-gray-900 text-[length:var(--body-medium-600-font-size)] tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] [font-style:var(--body-medium-600-font-style)]">
//             FLASH SALE TODAY
//           </div>
//           <ProductDetail />
//           <ProductDetail />
//           <ProductDetail />
//         </div>
//         <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
//           <div className="relative w-[312px] mt-[-1.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-gray-900 text-[length:var(--body-medium-600-font-size)] tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] [font-style:var(--body-medium-600-font-style)]">
//             BEST SELLERS
//           </div>
//           <ProductDetail />
//           <ProductDetail />
//           <ProductDetail />
//         </div>
//         <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
//           <div className="relative w-[312px] mt-[-1.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-gray-900 text-[length:var(--body-medium-600-font-size)] tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] [font-style:var(--body-medium-600-font-style)]">
//             TOP RATED
//           </div>
//           <ProductDetail />
//           <ProductDetail />
//           <ProductDetail />
//         </div>
//         <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
//           <div className="relative w-[312px] mt-[-1.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-gray-900 text-[length:var(--body-medium-600-font-size)] tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] [font-style:var(--body-medium-600-font-style)]">
//             NEW ARRIVAL
//           </div>
//           <ProductDetail />
//           <ProductDetail />
//           <ProductDetail />
//         </div>
//       </div>
//       <div className="inline-flex flex-col items-start gap-[40px] px-[300px] py-[72px] relative flex-[0_0_auto] bg-gray-50">
//         <div className="relative w-[1320px] mt-[-1.00px] font-heading-01 font-[number:var(--heading-01-font-weight)] text-gray-900 text-[length:var(--heading-01-font-size)] text-center tracking-[var(--heading-01-letter-spacing)] leading-[var(--heading-01-line-height)] [font-style:var(--heading-01-font-style)]">
//           Latest News
//         </div>
//         <div className="gap-[24px] inline-flex items-start relative flex-[0_0_auto]">
//           <div className="inline-flex flex-col items-start gap-[24px] p-[32px] relative flex-[0_0_auto] bg-gray-00 rounded-[4px] border border-solid border-[#e4e7e9] shadow-[0px_8px_24px_#0000000a]">
//             <img className="relative w-[360px] h-[248px] object-cover" alt="Unsplash" src="unsplash-izvrfelg1t0.png" />
//             <div className="items-start gap-[12px] relative flex-[0_0_auto] inline-flex flex-col">
//               <div className="items-start gap-[8px] relative flex-[0_0_auto] inline-flex flex-col">
//                 <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
//                   <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
//                     <UserCircle className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       Kristin
//                     </div>
//                   </div>
//                   <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
//                     <CalendarBlank className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       19Dec, 2013
//                     </div>
//                   </div>
//                   <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
//                     <ChatCircleDots className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       453
//                     </div>
//                   </div>
//                 </div>
//                 <p className="relative w-[360px] font-body-large-500 font-[number:var(--body-large-500-font-weight)] text-gray-900 text-[length:var(--body-large-500-font-size)] tracking-[var(--body-large-500-letter-spacing)] leading-[var(--body-large-500-line-height)] [font-style:var(--body-large-500-font-style)]">
//                   Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.
//                 </p>
//               </div>
//               <p className="relative w-[360px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-gray-500 text-[length:var(--body-medium-400-font-size)] tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] [font-style:var(--body-medium-400-font-style)]">
//                 Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu
//                 metus posuere metus.
//               </p>
//             </div>
//             <div className="inline-flex items-center justify-center gap-[8px] px-[24px] py-0 relative flex-[0_0_auto] rounded-[2px] border-2 border-solid border-[#adb7bc]">
//               <div className="mt-[-2.00px] font-heading-07 font-[number:var(--heading-07-font-weight)] text-[#00a218] text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] relative w-fit whitespace-nowrap [font-style:var(--heading-07-font-style)]">
//                 READ MORE
//               </div>
//               <ArrowRight className="!relative !w-[20px] !h-[20px]" color="#191C1F" />
//             </div>
//           </div>
//           <div className="overflow-hidden inline-flex flex-col items-start gap-[24px] p-[32px] relative flex-[0_0_auto] bg-gray-00 rounded-[4px] border border-solid border-[#e4e7e9] shadow-[0px_8px_24px_#0000000a]">
//             <img className="relative w-[360px] h-[248px] object-cover" alt="Unsplash" src="unsplash-fo7jilwjotu.png" />
//             <div className="items-start gap-[12px] relative flex-[0_0_auto] inline-flex flex-col">
//               <div className="items-start gap-[8px] relative flex-[0_0_auto] inline-flex flex-col">
//                 <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
//                   <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
//                     <UserCircle className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       Robert
//                     </div>
//                   </div>
//                   <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
//                     <CalendarBlank className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       28 Nov, 2015
//                     </div>
//                   </div>
//                   <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
//                     <ChatCircleDots className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       738
//                     </div>
//                   </div>
//                 </div>
//                 <p className="relative w-[360px] font-body-large-500 font-[number:var(--body-large-500-font-weight)] text-gray-900 text-[length:var(--body-large-500-font-size)] tracking-[var(--body-large-500-letter-spacing)] leading-[var(--body-large-500-line-height)] [font-style:var(--body-large-500-font-style)]">
//                   Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.
//                 </p>
//               </div>
//               <p className="relative w-[360px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-gray-500 text-[length:var(--body-medium-400-font-size)] tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] [font-style:var(--body-medium-400-font-style)]">
//                 Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit
//                 blandit lorem.
//               </p>
//             </div>
//             <div className="inline-flex items-center justify-center gap-[8px] px-[24px] py-0 relative flex-[0_0_auto] rounded-[2px] border-2 border-solid border-[#adb7bc]">
//               <div className="mt-[-2.00px] font-heading-07 font-[number:var(--heading-07-font-weight)] text-[#00a218] text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] relative w-fit whitespace-nowrap [font-style:var(--heading-07-font-style)]">
//                 READ MORE
//               </div>
//               <ArrowRight className="!relative !w-[20px] !h-[20px]" color="#191C1F" />
//             </div>
//           </div>
//           <div className="inline-flex flex-col items-start gap-[24px] p-[32px] relative flex-[0_0_auto] bg-gray-00 rounded-[4px] border border-solid border-[#e4e7e9] shadow-[0px_8px_24px_#0000000a]">
//             <img
//               className="relative w-[360px] h-[248px] object-cover"
//               alt="Unsplash y"
//               src="unsplash-6mnmdi1hc-y.png"
//             />
//             <div className="items-start gap-[12px] relative flex-[0_0_auto] inline-flex flex-col">
//               <div className="items-start gap-[8px] relative flex-[0_0_auto] inline-flex flex-col">
//                 <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
//                   <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
//                     <UserCircle className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       Arlene
//                     </div>
//                   </div>
//                   <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
//                     <CalendarBlank className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       9 May, 2014
//                     </div>
//                   </div>
//                   <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
//                     <ChatCircleDots className="!relative !w-[24px] !h-[24px]" />
//                     <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
//                       826
//                     </div>
//                   </div>
//                 </div>
//                 <p className="relative w-[360px] font-body-large-500 font-[number:var(--body-large-500-font-weight)] text-gray-900 text-[length:var(--body-large-500-font-size)] tracking-[var(--body-large-500-letter-spacing)] leading-[var(--body-large-500-line-height)] [font-style:var(--body-large-500-font-style)]">
//                   Curabitur massa orci, consectetur et blandit ac, auctor et tellus.
//                 </p>
//               </div>
//               <p className="relative w-[360px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-gray-500 text-[length:var(--body-medium-400-font-size)] tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] [font-style:var(--body-medium-400-font-style)]">
//                 Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue
//                 condimentum purus.
//               </p>
//             </div>
//             <div className="inline-flex items-center justify-center gap-[8px] px-[24px] py-0 relative flex-[0_0_auto] rounded-[2px] border-2 border-solid border-[#adb7bc]">
//               <div className="mt-[-2.00px] font-heading-07 font-[number:var(--heading-07-font-weight)] text-[#00a218] text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] relative w-fit whitespace-nowrap [font-style:var(--heading-07-font-style)]">
//                 READ MORE
//               </div>
//               <ArrowRight className="!relative !w-[20px] !h-[20px]" color="#191C1F" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };