import React from "react";
import RightSideBarCard from "./RightSideBarCard";
import InfoText from "./InfoText";
import RightSideBarTotalCard from "./RightSideBarTotalCard";
import RightSideBarBtnCard from "./RightSideBarBtnCard copy";

function BuySquatzLP() {
    return (
        <div className="p-8 ">
            <p className="font-medium text-xl text-center text-btnSecondery mb-5">Buy Squatz to LP</p>
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
    );
}

export default BuySquatzLP;
