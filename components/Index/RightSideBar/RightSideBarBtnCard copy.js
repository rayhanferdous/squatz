import React from "react";

function RightSideBarBtnCard({ name = "BUY" }) {
    return (
        <button className="h-[49px] w-full font-medium items-center flex justify-center rounded-2xl bg-darkGreen px-6 py-5 text-lg text-black">
            {name}
        </button>
    );
}

export default RightSideBarBtnCard;
