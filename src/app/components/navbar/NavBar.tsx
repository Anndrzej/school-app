import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:flex">
        <Image src="/search.png" alt="search bar" width={14} height={14} />
        <input
          className="w-[200px] bg-transparent p-2 outline-none"
          type="text"
          placeholder="Search..."
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex w-full items-center justify-end gap-6">
        <div className="flex size-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Image src="/message.png" alt="Message" width={20} height={20} />
        </div>
        <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Image
            src="/announcement.png"
            alt="Announcement"
            width={20}
            height={20}
          />
          <div className="absolute -right-3 -top-3 flex size-5 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">John Doe</span>
          <span className="text-right text-[10px] text-gray-500">Admin</span>
        </div>
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="Avatar"
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default NavBar;
