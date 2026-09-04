import { useEffect } from "react";

/**
 * Adds `is-visible` to every `.reveal` / `.reveal-clip` element once it
 * scrolls into view. Runs once per element (fast, no re-animation).
 */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal, .reveal-clip");

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}

export function useScrolled(threshold = 24) {
  useEffect(() => {
    const onScroll = () => {
      document.documentElement.dataset["scrolled"] = window.scrollY > threshold ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
}
