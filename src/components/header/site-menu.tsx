"use client"

import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"

import { navItems, type NavItem } from "@/config/site"
import { cn } from "@/lib/utils"
import { useActiveNav } from "@/hooks/useActiveNav"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "../ui/button"

const SiteMenu = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex items-center md:hidden" variant={"outline"}>
          <GiHamburgerMenu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription>
            Explore the world of movies and TV shows.
          </DrawerDescription>
        </DrawerHeader>
        {navItems.items.map((item) => (
          <SiteMenuItem
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </DrawerContent>
    </Drawer>
  )
}
const SiteMenuItem = ({ title, href, icon }: NavItem) => {
  const Icon = icon
  const isActive = useActiveNav(href)
  return (
    <Link href={href} passHref>
      <Button
        variant={"ghost"}
        className={cn(
          isActive && "bg-accent",
          "flex w-full flex-col items-start justify-start gap-3 space-x-4 font-semibold text-primary"
        )}
      >
        <div className="flex items-center justify-center gap-3">
          <Icon />
          {title}
        </div>
      </Button>
    </Link>
  )
}
export default SiteMenu
