import React from "react";

function Container({ children, className }) {
    return <div className={`2xl:w-[1729px] max-2xl:w-full px-6  2xl:px-0 h-full mx-auto ${className}`}>{children}</div>;
}

export default Container;
