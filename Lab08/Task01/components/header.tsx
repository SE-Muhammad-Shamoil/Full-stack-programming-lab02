"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-neutral-900 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-sm font-semibold tracking-widest text-neutral-900 uppercase">
            Nexus
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-neutral-900 after:transition-transform after:duration-300 hover:text-neutral-900 hover:after:scale-x-100 ${
                  active
                    ? "text-neutral-900 after:scale-x-100"
                    : "text-neutral-500"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
