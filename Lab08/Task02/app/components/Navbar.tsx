import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-sm shadow-lg shadow-violet-500/30">
            ⚡
          </span>
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            TechStore
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            Products
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/products"
          className="hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:scale-105 hover:shadow-violet-500/50 sm:block"
        >
          Shop Now →
        </Link>
      </div>
    </header>
  );
}
