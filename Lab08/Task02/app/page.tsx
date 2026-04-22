import Link from "next/link";
import { products } from "./data/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <main className="flex flex-1 flex-col bg-gray-950">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-700/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-indigo-700/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-700/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet-400">
            Welcome to TechStore
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl">
            Premium Tech,{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Curated
            </span>{" "}
            for You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Discover handpicked gear for creators, gamers, and professionals.
            Every product rigorously tested — only the best makes the cut.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-violet-500/30 transition-all duration-200 hover:scale-105 hover:shadow-violet-500/50"
            >
              Browse Products →
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10"
            >
              View All Deals
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            {[
              "✅ Free shipping over $99",
              "🔄 30-day hassle-free returns",
              "🛡️ 2-year warranty included",
              "⚡ Next-day delivery available",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Handpicked
            </span>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Picks
              </span>
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300 sm:block"
          >
            See all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Gradient banner */}
              <div
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${product.gradient} overflow-hidden`}
              >
                <span className="text-6xl drop-shadow-xl transition-transform duration-300 group-hover:scale-110">
                  {product.icon}
                </span>
                {product.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white backdrop-blur-sm">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  {product.category}
                </span>
                <h3 className="font-bold text-white transition-colors duration-200 group-hover:text-violet-300">
                  {product.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-400 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm font-semibold text-violet-400 transition-all duration-200 group-hover:translate-x-1">
                    Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/products"
            className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-2.5 text-sm font-bold text-white"
          >
            See all products →
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-gradient-to-br from-violet-950/60 to-indigo-950/60 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to upgrade your setup?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-400">
            Join thousands of creators and professionals who trust TechStore for
            their gear.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-10 py-3.5 text-sm font-bold text-white shadow-xl shadow-violet-500/30 transition-all duration-200 hover:scale-105 hover:shadow-violet-500/50"
          >
            Shop All Products →
          </Link>
        </div>
      </section>
    </main>
  );
}
