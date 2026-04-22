import Link from "next/link";
import { products } from "../data/products";

export default function ProductList() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet-400">
          Our Collection
        </span>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white">
          Featured{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Products
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-gray-400">
          Handpicked premium tech for creators, gamers, and professionals. Every
          item tested and approved.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-violet-500/10"
          >
            {/* Gradient Banner */}
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
              {/* Shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {product.category}
                  </span>
                  <h3 className="mt-0.5 text-base font-bold text-white group-hover:text-violet-300 transition-colors duration-200">
                    {product.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 px-3 py-1 text-sm font-bold text-white shadow-md shadow-violet-500/20">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-gray-400 line-clamp-3">
                {product.description}
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-violet-400 transition-colors duration-200 group-hover:text-violet-300">
                View Details
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
