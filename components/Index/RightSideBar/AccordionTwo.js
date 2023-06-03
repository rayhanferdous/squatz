import DownArrowSvg from "@/components/Svg/DownArrowSvg";
import { useState } from "react";

const AccordionTwo = ({ title, children }) => {
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
                <div className="">
                    <p className="font-medium text-xl text-cardText mb-2">Full Close</p>
                </div>
                <div className={`${isOpen ? "rotate-180" : ""}`}>
                    <DownArrowSvg />
                </div>
            </button>

            {isOpen && <div className="p-4">{children}</div>}
        </div>
    );
};

export default AccordionTwo;
