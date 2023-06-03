import React, { useState } from "react";
import RightSideBarCard from "./RightSideBarCard";
import InfoText from "./InfoText";
import RightSideBarTotalCard from "./RightSideBarTotalCard";
import RightSideBarBtnCard from "./RightSideBarBtnCard copy";
import SettingSvg from "@/components/Svg/SettingSvg";
import ShortOpenCard from "./ShortOpenCard";
import RangeSlider from "./RangeSlider";
import ShortOpenCardBG from "./ShortOpenCardBG";
import CollatrealRange from "./CollatrealRange";

function ShortOpen() {
        const [value, setValue] = useState(150);

    return (
        <div className="p-8 ">
            <div className="flex items-center justify-between mb-4">
                <p className="font-medium text-sm text-cardText">Mint & Sell squeeth for premium</p>
                <SettingSvg />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <ShortOpenCard />
                    <div>
                        <div className="font-medium text-xl w-full p-1.5 flex items-center px-4 h-[51px] rounded-xl border relative border-[#535050]">
                            <input
                                className="w-full text-white focus:outline-none bg-transparent"
                                type="text"
                                readOnly
                                value={value}
                            />
                            <p className=" absolute -top-3 px-1 left-4 bg-card text-cardText text-sm">
                                Collatreal Ratio
                            </p>
                            <p className=" absolute right-3 px-1 top-4 bg-card text-cardText text-sm">%</p>
                        </div>
                        <p className="text-xs text-cardText mt-2">At risk of liquidation at 150%</p>
                    </div>
                    <CollatrealRange value={value} setValue={setValue} />
                    {/* <RangeSlider /> */}
                    <ShortOpenCardBG />
                </div>
                <RightSideBarTotalCard />
                <div className="mt-4 flex flex-col gap-3">
                    <InfoText />
                    <InfoText />
                </div>
                <RightSideBarBtnCard name="DEPOSITE AND SELL" />
                <div className="text-center">
                    <span className=" font-medium text-cardText">Trades on Uniswap via Auto Router</span>
                </div>
            </div>
        </div>
    );
}

export default ShortOpen;
