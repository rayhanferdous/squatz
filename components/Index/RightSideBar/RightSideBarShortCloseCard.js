import React from "react";

function RightSideBarShortCloseCard() {
    return (
        <div className="h-[111px] bg-[#454748] flex flex-col justify-evenly rounded-2xl border border-[#535050] px-6 py-3">
            <div className="flex item-center justify-between font-medium text-sm text-cardText">
                <div>Amount</div>
                <div>$0.00</div>
            </div>
            <div className="flex item-center justify-between font-medium text-[23px] text-white">
                <div>0</div>
                <div>XTZ</div>
            </div>
            <div className="flex item-center gap-4 text-sm text-white">
                <div className="font-medium ">Balance 0.000 XTZ</div>
                <div className="font-semibold text-btnSecondery">MAX</div>
            </div>
        </div>
    );
}

export default RightSideBarShortCloseCard;
