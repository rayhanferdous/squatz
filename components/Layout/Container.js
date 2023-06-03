import React from "react";

function Container({ children, className }) {
    return <div className={`2xl:w-[1729px] max-2xl:w-full max-2xl:px-14 h-full mx-auto ${className}`}>{children}</div>;
}

export default Container;
