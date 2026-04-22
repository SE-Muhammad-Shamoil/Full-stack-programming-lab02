export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-xs tracking-widest text-neutral-400 uppercase">
          &copy; {year} Nexus. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-neutral-400 transition-colors duration-200 hover:text-neutral-900"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-neutral-400 transition-colors duration-200 hover:text-neutral-900"
          >
            Twitter
          </a>
          <a
            href="mailto:hello@nexus.dev"
            className="text-xs font-medium text-neutral-400 transition-colors duration-200 hover:text-neutral-900"
          >
            hello@nexus.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
