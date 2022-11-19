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
    label: "Plans",
    link: "/plans",
  },
  {
    label: "PlayGround",
    link: "/playground",
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
