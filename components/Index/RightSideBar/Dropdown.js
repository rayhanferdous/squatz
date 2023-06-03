import DownArrowSvg from "@/components/Svg/DownArrowSvg";
import { useState, useEffect, useRef } from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState("Full Close");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="py-2 w-full px-4 text-gray-700 flex items-center justify-between focus:outline-none  rounded-2xl border border-[#535050]"
                onClick={toggleDropdown}
            >
                <div className="font-medium text-cardText">{selectedItem}</div>
                <div className={`${isOpen ? "rotate-180" : ""}`}>
                    <DownArrowSvg />
                </div>
            </button>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 py-2 left-0 bg-white rounded-md shadow-md">
                    <ul>
                        <li
                            onClick={() => {
                                setSelectedItem("Full Close");
                                setIsOpen(!isOpen);
                            }}
                            className="py-2 px-4 hover:bg-cardText font-medium text-lg cursor-pointer"
                        >
                            Full Close
                        </li>
                        <li
                            onClick={() => {
                                setSelectedItem("Half Close");
                                setIsOpen(!isOpen);
                            }}
                            className="py-2 px-4 hover:bg-cardText font-medium text-lg cursor-pointer"
                        >
                            Half Close
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
