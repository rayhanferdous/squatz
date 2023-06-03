import InfoSvg from "@/components/Svg/InfoSvg";
import React from "react";

function InfoText({ title = "Value if XTZ up 2x" }) {
    return (
        <div className="flex items-center justify-between font-medium text-cardText">
            <div className="flex items-center gap-2">
                <p>{title}</p>
                <InfoSvg />
            </div>
            <p className="text-sm">
                <span className="text-xs">$</span> 0
            </p>
        </div>
    );
}

export default InfoText;
