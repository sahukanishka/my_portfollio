"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { ThemeToggle } from "@/components/themeToggle";
import Logo from "@/icons/Logo";
import { navigation } from "./navigation/index";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll event
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref aria-label="Go to homepage">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.main.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.path
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {route.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            className="focus:outline-none"
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex flex-col space-y-4 p-6">
            {navigation.main.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
