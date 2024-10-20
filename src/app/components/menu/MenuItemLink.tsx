import React, { FC } from "react";
import type { MenuLink } from "./types";
import Link from "next/link";
import Image from "next/image";

interface MenuLinkProps {
  link: MenuLink;
}

const MenuItemLink: FC<MenuLinkProps> = ({ link }) => {
  return (
    <Link
      className="flex items-center justify-center gap-4 py-2 text-gray-500 lg:justify-start"
      href={link.href}
      key={link.label}
    >
      <Image src={link.icon} alt={link.label} width={20} height={20} />
      <span className="hidden lg:block">{link.label}</span>
    </Link>
  );
};

export default MenuItemLink;
