import React from "react";
import dynamic from "next/dynamic";

import Chart from "react-apexcharts";
const ApexChart = () => {
    return (
        <div className="apex-chart">
            <Chart options={options} series={series} type="area" height={350} />
        </div>
    );
};

export default ApexChart;
