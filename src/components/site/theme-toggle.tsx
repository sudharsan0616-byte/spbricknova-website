import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(currentTheme);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("sp-bricknova-theme", nextTheme);
    setTheme(nextTheme);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-brick hover:text-brick"
    >
      {isDark ? (
        <Moon className="size-4" strokeWidth={1.8} />
      ) : (
        <Sun className="size-4" strokeWidth={1.8} />
      )}
    </button>
  );
}
