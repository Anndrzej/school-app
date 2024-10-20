"use client";
import Image from "next/image";
import React from "react";
import CountChartBottom from "./CountChartBottom";

const CountChart = () => {
  return (
    <div className="size-full rounded-xl bg-white p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Students</h3>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      {/* GRAPHIC */}
      <CountChart />
      {/* BOTTOM */}
      <CountChartBottom />
    </div>
  );
};

export default CountChart;
