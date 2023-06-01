import InfoSvg from "@/components/Svg/InfoSvg";
import React from "react";

function InfoText() {
    return (
        <div className="flex items-center justify-between font-medium text-cardText">
            <div className="flex items-center gap-2">
                <p>Value if XTZ up 2x</p>
                <InfoSvg />
            </div>
            <p className="text-sm">
                <span className="text-xs">$</span> 0
            </p>
        </div>
    );
}

export default InfoText;
