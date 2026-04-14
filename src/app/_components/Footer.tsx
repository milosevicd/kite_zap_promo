export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 py-10 sm:px-6">
        <img
          src="/logos/logo.svg"
          alt=""
          aria-hidden
          className="h-7 w-7 opacity-60"
        />
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} KiteZap
        </p>
      </div>
    </footer>
  );
}
