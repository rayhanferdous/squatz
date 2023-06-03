import BuySquatzLP from "@/components/Index/RightSideBar/BuySquatzLP";
import MintToLp from "@/components/Index/RightSideBar/MintToLp";
import Container from "@/components/Layout/Container";
import HeroBtn from "@/components/utilities/HeroBtn";
import React, { useState } from "react";

function lp() {
    const [buyMint, setBuyMint] = useState(true);
    const [mintToLP, setMintToLp] = useState(false);
    const [squatzToLp, setSquatzToLp] = useState(false);

    return (
        <Container className={"flex justify-between pt-8 max-mod-xl:flex-col max-res-xl:gap-8"}>
            <div className="res-xl:w-[1244px] max-res-xl:w-full flex flex-col gap-11">
                <div className="">
                    <div className="flex gap-2 items-center">
                        <img className="w-[88px]" src="/assets/logo.svg" alt="" />
                        <div>
                            <h2 className="font-medium text-[25px] text-white">Quipuswap LP SQTZ - XTZ Pool</h2>
                            <p className="text-xl text-linkText">arn LP fees for providing SQTZ-XTZ liquidity</p>
                        </div>
                    </div>
                    <div className="flex gap-10 items-center mt-5 ml-6 max-xl:flex-col">
                        <div className="cus-sm:min-w-[459px] hovered cus-sm:max-w-[459px] max-cus-sm:w-full grid   max-[360px]:grid-cols-1 cus-sm:grid-cols-3 gap-3.5 rounded-xl bg-card p-8">
                            <HeroBtn titleOne={"XTZ² Price"} />
                            <HeroBtn titleOne={"XTZ² Price"} />
                            <HeroBtn titleOne={"XTZ² Price"} />
                            <HeroBtn titleOne={"XTZ² Price"} />
                            <HeroBtn titleOne={"XTZ² Price"} />
                        </div>
                        <div className="max-cus-sm:min-w-full cus-sm:min-w-[459px] hovered cus-sm:max-w-[459px] text-white text-lg h-[181px] flex flex-col gap-3.5 rounded-xl bg-card p-8">
                            No LP Positions
                        </div>
                    </div>
                </div>
                <div className="w-[270px] h-[63px] border py-1.5 px-1 flex items-center border-btnSecondery rounded-xl">
                    <button
                        onClick={() => setBuyMint(true)}
                        className={`w-full h-full font-semibold text-lg rounded-xl flex items-center justify-center ${
                            buyMint ? "bg-[#2A4041] text-btnSecondery " : "text-cardText"
                        }`}
                    >
                        Buy and LP
                    </button>
                    <button
                        onClick={() => setBuyMint(false)}
                        className={`w-full h-full font-semibold text-lg rounded-xl flex items-center justify-center ${
                            !buyMint ? "bg-[#2A4041] text-btnSecondery " : "text-cardText"
                        }`}
                    >
                        Mint and LP
                    </button>
                </div>
                <div>
                    <h2 className="font-medium text-[25px] text-btnSecondery">
                        {buyMint ? "Buy squeeth and LP" : "Mint squeeth and LP"}
                    </h2>
                    <p className="font-medium text-white text-lg">Earn a payoff similar to XTZ1.5</p>
                </div>
                <div>
                    <h2 className="font-medium text-[22px] text-btnSecondery">Details</h2>
                    <p className="font-medium text-white mt-3">
                        Buying and LPing gives you a leverage position with a payoff similar to XTZ1.5. You give up some
                        of your squeeth upside in exchange for trading fees. You are paying funding for being long
                        squeeth, but earning fees from LPing on Quipuswap.
                    </p>
                </div>
                <div>
                    <h2 className="font-medium text-[22px] text-btnSecondery">Payoff</h2>
                    <img className="mt-3" src="/assets/chart.png" alt="" />
                </div>
                <div className="pb-20">
                    <h2 className="font-medium text-[22px] text-btnSecondery">Risks</h2>
                    <p className="font-medium text-white mt-3">
                        Buying and LPing gives you a leverage position with a payoff similar to XTZ1.5. You give up some
                        of your squeeth upside in exchange for trading fees. You are paying funding for being long
                        squeeth, but earning fees from LPing on Quipuswap.
                    </p>
                    <p className="font-medium text-white mt-3">
                        Buying and LPing gives you a leverage position with a payoff similar to XTZ1.5. You give up some
                        of your squeeth upside in exchange for trading fees. You are paying funding for being long
                        squeeth, but earning fees from LPing on Quipuswap.
                    </p>
                </div>
            </div>
            {mintToLP || squatzToLp ? (
                <div>
                    <div
                        onClick={() => {
                            setMintToLp(false);
                            setSquatzToLp(false);
                        }}
                        className="flex items-center mb-5 gap-2 cursor-pointer"
                    >
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
                            <path
                                fillRule="evenodd"
                                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="font-medium text-white">Close</p>
                    </div>

                    <div className="max-cus-sm:w-full cus-sm:w-[459px] bg-card rounded-xl hovered">
                        {mintToLP && <MintToLp />}
                        {squatzToLp && <BuySquatzLP />}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-2">
                    <h2 className="font-medium text-[22px] text-btnSecondery">Obtain Squatz</h2>
                    <div
                        onClick={() => {
                            setMintToLp(true);
                            setSquatzToLp(false);
                        }}
                        className="max-cus-sm:w-full cus-sm:min-w-[459px] hovered cus-sm:max-w-[459px] h-[224px] flex items-center flex-col justify-between rounded-xl bg-card p-7"
                    >
                        <h3 className="font-medium text-[25px] text-white">Mint Squatz to LP</h3>
                        <img className="w-[218px]" src="/assets/logo.png" alt="" />
                        <p className="font-medium text-[19px] text-cardText">
                            Mint Sqeeth by depositing XTZ as collateral
                        </p>
                    </div>
                    <div
                        onClick={() => {
                            setMintToLp(false);
                            setSquatzToLp(true);
                        }}
                        className="max-cus-sm:w-full cus-sm:min-w-[459px] hovered cus-sm:max-w-[459px] h-[224px] flex items-center flex-col justify-between rounded-xl bg-card p-7 mt-5"
                    >
                        <h3 className="font-medium text-[25px] text-white">Buy Squatz to LP</h3>
                        <img className="w-[100px]" src="/assets/cartoon.svg" alt="" />
                        <p className="font-medium text-[19px] text-cardText">Buy Squatz directly from Quipuswap</p>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default lp;
