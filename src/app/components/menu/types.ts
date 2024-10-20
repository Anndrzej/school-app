export type Role = "admin" | "teacher" | "student" | "parent";

export interface MenuLink {
  icon: string;
  label: string;
  href: string;
  role: Role[];
}

export interface MenuSection {
  title: string;
  links: MenuLink[];
}
