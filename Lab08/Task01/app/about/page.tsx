export default function About() {
  const values = [
    {
      label: "Simplicity",
      description:
        "We believe the best interfaces get out of the way and let content speak.",
    },
    {
      label: "Performance",
      description:
        "Every millisecond matters. We ship fast, lean code without compromise.",
    },
    {
      label: "Craft",
      description:
        "Attention to typographic rhythm, spacing, and micro-interactions elevates UX.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-36">
      {/* Page header */}
      <section className="mb-20 flex flex-col gap-4">
        <span className="animate-fade-up inline-block w-fit rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium tracking-widest text-neutral-500 uppercase">
          About
        </span>
        <h1 className="animate-fade-up-delay-1 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
          Built with intention.
        </h1>
        <p className="animate-fade-up-delay-2 max-w-md text-base leading-relaxed text-neutral-500">
          We are a small team obsessed with clean code, elegant design, and
          delightful developer experiences on the modern web.
        </p>
      </section>

      <hr className="rule mb-20" />

      {/* Values */}
      <section>
        <h2 className="mb-10 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          Our values
        </h2>
        <dl className="grid gap-8 sm:grid-cols-3">
          {values.map(({ label, description }) => (
            <div key={label} className="flex flex-col gap-2">
              <dt className="text-sm font-semibold text-neutral-900">{label}</dt>
              <dd className="text-sm leading-relaxed text-neutral-500">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <hr className="rule my-20" />

      {/* Team strip */}
      <section>
        <h2 className="mb-10 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          The team
        </h2>
        <div className="flex flex-wrap gap-4">
          {["Design", "Engineering", "Product"].map((role) => (
            <div
              key={role}
              className="flex items-center gap-3 rounded-full border border-neutral-200 px-5 py-3 transition-colors duration-200 hover:border-neutral-400"
            >
              <div className="h-6 w-6 rounded-full bg-neutral-200" />
              <span className="text-sm font-medium text-neutral-700">{role}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
