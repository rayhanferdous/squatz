import React from "react";

function ShortOpenCardBG({
    title = "Sell",
    valueOne = "$0.00",
    valueTwo = "0.00000",
    titleTwo = "Position 0.0000",
    valueThree = "oSQTH",
}) {
    return (
        <div className="h-[111px] flex bg-[#454748] flex-col justify-evenly rounded-2xl border border-[#535050] px-6 py-3">
            <div className="flex item-center justify-between font-medium text-sm text-cardText">
                <div>{title}</div>
                <div>{valueOne}</div>
            </div>
            <div className="flex item-center justify-between font-medium text-[23px] text-white">
                <input className="text-white w-full bg-transparent focus:outline-none" type="text" placeholder="0" />
                <div>{valueTwo}</div>
            </div>
            <div className="flex item-center gap-4 text-sm text-white">
                <div className="font-medium ">{titleTwo}</div> <div className="font-medium ">{valueThree}</div>
            </div>
        </div>
    );
}

export default ShortOpenCardBG;
