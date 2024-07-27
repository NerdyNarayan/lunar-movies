"use client"

import Link from "next/link"
import { GiEclipseFlare } from "react-icons/gi"

import { cn } from "@/lib/utils"
import { useActiveNav } from "@/hooks/useActiveNav"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { navItems, type NavItem } from "../../config/site"
import ThemeToggle from "../theme-toggle"

const SiteNav = () => {
  return (
    <div className="container flex max-w-6xl items-center">
      <Link href="/">
        <GiEclipseFlare className="text-4xl" />
      </Link>
      <NavigationMenu className="ml-4 hidden lg:flex">
        <NavigationMenuList>
          {navItems.items.map((item) => (
            <SiteNavItem
              key={item.title}
              title={item.title}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const SiteNavItem = ({ title, href, icon }: NavItem) => {
  const isActive = useActiveNav(href)
  const Icon = icon
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            isActive && "bg-accent",
            "gap-2 text-[15px]"
          )}
        >
          <Icon />
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export default SiteNav
