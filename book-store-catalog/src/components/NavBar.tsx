"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { MainMenuItems } from "@/lib/constants/MainMenuItems";
import NavItem from "./NavItem";
import { useState } from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("home");

  const onMenuItemClick = (selectedItem: string) => {
    setSelectedMenu(selectedItem);
  };

  return (
    <div className="sticky z-50 top-0 inset-x-0 h-20 w-full inward-shadow bg-primary rounded-3xl app-color-gray">
      <header className="relatiive ">
        <MaxWidthWrapper>
          <div className="pt-2">
            <div className="flex h-16 items-center justify-between">
              {/*TODO: Mobile nav */}
              <div className="ml-4 grid lg:ml-0 items-center justify-center grid-flow-col">
                <Link href="/">
                  <Icons.logo className="h-12 w-12 outward-shadow rounded-full" />
                </Link>
                <p className="ml-4 animate-typing text-3xl overflow-hidden text-accent whitespace-nowrap border-r-4 border-r-white">
                  {" "}
                  BookBistro.in
                </p>
              </div>

              {/* <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <div className="flex gap-4 h-full">
                  <div className="flex">
                    <div className="relative flex items-center">
                      {MainMenuItems.map((mi) => {
                        return (
                          <NavItem
                            menuName={mi.name}
                            menuKey={mi.key}
                            key={mi.key}
                            isSelected={mi.key === selectedMenu}
                            onMenuItemClick={onMenuItemClick}
                            isDisabled={mi.isDisabled}
                          ></NavItem>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div> */}
              <div>
                <div className="relative flex items-center">
                  <Button className="text-sm py-2 rounded-2xl">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
export default NavBar;
