"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useSection } from "@/contexts/SectionContext";

const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#work", id: "work", label: "Work" },
  { href: "#about", id: "about", label: "About" },
  { href: "mailto:srinivasrahul@icloud.com", id: "contact-link", label: "Contact" },
] as const;

const baseLinkClass =
  "min-h-touch min-w-[4.5rem] inline-flex items-center justify-center rounded-full px-lg py-2 text-body font-normal transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";
const activeClass = "glass-pill-active text-foreground-primary";
const inactiveClass =
  "bg-transparent text-foreground-secondary hover:bg-transparent hover:text-foreground-primary";

export function Header() {
  const { activeSectionId } = useSection();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-transparent py-lg">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-sm px-xs lg:px-sm font-sans">
        <div className="min-w-0" />
        <nav className="hidden md:flex md:justify-center" aria-label="Main">
          <ul
            className="glass-pill flex items-center gap-0 rounded-full px-1 py-1 list-none m-0"
            role="list"
          >
            {navLinks.map(({ href, id, label }) => {
              const isActive = activeSectionId === id;
              return (
                <li key={id}>
                  <a
                    href={href}
                    className={`${baseLinkClass} ${
                      isActive ? activeClass : inactiveClass
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-sm min-w-0">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="glass-pill flex md:hidden min-h-touch min-w-touch items-center justify-center rounded-full p-2 text-foreground-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            {menuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="absolute left-0 right-0 top-full mt-2 px-xs md:hidden"
          role="dialog"
          aria-label="Navigation menu"
        >
          <ul
            className="glass-pill flex flex-col rounded-2xl p-2 list-none m-0"
            role="list"
          >
            {navLinks.map(({ href, id, label }) => {
              const isActive = activeSectionId === id;
              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={`${baseLinkClass} justify-start w-full rounded-xl ${
                      isActive ? activeClass : inactiveClass
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
