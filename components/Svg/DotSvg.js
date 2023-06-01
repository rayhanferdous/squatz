import React from "react";

function DotSvg() {
    return (
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_79)">
                <rect x="4" width="10" height="10" rx="5" fill="#FDFDFD" />
            </g>
            <defs>
                <filter
                    id="filter0_d_1_79"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_79" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_79" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}

export default DotSvg;
