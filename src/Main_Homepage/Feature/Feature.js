import React from "react";
import { CreditCard } from "./CreditCard";
import { Headphones } from "./Headphones";
import { Line2 } from "./Line2";
import { Package } from "./Package";
import { Trophy } from "./Trophy";
import package from "./../../../public/BUNQLE_MARKETPLACE_DESK_SITE/Duotone/du"
export const Features = () => {
    return (
        <div className="inline-flex items-center justify-center gap-[28px] p-[16px] relative bg-gray-00 rounded-[6px] border border-solid border-[#e4e7e9]">
            <div className="inline-flex items-center justify-center gap-[16px] p-[16px] relative flex-[0_0_auto] bg-white">
                <img src={package} className="!relative !w-[40px] !h-[40px]" />
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                    <div className="relative w-[192px] mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-900 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] [font-style:var(--label-03-font-style)]">
                        FASTED DELIVERY
                    </div>
                    <div className="relative w-[192px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                        Delivery in 24/H
                    </div>
                </div>
            </div>
            <Line2 className="!relative !w-px !h-[56px] !object-cover" />
            <div className="inline-flex items-center justify-center gap-[16px] p-[16px] relative flex-[0_0_auto] bg-white">
                <Trophy className="!relative !w-[40px] !h-[40px]" />
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                    <div className="relative w-[192px] mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-900 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] [font-style:var(--label-03-font-style)]">
                        24 HOURS RETURN
                    </div>
                    <div className="relative w-[192px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                        100% money-back guarantee
                    </div>
                </div>
            </div>
            <Line2 className="!relative !w-px !h-[56px] !object-cover" />
            <div className="inline-flex items-center justify-center gap-[16px] p-[16px] relative flex-[0_0_auto] bg-white">
                <CreditCard className="!relative !w-[40px] !h-[40px]" />
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                    <div className="relative w-[192px] mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-900 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] [font-style:var(--label-03-font-style)]">
                        SECURE PAYMENT
                    </div>
                    <div className="relative w-[192px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                        Your money is safe
                    </div>
                </div>
            </div>
            <Line2 className="!relative !w-px !h-[56px] !object-cover" />
            <div className="inline-flex items-center justify-center gap-[16px] p-[16px] relative flex-[0_0_auto] bg-white">
                <Headphones className="!relative !w-[40px] !h-[40px]" />
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                    <div className="relative w-[192px] mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-900 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] [font-style:var(--label-03-font-style)]">
                        SUPPORT 24/7
                    </div>
                    <div className="relative w-[192px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                        Live contact/message
                    </div>
                </div>
            </div>
        </div>
    );
};