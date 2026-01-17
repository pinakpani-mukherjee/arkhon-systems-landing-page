"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ExternalLink } from "lucide-react";
import { LogoHorizontal } from "@/components/LogoHorizontal"; // Import your new component
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="bg-background/80 fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Identity: Using the new Logo Component */}
        <Link href="/" className="group flex items-center">
          <LogoHorizontal className="text-primary h-8 w-auto transition-all group-hover:drop-shadow-[0_0_8px_rgba(255,87,34,0.5)]" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-foreground/70 hover:text-secondary bg-transparent`}
              >
                <Link href="/technology">Technology</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-foreground/70 hover:text-secondary bg-transparent`}
              >
                <Link href="/use-cases">Use Cases</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-foreground/70 hover:text-secondary bg-transparent`}
              >
                <Link href="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
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

          {/* Corrected: Wrapped with Link and asChild */}
          <Button
            variant="ghost"
            asChild
            className="text-primary hover:text-primary/80 rounded-none px-0 font-bold tracking-tight hover:bg-transparent"
          >
            <Link href="/contact">CONTACT</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-foreground md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
