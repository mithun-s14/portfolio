export default function Footer() {
  return (
    <footer className="mt-[180px] border-t border-gray-200 px-8 py-8 sm:px-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm font-light text-gray-500">
          2026 &copy; Mithun Sivapathasundram
        </p>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a
            href="https://github.com/mithun-s14"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/mithun-sivapathasundram/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
