import DownArrowSvg from "@/components/Svg/DownArrowSvg";
import { useState } from "react";

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`transition-all duration-300 rounded-2xl border border-[#535050]`}>
            <button
                onClick={toggleAccordion}
                className="h-[53px] w-full font-medium items-center flex justify-between px-6 py-5"
            >
                <div className="flex item-center gap-1 justify-between font-medium text-sm text-cardText">
                    <div>Slippage:</div>
                    <div> 0.5%</div>
                </div>
                <div className="flex item-center gap-1 text-sm justify-between font-medium text-white">
                    <div>Price Impact:</div>
                    <div className="text-darkGreen"> 0%</div>
                </div>
                <div className={`${isOpen ? "rotate-180" : ""}`}>
                    <DownArrowSvg />
                </div>
            </button>

            {isOpen && <div className="p-4">{children}</div>}
        </div>
    );
};

export default Accordion;
