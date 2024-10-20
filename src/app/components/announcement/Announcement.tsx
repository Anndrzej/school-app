import React, { FC } from "react";

const Announcement: FC = () => {
  return (
    <div className="rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold">Announcements</h3>
        <span className="texg-gray-400 text-xs">View All</span>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <div className="bg-skyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">
              Lorem ipsum, dolor sit amet consectetur
            </h4>
            <span className="rounded-md bg-white px-1 py-1 text-xs text-gray-400">
              2025-01-01
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            fugiat est facilis fugit rerum eum aperiam velit{" "}
          </p>
        </div>
        <div className="bg-purpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">
              Lorem ipsum, dolor sit amet consectetur
            </h4>
            <span className="rounded-md bg-white px-1 py-1 text-xs text-gray-400">
              2025-01-01
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            fugiat est facilis fugit rerum eum aperiam velit{" "}
          </p>
        </div>
        <div className="bg-yellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">
              Lorem ipsum, dolor sit amet consectetur
            </h4>
            <span className="rounded-md bg-white px-1 py-1 text-xs text-gray-400">
              2025-01-01
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            fugiat est facilis fugit rerum eum aperiam velit{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
