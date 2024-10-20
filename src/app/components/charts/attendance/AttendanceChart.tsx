"use client";
import Image from "next/image";
import React from "react";
import AttendanceGraphic from "./AttendanceGraphic";

const AttendanceChart = () => {
  return (
    <div className="size-full rounded-xl bg-white p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Attendance</h3>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      {/* GRAPHIC */}
      <AttendanceGraphic />
    </div>
  );
};

export default AttendanceChart;
