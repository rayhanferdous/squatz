import React, { useState } from "react";
import InfoText from "./InfoText";
import RightSideBarTotalCard from "./RightSideBarTotalCard";
import RightSideBarBtnCard from "./RightSideBarBtnCard copy";
import ShortOpenCard from "./ShortOpenCard";
import ShortOpenCardBG from "./ShortOpenCardBG";
import CollatrealRange from "./CollatrealRange";

function MintToLp() {
        const [value, setValue] = useState(150);

    return (
        <div className="p-8 ">
            <div className="flex flex-col gap-3 items-center justify-center mb-4">
                <p className="font-medium text-xl text-btnSecondery">Mint SquaTz to Lp</p>
                <p className="text-red-700 font-medium">Warning: This Portion is Under Development</p>
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
                    <ShortOpenCardBG title="Mint" titleTwo="Balance" valueThree="0.00000" />
                </div>
                <div className="mt-4 flex flex-col gap-3">
                    <InfoText title="Liquidation Price" />
                    <InfoText title='Current Collatreal Ratio' />
                </div>
                <RightSideBarBtnCard name="Mint" />
            </div>
        </div>
    );
}

export default MintToLp;
