import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-36">
      {/* Hero */}
      <section className="flex flex-col gap-6">
        <span className="animate-fade-up inline-block w-fit rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium tracking-widest text-neutral-500 uppercase">
          Next.js App Router
        </span>

        <h1 className="animate-fade-up-delay-1 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
          Clean design.
          <br />
          <span className="text-neutral-400">Built for the modern web.</span>
        </h1>

        <p className="animate-fade-up-delay-2 max-w-lg text-base leading-relaxed text-neutral-500">
          A minimalist Next.js application with a global Header, Footer, and
          three dedicated pages — designed with clarity and elegance in mind.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/about"
            className="inline-flex h-10 items-center rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-700 active:scale-95"
          >
            Learn more
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full border border-neutral-200 px-6 text-sm font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-400 hover:text-neutral-900 active:scale-95"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Divider */}
      <hr className="rule my-20" />

      {/* Feature cards */}
      <section>
        <h2 className="mb-10 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          What&rsquo;s inside
        </h2>
        <div className="grid gap-px rounded-2xl border border-neutral-200 bg-neutral-200 overflow-hidden sm:grid-cols-3">
          {[
            {
              title: "Header",
              desc: "Sticky, blurred navigation with active-link underlines.",
            },
            {
              title: "Layout",
              desc: "Global layout.tsx wraps every page with Header & Footer.",
            },
            {
              title: "Pages",
              desc: "Home, About, and Contact — each with its own route.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-3 bg-neutral-50 p-8 transition-colors duration-200 hover:bg-white"
            >
              <div className="h-8 w-8 rounded-lg bg-neutral-900" />
              <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
