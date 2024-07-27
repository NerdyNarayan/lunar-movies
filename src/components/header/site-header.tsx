import React from "react";
import SiteMenu from "./site-menu";
import ThemeToggle from "../theme-toggle";
import SiteNav from "./site-nav";
import { Input } from "../ui/input";
const SiteHeader = () => {
  return (
    <div className="sticky mx-auto w-full border-b bg-background md:container">
      <div className="flex h-14 items-center">
        <SiteNav />
        <div className="mr-4 flex justify-end space-x-2">
          <Input className="min-w-full" placeholder="Search" />
          <ThemeToggle />
          <SiteMenu />
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
