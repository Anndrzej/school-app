import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#C3EBFA",
  },
];

const CountChartGraphic = () => {
  return (
    <div className="relative h-[75%] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        src="/maleFemale.png"
        alt="MaleFemale"
        width={50}
        height={50}
      />
    </div>
  );
};

export default CountChartGraphic;
