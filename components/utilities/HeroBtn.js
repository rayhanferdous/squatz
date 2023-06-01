import React from "react";
import InfoSvg from "../Svg/InfoSvg";
import DotSvg from "../Svg/DotSvg";

function HeroBtn({ titleOne, titleTwo, subtitle = "$1791.71" }) {
    return (
        <button className="flex flex-col h-full justify-between">
            <div className="flex items-center gap-1.5">
                {!titleTwo && (
                    <p className="text-linkText flex items-center gap-1.5">
                        {titleOne}
                        <DotSvg />
                    </p>
                )}
                {titleTwo && (
                    <p className="text-linkText">
                        {titleOne} {titleOne && <br />}
                        <span className="flex items-end gap-1.5">
                            {titleTwo} <InfoSvg />
                        </span>
                    </p>
                )}
            </div>
            <p className="font-medium text-[17px] text-white">{subtitle}</p>
        </button>
    );
}

export default HeroBtn;
