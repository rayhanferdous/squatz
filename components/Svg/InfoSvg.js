import React from "react";

function InfoSvg() {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_107_2)">
                <rect x="4" width="13" height="13" rx="6.5" fill="#191A1F" />
                <rect x="4.5" y="0.5" width="12" height="12" rx="6" stroke="#606060" />
            </g>
            <path
                d="M10.296 10V5.8H11.12V10H10.296ZM10.696 4.824C10.52 4.824 10.384 4.77867 10.288 4.688C10.192 4.59733 10.144 4.46933 10.144 4.304C10.144 4.14933 10.192 4.024 10.288 3.928C10.3893 3.832 10.5253 3.784 10.696 3.784C10.872 3.784 11.008 3.82933 11.104 3.92C11.2 4.01067 11.248 4.13867 11.248 4.304C11.248 4.45867 11.1973 4.584 11.096 4.68C11 4.776 10.8667 4.824 10.696 4.824Z"
                fill="white"
            />
            <defs>
                <filter
                    id="filter0_d_107_2"
                    x="0"
                    y="0"
                    width="21"
                    height="21"
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
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_2" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}

export default InfoSvg;
