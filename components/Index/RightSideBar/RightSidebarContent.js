import React from "react";
import RightSideBarTop from "./RightSideBarTop";
import RightSideBarCard from "./RightSideBarCard";
import InfoSvg from "@/components/Svg/InfoSvg";
import InfoText from "./InfoText";
import RightSideBarTotalCard from "./RightSideBarTotalCard";
import RightSideBarBtnCard from "./RightSideBarBtnCard copy";

function RightSidebarContent() {
    return (
        <div className="flex flex-col gap-9">
            <RightSideBarTop />
            <div className="bg-card rounded-xl">
                <div className="flex h-[59px] w-full font-medium text-[19px]">
                    <div className="w-full h-full flex items-center justify-center text-white rounded-tl-xl">Open</div>
                    <div className="w-full h-full flex items-center justify-center rounded-tr-xl text-[#8F9091] bg-[#363939]">
                        Close
                    </div>
                </div>
                <div className="p-8 ">
                    <p className="font-medium text-sm text-cardText mb-5">Pay XTZ to buy squatz FA1.2</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <RightSideBarCard />
                            <RightSideBarCard />
                        </div>
                        <div className="mt-4 flex flex-col gap-3">
                            <InfoText />
                            <InfoText />
                            <InfoText />
                        </div>
                        <RightSideBarTotalCard />
                        <RightSideBarBtnCard />
                        <div className="text-center">
                            <span className=" font-medium text-cardText">Trades on Quipuswap</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSidebarContent;
