import { useState } from "react";

const CollatrealRange = ({value, setValue}) => {

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const getSliderColor = () => {
        if (value <= 170) {
            return "bg-red-500";
        } else if (value <= 260) {
            return "bg-yellow-500";
        } else {
            return "bg-green-500";
        }
    };

    return (
        <div className="flex items-center w-full">
            <input
                type="range"
                min="150"
                max="300"
                value={value}
                onChange={handleChange}
                className={`w-full h-3 ${getSliderColor()} appearance-none rounded-full outline-none`}
            />
            <div className="ml-4">
                {value <= 170 && <span className="text-red-500">Danger</span>}
                {value > 170 && value <= 260 && <span className="text-yellow-500">Risky</span>}
                {value > 260 && <span className="text-green-500">Safe</span>}
            </div>
        </div>
    );
};

export default CollatrealRange;
