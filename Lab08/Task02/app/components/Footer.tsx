import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-sm shadow-lg shadow-violet-500/30">
                ⚡
              </span>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-lg font-bold text-transparent">
                TechStore
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Your one-stop destination for premium tech products, curated for
              creators and professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 transition-colors duration-150 hover:text-violet-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Newsletter placeholder */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Stay in the loop
            </h4>
            <div className="flex overflow-hidden rounded-lg border border-white/10 focus-within:border-violet-500/60 focus-within:ring-1 focus-within:ring-violet-500/40">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-gray-600 outline-none"
              />
              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                Join
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-600">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-gray-600">
            © {year} TechStore. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <span className="cursor-pointer transition-colors hover:text-gray-400">
              Privacy Policy
            </span>
            <span className="cursor-pointer transition-colors hover:text-gray-400">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
