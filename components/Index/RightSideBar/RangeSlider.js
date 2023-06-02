import { useState } from "react";

const RangeSlider = () => {
    const [value, setValue] = useState(50);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const getSliderColor = () => {
        if (value <= 30) {
            return "bg-red-500";
        } else if (value <= 50) {
            return "bg-yellow-500";
        } else {
            return "bg-green-500";
        }
    };

    return (
        <div className="flex items-center w-full">
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                className={`w-full h-3 ${getSliderColor()} appearance-none rounded-full outline-none`}
            />
            <div className="ml-4">
                {value <= 20 && <span className="text-red-500">Danger</span>}
                {value > 20 && value <= 30 && <span className="text-yellow-500">Risky</span>}
                {value > 30 && <span className="text-green-500">Safe</span>}
            </div>
        </div>
    );
};

export default RangeSlider;
