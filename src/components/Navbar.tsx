import { Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolio } from "../data/portfolio";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

type NavbarProps = {
  activeId: string;
  theme: "dark" | "light";
  onThemeToggle: () => void;
};

export function Navbar({ activeId, theme, onThemeToggle }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/86 px-6 py-4 backdrop-blur-xl transition dark:border-white/10 dark:bg-zinc-950/82 lg:px-16">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <a
          href="#home"
          className="group flex min-w-0 items-center gap-3 text-lg font-bold text-zinc-950 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-300"
          onClick={() => setOpen(false)}
        >
          RB
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {portfolio.nav.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-sm font-medium text-zinc-500 transition hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-300",
                  activeId === id &&
                    "text-blue-600 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-blue-600 dark:text-blue-300 dark:after:bg-blue-300",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-sm transition hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-white md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-4 max-w-5xl rounded-md border border-zinc-200 bg-white p-3 shadow-[0_18px_55px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-zinc-900 md:hidden">
          <div className="grid gap-2">
            {portfolio.nav.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 hover:text-blue-600 dark:text-zinc-200 dark:hover:bg-white/10",
                    activeId === id &&
                      "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
