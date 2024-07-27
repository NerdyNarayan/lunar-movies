"use client"
import { usePathname } from "next/navigation"
/**
 * Custom hook to determine if a given href matches the current pathname.
 * @param href - The href to compare with the current pathname.
 * @returns A boolean indicating if the href matches the current pathname.
 */

export const useActiveNav = (href: string) => {
  const pathname=usePathname()
  if(href==="/") return pathname===href;
  return pathname.startsWith(href)
}