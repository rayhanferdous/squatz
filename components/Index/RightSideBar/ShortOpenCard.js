import React from "react";

function ShortOpenCard() {
    return (
        <div className="h-[111px] flex flex-col justify-evenly rounded-2xl border border-[#535050] px-6 py-3">
            <div className="flex item-center justify-between font-medium text-sm text-cardText">
                <div>Collatreal</div>
                <div>$0.00</div>
            </div>
            <div className="flex item-center justify-between font-medium text-[23px] text-white">
                <div>0</div>
                <div>ETH</div>
            </div>
            <div className="flex item-center gap-4 text-sm text-white">
                <div className="font-medium ">Balance 0.000</div>{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 -rotate-90"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                </svg>
                <div className="font-medium ">0.000 ETH</div> <div className="font-semibold text-btnSecondery">MAX</div>
            </div>
        </div>
    );
}

export default ShortOpenCard;
