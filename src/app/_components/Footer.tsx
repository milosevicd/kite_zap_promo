export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} KiteZap
        </p>
      </div>
    </footer>
  );
}
