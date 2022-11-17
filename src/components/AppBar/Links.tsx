export interface NavItem {
  label: string;
  link: string;
  protected?: boolean;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "Dashboard",
    link: "/dashboard",
    protected: true,
  },
  {
    label: "Pricing",
    link: "/pricing",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];
