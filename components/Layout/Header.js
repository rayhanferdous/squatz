import React, { useState } from "react";
import BurgerSvg from "../Svg/BurgerSvg";
import Drawer from "../utilities/Drawer";
import Link from "next/link";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showFullText, setShowFullText] = useState(false);
    return (
        <>
            <header className="w-full border-b border-border-b px-10 h-[82px] flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <img className="max-mix-xl:w-[125px]" src="/assets/logo.png" alt="" />
                    </Link>
                    <ul className=" items-center gap-7 text-2xl text-linkText hidden mix-xl:flex">
                        <Link href={"/"}>
                            <li className="cursor-pointer">Trade</li>
                        </Link>{" "}
                        <Link href={"/strategies"}>
                            <li className="cursor-pointer">Strategies</li>
                        </Link>
                        <Link href={"/positions"}>
                            <li className="cursor-pointer">Positions</li>
                        </Link>
                        <Link href={"/lp"}>
                            <li className="cursor-pointer">LP</li>
                        </Link>
                        <li className="cursor-pointer">FAQ</li>
                    </ul>
                </div>
                <div className="items-center gap-10 hidden mix-xl:flex ">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowFullText(!showFullText)}
                            className={`border border-[#21D7D7] h-10 rounded-2xl 
                        text-btnSecondery hover:bg-btnSecondery hover:text-black font-semibold text-lg transition-all duration-300 ${
                            showFullText ? "w-[300px]" : "w-[238px]"
                        }`}
                        >
                            {showFullText ? "oSQTZ: tz1xxxx1xxxxxxxx" : "oSQTZ: tz1xxxx...xxxx"}
                        </button>
                        <button className="bg-btnSecondery text-black border hover:text-btnSecondery border-transparent hover:border-[#21D7D7] hover:bg-transparent font-bold text-[19px] w-[208px] h-10 rounded-lg">
                            CONNECT WALLET
                        </button>
                    </div>
                    <div className="">
                        <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.42223 4.21236C1.88317 4.21236 1.42034 4.02178 1.03374 3.64062C0.652581 3.25402 0.462003 2.79119 0.462003 2.25213C0.462003 1.71851 0.652581 1.26113 1.03374 0.879972C1.42034 0.498816 1.88317 0.308238 2.42223 0.308238C2.94496 0.308238 3.40234 0.498816 3.79439 0.879972C4.18643 1.26113 4.38246 1.71851 4.38246 2.25213C4.38246 2.61151 4.28989 2.94093 4.10476 3.24041C3.92507 3.53445 3.68821 3.77131 3.39418 3.95099C3.10014 4.12524 2.77616 4.21236 2.42223 4.21236ZM9.27282 4.21236C8.73375 4.21236 8.27092 4.02178 7.88432 3.64062C7.50317 3.25402 7.31259 2.79119 7.31259 2.25213C7.31259 1.71851 7.50317 1.26113 7.88432 0.879972C8.27092 0.498816 8.73375 0.308238 9.27282 0.308238C9.79554 0.308238 10.2529 0.498816 10.645 0.879972C11.037 1.26113 11.233 1.71851 11.233 2.25213C11.233 2.61151 11.1405 2.94093 10.9553 3.24041C10.7757 3.53445 10.5388 3.77131 10.2448 3.95099C9.95073 4.12524 9.62675 4.21236 9.27282 4.21236ZM16.1234 4.21236C15.5843 4.21236 15.1215 4.02178 14.7349 3.64062C14.3538 3.25402 14.1632 2.79119 14.1632 2.25213C14.1632 1.71851 14.3538 1.26113 14.7349 0.879972C15.1215 0.498816 15.5843 0.308238 16.1234 0.308238C16.6461 0.308238 17.1035 0.498816 17.4956 0.879972C17.8876 1.26113 18.0836 1.71851 18.0836 2.25213C18.0836 2.61151 17.9911 2.94093 17.8059 3.24041C17.6262 3.53445 17.3894 3.77131 17.0953 3.95099C16.8013 4.12524 16.4773 4.21236 16.1234 4.21236Z"
                                fill="#00FFFF"
                            />
                        </svg>
                    </div>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className="max-mix-xl:block hidden">
                    <BurgerSvg />
                </div>
            </header>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="p-4 w-full gap-4 flex flex-col">
                    <div className="flex items-center justify-between gap-4">
                        <button className="bg-btnSecondery font-bold text-[19px] w-[208px] h-10 rounded-lg">
                            CONNECT WALLET
                        </button>
                        <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.42223 4.21236C1.88317 4.21236 1.42034 4.02178 1.03374 3.64062C0.652581 3.25402 0.462003 2.79119 0.462003 2.25213C0.462003 1.71851 0.652581 1.26113 1.03374 0.879972C1.42034 0.498816 1.88317 0.308238 2.42223 0.308238C2.94496 0.308238 3.40234 0.498816 3.79439 0.879972C4.18643 1.26113 4.38246 1.71851 4.38246 2.25213C4.38246 2.61151 4.28989 2.94093 4.10476 3.24041C3.92507 3.53445 3.68821 3.77131 3.39418 3.95099C3.10014 4.12524 2.77616 4.21236 2.42223 4.21236ZM9.27282 4.21236C8.73375 4.21236 8.27092 4.02178 7.88432 3.64062C7.50317 3.25402 7.31259 2.79119 7.31259 2.25213C7.31259 1.71851 7.50317 1.26113 7.88432 0.879972C8.27092 0.498816 8.73375 0.308238 9.27282 0.308238C9.79554 0.308238 10.2529 0.498816 10.645 0.879972C11.037 1.26113 11.233 1.71851 11.233 2.25213C11.233 2.61151 11.1405 2.94093 10.9553 3.24041C10.7757 3.53445 10.5388 3.77131 10.2448 3.95099C9.95073 4.12524 9.62675 4.21236 9.27282 4.21236ZM16.1234 4.21236C15.5843 4.21236 15.1215 4.02178 14.7349 3.64062C14.3538 3.25402 14.1632 2.79119 14.1632 2.25213C14.1632 1.71851 14.3538 1.26113 14.7349 0.879972C15.1215 0.498816 15.5843 0.308238 16.1234 0.308238C16.6461 0.308238 17.1035 0.498816 17.4956 0.879972C17.8876 1.26113 18.0836 1.71851 18.0836 2.25213C18.0836 2.61151 17.9911 2.94093 17.8059 3.24041C17.6262 3.53445 17.3894 3.77131 17.0953 3.95099C16.8013 4.12524 16.4773 4.21236 16.1234 4.21236Z"
                                fill="#00FFFF"
                            />
                        </svg>
                    </div>
                    <button
                        onClick={() => setShowFullText(!showFullText)}
                        className={`border border-[#21D7D7] h-10 rounded-2xl 
                        text-btnSecondery font-semibold text-lg transition-all duration-300 ${
                            showFullText ? "w-[500px]" : "w-[238px]"
                        }`}
                    >
                        {showFullText ? "oSQTZ: tz1xxxx1xxxxxxxx" : "oSQTZ: tz1xxxx...xxxx"}
                    </button>
                    <ul className="gap-2 text-2xl flex-col text-linkText flex">
                        <Link href={"/"}>
                            <li className="cursor-pointer">Trade</li>
                        </Link>
                        <Link href={"/strategies"}>
                            <li className="cursor-pointer">Strategies</li>
                        </Link>
                        <Link href={"/positions"}>
                            <li className="cursor-pointer">Positions</li>
                        </Link>
                        <Link href={"/lp"}>
                            <li className="cursor-pointer">LP</li>
                        </Link>
                        <li className="cursor-pointer">FAQ</li>
                    </ul>
                </div>
            </Drawer>
        </>
    );
}

export default Header;
