import React, { FC } from "react";
import { MenuSection } from "./types";
import MenuItemLink from "./MenuItemLink";
import { role } from "@/lib/data";

interface MenuItemProps {
  item: MenuSection;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  return (
    <>
      <div className="flex flex-col gap-2" key={item.title}>
        <span className="my-4 hidden font-light text-gray-400 lg:block">
          {item.title}
        </span>
        {item.links.map((link) => {
          if (link.role.includes(role))
            return <MenuItemLink key={link.label} link={link} />;
        })}
      </div>
    </>
  );
};

export default MenuItem;
