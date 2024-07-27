import React from "react";
import SiteNav from "@/components/site-nav";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/theme-toggle";
const Page = () => {
  return (
    <div className="sticky border-b bg-background">
      <div className="container flex h-14 items-center space-x-4">
        <SiteNav />
        <div className="flex justify-end gap-4">
          <Input placeholder="Search" />
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
