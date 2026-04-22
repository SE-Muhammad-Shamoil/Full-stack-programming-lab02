import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "../../data/products";

// Generate static params for all product IDs
export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

// Generate dynamic metadata per product
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(Number(id));
  if (!product) return { title: "Product Not Found | TechStore" };
  return {
    title: `${product.title} | TechStore`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) notFound();

  // Related products (exclude current)
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-950 py-14">
      <div className="mx-auto max-w-5xl px-6">
        {/* Back Link */}
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-violet-400"
        >
          ← Back to Products
        </Link>

        {/* Product Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/40">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left – Visual */}
            <div
              className={`relative flex min-h-72 items-center justify-center bg-gradient-to-br ${product.gradient} overflow-hidden`}
            >
              {/* Decorative circles */}
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

              <span className="relative z-10 text-[120px] drop-shadow-2xl">
                {product.icon}
              </span>

              {product.badge && (
                <span className="absolute right-5 top-5 rounded-full bg-white/20 px-4 py-1 text-sm font-bold text-white backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Right – Info */}
            <div className="flex flex-col justify-between gap-6 p-8 lg:p-10">
              <div>
                <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
                  {product.category}
                </span>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                  {product.title}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  {product.description}
                </p>
              </div>

              {/* Price & Actions */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">USD</span>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button className="flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-violet-500/50 active:scale-100">
                    Add to Cart 🛒
                  </button>
                  <button className="flex-1 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10">
                    Wishlist ♥
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4 text-xs text-gray-500">
                  <span>✅ Free shipping over $99</span>
                  <span>🔄 30-day returns</span>
                  <span>🛡️ 2-year warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-white">
            You might also like
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.id}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-gray-900 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${rel.gradient} text-2xl shadow-md`}
                >
                  {rel.icon}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {rel.title}
                  </p>
                  <p className="text-sm font-bold text-violet-400">
                    ${rel.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
