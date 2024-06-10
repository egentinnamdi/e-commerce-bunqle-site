import React from 'react'


export const Widget = () => {
  return (
    <div className="relative w-[872px] h-[520px] bg-gray-50 rounded-[6px] overflow-hidden">
      <div className="inline-flex items-start gap-[8px] absolute top-[454px] left-[56px]">
        <div className="relative w-[10px] h-[10px] bg-gray-900 rounded-[5px]" />
        <div className="relative w-[10px] h-[10px] bg-gray-300 rounded-[5px]" />
        <div className="relative w-[10px] h-[10px] bg-gray-300 rounded-[5px]" />
      </div>
      <div className="gap-[24px] absolute top-[140px] left-[56px] inline-flex flex-col items-start">
        <div className="gap-[16px] relative flex-[0_0_auto] inline-flex flex-col items-start">
          <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
              <img className="relative w-[24px] h-[2px]" alt="Devider" src="devider.svg" />
              <p className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-[#00a218] text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
                THE BEST PLACE TO PLAY
              </p>
            </div>
            <div className="relative w-[356px] font-display-03 font-[number:var(--display-03-font-weight)] text-gray-900 text-[length:var(--display-03-font-size)] tracking-[var(--display-03-letter-spacing)] leading-[var(--display-03-line-height)] [font-style:var(--display-03-font-style)]">
              Xbox Consoles
            </div>
          </div>
          <p className="relative w-[356px] font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-gray-700 text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] [font-style:var(--body-large-400-font-style)]">
            Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
          </p>
        </div>
        <button className="all-[unset] box-border inline-flex items-center justify-center gap-[12px] px-[32px] py-0 relative flex-[0_0_auto] bg-[#00a218] rounded-[3px]">
          <div className="relative w-fit mt-[-1.00px] font-heading-06 font-[number:var(--heading-06-font-weight)] text-gray-00 text-[length:var(--heading-06-font-size)] tracking-[var(--heading-06-letter-spacing)] leading-[var(--heading-06-line-height)] whitespace-nowrap [font-style:var(--heading-06-font-style)]">
            SHOP NOW
          </div>
          <img className="relative w-[24px] h-[24px]" alt="Regular arrowright" src="arrow-right.svg" />
        </button>
      </div>
      <div className="absolute w-[374px] h-[412px] top-[52px] left-[448px]">
        <img className="absolute w-[368px] h-[408px] top-[4px] left-0" alt="Image" src="image.png" />
        <div className="inline-flex flex-col items-start gap-[10px] pl-[23px] pr-[21px] py-0 absolute top-0 left-[265px] bg-gray-900 rounded-[100px] border-4 border-solid border-white">
          <div className="relative w-fit [font-family:'Public_Sans-SemiBold',Helvetica] font-semibold text-gray-00 text-[22px] tracking-[0] leading-[100px] whitespace-nowrap">
            $299
          </div>
        </div>
      </div>
    </div>
  );
};