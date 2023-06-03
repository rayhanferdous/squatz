import React from "react";

function ShortOpenCardBG() {
    return (
        <div className="h-[111px] flex bg-[#454748] flex-col justify-evenly rounded-2xl border border-[#535050] px-6 py-3">
            <div className="flex item-center justify-between font-medium text-sm text-cardText">
                <div>Sell</div>
                <div>$0.00</div>
            </div>
            <div className="flex item-center justify-between font-medium text-[23px] text-white">
                <input className="text-white w-full bg-transparent focus:outline-none" type="text" placeholder="0" />
                <div>0.00000</div>
            </div>
            <div className="flex item-center gap-4 text-sm text-white">
                <div className="font-medium ">Position 0.0000</div> <div className="font-medium ">oSQTH</div>{" "}
            </div>
        </div>
    );
}

export default ShortOpenCardBG;
