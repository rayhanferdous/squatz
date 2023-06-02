import React, { useState } from "react";
import RightSideBarTop from "./RightSideBarTop";
import RightSideBarCard from "./RightSideBarCard";
import InfoSvg from "@/components/Svg/InfoSvg";
import InfoText from "./InfoText";
import RightSideBarTotalCard from "./RightSideBarTotalCard";
import RightSideBarBtnCard from "./RightSideBarBtnCard copy";
import LongOpen from "./LongOpen";
import LongClose from "./LongClose";
import ShortOpen from "./ShortOpen";
import ShortClose from "./ShortClose";

function RightSidebarContent() {
    const [activeLong, setActiveLong] = useState(true);
    const [openLong, setOpenLong] = useState(true);
    const [openShort, setOpenShort] = useState(true);

    return (
        <div className="flex flex-col gap-9">
            <RightSideBarTop
                active={activeLong}
                setActiveLong={() => setActiveLong(true)}
                setActiveShort={() => setActiveLong(false)}
            />
            <div className="bg-card rounded-xl">
                {activeLong && (
                    <div className="flex h-[59px] w-full font-medium text-[19px]">
                        <div
                            onClick={() => setOpenLong(true)}
                            className={`w-full h-full flex items-center justify-center  rounded-tl-xl cursor-pointer ${
                                !openLong ? "text-[#8F9091] bg-[#363939]" : "text-white"
                            }`}
                        >
                            Open
                        </div>
                        <div
                            onClick={() => setOpenLong(false)}
                            className={`w-full h-full flex items-center justify-center rounded-tr-xl cursor-pointer ${
                                openLong ? "text-[#8F9091] bg-[#363939]" : "text-white"
                            }`}
                        >
                            Close
                        </div>
                    </div>
                )}
                {!activeLong && (
                    <div className="flex h-[59px] w-full font-medium text-[19px]">
                        <div
                            onClick={() => setOpenShort(true)}
                            className={`w-full h-full flex items-center justify-center rounded-tl-xl cursor-pointer ${
                                !openShort ? "text-[#8F9091] bg-[#363939]" : "text-white"
                            }`}
                        >
                            Open
                        </div>
                        <div
                            onClick={() => setOpenShort(false)}
                            className={`w-full h-full flex items-center justify-center rounded-tr-xl cursor-pointer ${
                                openShort ? "text-[#8F9091] bg-[#363939]" : "text-white"
                            }`}
                        >
                            Close
                        </div>
                    </div>
                )}
                {activeLong ? openLong ? <LongOpen /> : <LongClose /> : ""}
                {!activeLong ? openShort ? <ShortOpen /> : <ShortClose /> : ""}
            </div>
        </div>
    );
}

export default RightSidebarContent;
