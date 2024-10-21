"use client";
import { role } from "@/lib/data";
import Image from "next/image";
import React from "react";

const TableControls = () => {
  return (
    <div className="flex items-center gap-4 self-end">
      <button className="flex size-8 items-center justify-center rounded-full bg-yellow">
        <Image src="/filter.png" alt="filter" width={14} height={14} />
      </button>
      <button className="flex size-8 items-center justify-center rounded-full bg-yellow">
        <Image src="/sort.png" alt="sort" width={14} height={14} />
      </button>
      {role === "admin" && (
        <button className="flex size-8 items-center justify-center rounded-full bg-yellow">
          <Image src="/plus.png" alt="plus" width={14} height={14} />
        </button>
      )}
    </div>
  );
};

export default TableControls;
