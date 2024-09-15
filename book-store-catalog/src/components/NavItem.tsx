import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface NavItemsProp {
  onMenuItemClick: (menuKey: string) => void;
  isSelected: boolean;
  menuName: string;
  menuKey: string;
  isDisabled?: boolean;
}

const NavItem = (prop: NavItemsProp) => {
  return (
    <Button
      onClick={() => {
        prop.onMenuItemClick(prop.menuKey);
      }}
      disabled={prop.isDisabled}
      className="m-4 text-sm outward-shadow default-bg-color py-2 rounded-2xl"
    >
      {prop.menuName}
    </Button>
  );
};

export default NavItem;
