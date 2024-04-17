import { SidenavItem } from "@/components/navside/Navitems";
import { FaHome, IoPersonSharp, MdEmail, GiConcreteBag } from "@/assets/icon";

export const routeItems: SidenavItem[] = [
      { icon: FaHome, label: "Home", to: "/" },
      { icon: IoPersonSharp, label: "About", to: "/About" },
      { icon: GiConcreteBag, label: "Work", to: "/Work" },
      { icon: MdEmail, label: "Contact", to: "/Contact" },
    ];