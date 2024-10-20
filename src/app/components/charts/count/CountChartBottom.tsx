import React from "react";

const CountChartBottom = () => {
  return (
    <div className="flex justify-center gap-16">
      <div className="flex flex-col gap-1">
        <div className="bg-sky size-5 rounded-full"></div>
        <h3 className="font-bold">1,234</h3>
        <h4 className="text-xs text-gray-300">Boys (55%)</h4>
      </div>
      <div className="flex flex-col gap-1">
        <div className="bg-yellow size-5 rounded-full"></div>
        <h3 className="font-bold">1,234</h3>
        <h4 className="text-xs text-gray-300">Girls (45%)</h4>
      </div>
    </div>
  );
};

export default CountChartBottom;
