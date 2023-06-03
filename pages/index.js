import ApexChart from "@/components/Charts/ApexChart";
import RightSidebarContent from "@/components/Index/RightSideBar/RightSidebarContent";
import Container from "@/components/Layout/Container";
import HeroBtn from "@/components/utilities/HeroBtn";
import { useState } from "react";

export default function Home() {
    const [activeChartBtn, setActiveChartBtn] = useState(1);
    const [activeFund, setActiveFund] = useState(true);
    return (
        <Container className={"flex justify-between pt-8"}>
            <div className="w-[1244px] flex flex-col gap-11">
                <div className="">
                    <div className="flex gap-2 items-center">
                        <img className="w-[88px]" src="/assets/logo.svg" alt="" />
                        <div>
                            <h2 className="font-medium text-[25px] text-white">Long Squatz - XTZ² POSITION</h2>
                            <p className="text-xl text-linkText">Perpetual leverage without liquidations</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 ml-6">
                        <div className="grid grid-cols-4 gap-8">
                            <HeroBtn titleOne={"XTZ² Price"} />
                            <HeroBtn titleOne="Historical Daily" titleTwo="Funding " />
                            <HeroBtn titleOne="Current Implied" titleTwo="Funding " />
                            <HeroBtn titleTwo="Funding " />
                            <HeroBtn titleOne={"XTZ² Price"} />
                            <HeroBtn titleOne={"Mark Price"} />
                            <HeroBtn titleTwo="Implied Volatility" />
                            <HeroBtn titleTwo="Norm Factor" />
                        </div>
                        <div className="min-w-[459px] hovered max-w-[459px] h-[181px] flex flex-col gap-3.5 rounded-xl bg-card p-8">
                            <div className="flex items-center justify-between">
                                <p className="font-bold text-[19px] text-cardText">My Position</p>
                                <button className="bg-cardBtn font-bold text-white w-[72px] h-[29px] rounded-xl">
                                    NONE
                                </button>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-lg text-cardText">
                                        <span className="font-bold text-2xl text-white">0</span> oSQTZ
                                    </p>
                                    <div className="w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <p className="text-linkText">Unrealized P&L</p>
                                            <svg
                                                width="21"
                                                height="21"
                                                viewBox="0 0 21 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g filter="url(#filter0_d_111_2)">
                                                    <rect x="4" width="13" height="13" rx="6.5" fill="#191A1F" />
                                                    <rect
                                                        x="4.5"
                                                        y="0.5"
                                                        width="12"
                                                        height="12"
                                                        rx="6"
                                                        stroke="#606060"
                                                    />
                                                </g>
                                                <path
                                                    d="M10.296 8.312L10.088 7.12C10.2747 7.07733 10.4533 7.02933 10.624 6.976C10.8 6.92267 10.96 6.86133 11.104 6.792C11.2533 6.72267 11.3813 6.64533 11.488 6.56C11.6 6.46933 11.6853 6.37333 11.744 6.272C11.808 6.16533 11.84 6.05333 11.84 5.936C11.84 5.77067 11.7893 5.632 11.688 5.52C11.5867 5.40267 11.4533 5.31467 11.288 5.256C11.128 5.19733 10.9547 5.168 10.768 5.168C10.4373 5.168 10.1413 5.24533 9.88 5.4C9.61867 5.54933 9.39733 5.752 9.216 6.008L8.616 5.44C8.87733 5.09867 9.19733 4.82933 9.576 4.632C9.96 4.42933 10.3813 4.328 10.84 4.328C11.224 4.328 11.5653 4.39733 11.864 4.536C12.168 4.67467 12.4053 4.864 12.576 5.104C12.7467 5.33867 12.832 5.608 12.832 5.912C12.832 6.09867 12.7867 6.27733 12.696 6.448C12.6053 6.61867 12.4773 6.77867 12.312 6.928C12.152 7.072 11.968 7.2 11.76 7.312C11.552 7.424 11.3307 7.51467 11.096 7.584L10.96 8.312H10.296ZM9.936 9.488C9.936 9.328 9.99467 9.18933 10.112 9.072C10.2347 8.94933 10.4133 8.888 10.648 8.888C10.8827 8.888 11.0587 8.94133 11.176 9.048C11.2933 9.15467 11.352 9.30133 11.352 9.488C11.352 9.648 11.2907 9.78933 11.168 9.912C11.0507 10.0293 10.8773 10.088 10.648 10.088C10.408 10.088 10.2293 10.0347 10.112 9.928C9.99467 9.82133 9.936 9.67467 9.936 9.488Z"
                                                    fill="white"
                                                />
                                                <defs>
                                                    <filter
                                                        id="filter0_d_111_2"
                                                        x="0"
                                                        y="0"
                                                        width="21"
                                                        height="21"
                                                        filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB"
                                                    >
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_111_2"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="effect1_dropShadow_111_2"
                                                            result="shape"
                                                        />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className="font-bold text-linkText">--</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-lg text-cardText">
                                        <span className="font-bold text-2xl text-white">≈</span> $ 0.00
                                    </p>
                                    <div className="w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <p className="text-linkText">Realized P&L</p>
                                            <svg
                                                width="21"
                                                height="21"
                                                viewBox="0 0 21 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g filter="url(#filter0_d_111_2)">
                                                    <rect x="4" width="13" height="13" rx="6.5" fill="#191A1F" />
                                                    <rect
                                                        x="4.5"
                                                        y="0.5"
                                                        width="12"
                                                        height="12"
                                                        rx="6"
                                                        stroke="#606060"
                                                    />
                                                </g>
                                                <path
                                                    d="M10.296 8.312L10.088 7.12C10.2747 7.07733 10.4533 7.02933 10.624 6.976C10.8 6.92267 10.96 6.86133 11.104 6.792C11.2533 6.72267 11.3813 6.64533 11.488 6.56C11.6 6.46933 11.6853 6.37333 11.744 6.272C11.808 6.16533 11.84 6.05333 11.84 5.936C11.84 5.77067 11.7893 5.632 11.688 5.52C11.5867 5.40267 11.4533 5.31467 11.288 5.256C11.128 5.19733 10.9547 5.168 10.768 5.168C10.4373 5.168 10.1413 5.24533 9.88 5.4C9.61867 5.54933 9.39733 5.752 9.216 6.008L8.616 5.44C8.87733 5.09867 9.19733 4.82933 9.576 4.632C9.96 4.42933 10.3813 4.328 10.84 4.328C11.224 4.328 11.5653 4.39733 11.864 4.536C12.168 4.67467 12.4053 4.864 12.576 5.104C12.7467 5.33867 12.832 5.608 12.832 5.912C12.832 6.09867 12.7867 6.27733 12.696 6.448C12.6053 6.61867 12.4773 6.77867 12.312 6.928C12.152 7.072 11.968 7.2 11.76 7.312C11.552 7.424 11.3307 7.51467 11.096 7.584L10.96 8.312H10.296ZM9.936 9.488C9.936 9.328 9.99467 9.18933 10.112 9.072C10.2347 8.94933 10.4133 8.888 10.648 8.888C10.8827 8.888 11.0587 8.94133 11.176 9.048C11.2933 9.15467 11.352 9.30133 11.352 9.488C11.352 9.648 11.2907 9.78933 11.168 9.912C11.0507 10.0293 10.8773 10.088 10.648 10.088C10.408 10.088 10.2293 10.0347 10.112 9.928C9.99467 9.82133 9.936 9.67467 9.936 9.488Z"
                                                    fill="white"
                                                />
                                                <defs>
                                                    <filter
                                                        id="filter0_d_111_2"
                                                        x="0"
                                                        y="0"
                                                        width="21"
                                                        height="21"
                                                        filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB"
                                                    >
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_111_2"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="effect1_dropShadow_111_2"
                                                            result="shape"
                                                        />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className="font-bold text-linkText">--</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="chart-container"
                    className={`${
                        [2, 3].includes(activeChartBtn) ? "h-fit" : "min-h-[498px] max-h-[498px]"
                    } w-full px-2 py-6  bg-card
                 rounded-xl hovered`}
                >
                    <div className="flex items-center gap-0">
                        <div className="font-medium text-xl w-[600px] p-1.5 flex items-center mx-4 h-[51px] rounded-xl border border-btnSecondery">
                            <button
                                onClick={() => setActiveChartBtn(1)}
                                className={` px-2 rounded-xl h-full min-w-fit ${
                                    activeChartBtn == 1 ? "bg-btnSecondery/20 text-btnSecondery" : "text-cardText"
                                }`}
                            >
                                Historical 365D PNL Simulation
                            </button>
                            <button
                                onClick={() => setActiveChartBtn(2)}
                                className={` px-2 rounded-xl h-full w-full ${
                                    activeChartBtn == 2 ? "bg-btnSecondery/20 text-btnSecondery" : "text-cardText"
                                }`}
                            >
                                Payoff
                            </button>
                            <button
                                onClick={() => setActiveChartBtn(3)}
                                className={` px-2 rounded-xl h-full w-full ${
                                    activeChartBtn == 3 ? "bg-btnSecondery/20 text-btnSecondery" : "text-cardText"
                                }`}
                            >
                                Funding
                            </button>
                            <button
                                onClick={() => setActiveChartBtn(4)}
                                className={` px-2 rounded-xl h-full w-full ${
                                    activeChartBtn == 4 ? "bg-btnSecondery/20 text-btnSecondery" : "text-cardText"
                                }`}
                            >
                                Risks
                            </button>
                        </div>
                        <div className="font-medium text-xl w-[170px] p-1.5 flex items-center px-4 h-[51px] rounded-xl border relative border-cardText">
                            <input
                                className="w-full text-white focus:outline-none bg-transparent"
                                type="text"
                                value={365}
                            />
                            <p className=" absolute -top-3 px-1 left-4 bg-card text-cardText text-sm">
                                Historical Days
                            </p>
                        </div>
                    </div>
                    {[1].includes(activeChartBtn) && (
                        <div className="flex gap-7 w-full">
                            <ApexChart />
                            <div className="min-w-[278px] max-w-[278px] mt-3">
                                <h2 className="font-medium text-2xl text-btnSecondery">What is squatz?</h2>
                                <p className="text-white mt-10">
                                    Long squatz (XTZ) gives you a leveraged position with unlimited upside, protected
                                    downside, and no liquidations. Compared to a 2x leveraged position, you make more
                                    when XTZ goes up and lose less when XTZ goes down (excluding funding). Eg. If XTZ
                                    goes up 5x, squeeth goes up 25x. You pay a funding rate for this position. Enter the
                                    position by purchasing an FA1.2 token.{" "}
                                    <span className="text-btnSecondery">Learn more.</span>
                                </p>
                            </div>
                        </div>
                    )}
                    {[3].includes(activeChartBtn) && (
                        <div className="flex gap-7 w-full">
                            <div className="w-full">
                                <div className="flex justify-between items-center px-6 my-5">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setActiveFund(true)}
                                            className="bg-white px-2 py-2 rounded-xl"
                                        >
                                            Funding
                                        </button>
                                        <button
                                            onClick={() => setActiveFund(false)}
                                            className="bg-white px-2 py-2 rounded-xl"
                                        >
                                            VOL
                                        </button>
                                    </div>
                                    {activeFund && (
                                        <div className="flex items-center gap-3">
                                            <button className="bg-white px-2 py-2 rounded-xl">Day</button>
                                            <button className="bg-white px-2 py-2 rounded-xl">Month</button>
                                            <button className="bg-white px-2 py-2 rounded-xl">Annualized</button>
                                        </div>
                                    )}
                                </div>
                                <ApexChart />
                            </div>
                        </div>
                    )}
                    {[4].includes(activeChartBtn) && (
                        <div className="flex flex-col gap-7 w-full px-7 mt-7">
                            <h2 className="font-medium text-2xl text-btnSecondery">Risks</h2>
                            <p className="text-white">
                                Funding is paid out of your position, similar to selling a small amount of squeeth at
                                funding, reducing your position size. Holding the position for a long period of time
                                without upward movements in ETH can lose considerable funds to funding payments. Squeeth
                                smart contracts have been audited by Trail of Bits, Akira, and Sherlock. However, smart
                                contracts are experimental technology and we encourage caution only risking funds you
                                can afford to lose. Profitability also depends on the price you enter and exit, which is
                                dependent on implied volatility (the premium of squeeth to ETH). If the squeeth premium
                                to ETH decreases, without a change in ETH price, a long position will incur a loss
                                because it is not worth as much ETH. If ETH goes down considerably, you may lose some or
                                all of your initial investment. Learn More.{" "}
                                <span className="text-btnSecondery">Learn more.</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <RightSidebarContent />
            </div>
        </Container>
    );
}
