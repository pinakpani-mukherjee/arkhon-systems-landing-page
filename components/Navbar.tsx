"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ExternalLink } from "lucide-react";
import { LogoHorizontal } from "@/components/LogoHorizontal";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/technology", label: "Technology" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  return (
    <header className="bg-background/80 fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Identity */}
        <Link href="/" className="group flex items-center">
          <LogoHorizontal className="text-primary h-8 w-auto transition-all group-hover:drop-shadow-[0_0_8px_rgba(255,87,34,0.5)]" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-foreground/70 hover:text-secondary bg-transparent`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions Container */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            asChild
            className="text-muted-foreground hover:text-secondary hidden font-mono text-xs lg:flex"
          >
            <Link href="/docs">
              DOCS <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>

          {/* Desktop Contact Button */}
          <Button
            variant="ghost"
            asChild
            className="text-primary hover:text-primary/80 hidden rounded-none px-4 font-bold tracking-tight hover:bg-transparent md:flex"
          >
            <Link href="/contact">CONTACT</Link>
          </Button>

          {/* Mobile Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background w-[300px] border-l border-white/5 p-0"
            >
              <SheetHeader className="border-b border-white/5 p-6 text-left">
                <SheetTitle>
                  <LogoHorizontal className="text-primary h-6 w-auto" />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 p-6">
                {/* Primary Mobile Links */}
                <div className="flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-foreground/70 hover:text-primary text-lg font-bold tracking-tight transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="h-[1px] w-full bg-white/5" />

                {/* Mobile Secondary Actions */}
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/contact"
                    className="text-primary hover:text-primary/80 text-lg font-bold tracking-tight transition-colors"
                  >
                    CONTACT
                  </Link>
                  <Link
                    href="/docs"
                    className="text-muted-foreground hover:text-secondary flex items-center font-mono text-sm transition-colors"
                  >
                    DOCS <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </div>

                {/* Tactical Node Status */}
                <div className="mt-auto pt-10">
                  <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-2 rounded border px-3 py-2 font-mono text-[9px]">
                    <span className="bg-terminal h-1 w-1 animate-pulse rounded-full" />
                    JP_TYO_NODE // ACTIVE
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
