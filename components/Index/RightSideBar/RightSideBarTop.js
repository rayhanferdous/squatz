import React from "react";

function RightSideBarTop({ setActiveLong, setActiveShort, active}) {
    return (
        <div className="w-[459px] font-medium text-[19px] flex px-3 py-2 h-[64px] rounded-xl bg-card">
            <div
                onClick={setActiveLong}
                className={`w-full h-full rounded-xl text-darkGreen cursor-pointer ${
                    active && "bg-lightGreen"
                } flex items-center justify-center`}
            >
                Long
            </div>
            <div
                onClick={setActiveShort}
                className={`w-full h-full rounded-xl text-[#AD3E4C] cursor-pointer ${
                    !active && "bg-red-500/20"
                } flex items-center justify-center`}
            >
                Short
            </div>
        </div>
    );
}

export default RightSideBarTop;
