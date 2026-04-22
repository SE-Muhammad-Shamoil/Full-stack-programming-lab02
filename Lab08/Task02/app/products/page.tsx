import ProductList from "../components/ProductList";

export const metadata = {
  title: "Products | TechStore",
  description:
    "Browse our curated collection of premium tech products for creators and professionals.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-gray-900 to-gray-950 py-20 text-center">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative z-10 px-6">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet-400">
            Shop
          </span>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white">
            All{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-400">
            Explore our full range of handpicked premium gear. Click any product
            for full details.
          </p>
        </div>
      </div>

      {/* Product List */}
      <ProductList />
    </main>
  );
}
