import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="flex w-full items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:flex md:w-auto">
      <Image src="/search.png" alt="search bar" width={14} height={14} />
      <input
        className="w-[200px] bg-transparent p-2 outline-none"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default TableSearch;
