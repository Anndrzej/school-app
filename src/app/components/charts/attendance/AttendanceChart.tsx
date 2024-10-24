"use client";
import Image from "next/image";
import React from "react";
import AttendanceChartGraphic from "./AttendanceChartGraphic";

const AttendanceChart = () => {
  return (
    <div className="size-full rounded-xl bg-white p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Attendance</h3>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      {/* GRAPHIC */}
      <AttendanceChartGraphic />
    </div>
  );
};

export default AttendanceChart;
