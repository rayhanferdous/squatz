import DownArrowSvg from "@/components/Svg/DownArrowSvg";
import React from "react";
import Accordion from "./Accordion";

function RightSideBarTotalCard() {
    return (
        <Accordion title="Accordion Item 1">
            <div className="flex items-center justify-between font-medium text-cardText">
                <p>Value if XTZ up 2x</p>

                <p className="text-sm">
                    <span className="text-xs">$</span> 0
                </p>
            </div>
        </Accordion>
    );
}

export default RightSideBarTotalCard;
