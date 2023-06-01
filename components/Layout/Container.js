import React from "react";

function Container({ children, className }) {
    return <div className={`w-[1729px] h-screen mx-auto ${className}`}>{children}</div>;
}

export default Container;
