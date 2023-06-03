import React from "react";

function RightSideBarCard({
    title = "Amount",
    value = "$0.00",
    subtitle = "XTZ",
    titleTwo = "Balance 0.000 XTZ",
    subtitleTwo = "MAX",
}) {
    return (
        <div className="h-[111px] flex flex-col justify-evenly rounded-2xl border border-[#535050] px-6 py-3">
            <div className="flex item-center justify-between font-medium text-sm text-cardText">
                <div>{title}</div>
                <div>{value}</div>
            </div>
            <div className="flex item-center justify-between gap-3 font-medium text-[23px] text-white">
                <input className="text-white w-full bg-transparent focus:outline-none" type="text" placeholder="0" />

                <div>{subtitle}</div>
            </div>
            <div className="flex item-center gap-4 text-sm text-white">
                <div className="font-medium ">{titleTwo}</div>
                <div className="font-semibold text-btnSecondery">{subtitleTwo}</div>
            </div>
        </div>
    );
}

export default RightSideBarCard;
