import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="odd:bg-purple even:bg-yellow min-w-[130px] flex-1 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white px-2 py-1 text-[10px] text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h3 className="my-4 text-2xl font-semibold">1,234</h3>
      <h4 className="font-meduim text-sm capitalize text-gray-500">{type}</h4>
    </div>
  );
};

export default UserCard;
