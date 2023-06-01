import React from "react";

function RightSideBarTotalCard() {
    return (
        <div className="h-[53px] font-medium items-center flex justify-between rounded-2xl border border-[#535050] px-6 py-5">
            <div className="flex item-center gap-1 justify-between font-medium text-sm text-cardText">
                <div>Slippage:</div>
                <div> 0.5%</div>
            </div>
            <div className="flex item-center gap-1 text-sm justify-between font-medium text-white">
                <div>Price Impact:</div>
                <div className="text-darkGreen"> 0%</div>
            </div>
            <p className="text-white">V</p>
        </div>
    );
}

export default RightSideBarTotalCard;
