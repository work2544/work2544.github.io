import { FaHome, IoPersonSharp, MdEmail, GiConcreteBag } from "@/assets/icon";
import { IconType } from "react-icons";

export interface NavItemType {
  icon: IconType;
  label: string;
  to: string;
}

export interface NavitemsProps {
  navItems: NavItemType[];
}

export const navItems: NavItemType[] = [
  { icon: FaHome, label: "Home", to: "/" },
  { icon: IoPersonSharp, label: "About", to: "/About" },
  { icon: GiConcreteBag, label: "Work", to: "/Work" },
  { icon: MdEmail, label: "Contact", to: "/Contact" },
];
