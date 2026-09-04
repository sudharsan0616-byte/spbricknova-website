import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/Splogo1.png";
import { NAV_LINKS, CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useEnquiryModal } from "@/components/site/enquiry-modal-context";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function SiteNav() {
  const { openEnquiry } = useEnquiryModal();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "border-b border-border bg-background",
      )}
    >
      <div className="mx-auto flex h-18 max-w-[1400px] items-center justify-between gap-6 px-5 md:px-10">
        <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="SP BrickNova home">
          <img
            src={logoImage}
            alt="SP BrickNova logo"
            width={132}
            height={104}
            className="h-11 w-auto rounded-md bg-white p-2 shadow-sm ring-1 ring-black/5 transition-all duration-300 md:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative py-1 text-[0.8125rem] font-medium tracking-wide uppercase transition-colors",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-brick after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                "text-foreground/75 hover:text-brick",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className={cn(
              "hidden items-center gap-2 text-[0.8125rem] font-medium tracking-wide transition-colors md:flex",
              "text-foreground/70 hover:text-brick",
            )}
          >
            <Phone className="size-4" strokeWidth={1.75} />
            {CONTACT.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={openEnquiry}
            className="hidden bg-brick px-6 py-3.5 text-[0.75rem] font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-colors hover:bg-brick-deep sm:inline-flex"
          >
            Request a Quote
          </button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={cn(
              "inline-flex size-11 items-center justify-center border transition-colors lg:hidden",
              "border-border text-foreground hover:bg-secondary",
            )}
          >
            <Menu className="size-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-charcoal text-white transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <div className="flex h-18 items-center justify-between px-5">
          <img
            src={logoImage}
            alt="SP BrickNova"
            width={120}
            height={95}
            className="h-11 w-auto rounded-md bg-white p-2 shadow-sm ring-1 ring-black/5"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex size-11 items-center justify-center border border-white/25 hover:bg-white/10"
          >
            <X className="size-5" strokeWidth={1.75} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-5 pb-10" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center border-b border-white/10 py-4"
            >
              <span className="font-display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                {link.label}
              </span>
            </a>
          ))}
          <div className="mt-8 grid gap-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openEnquiry();
              }}
              className="bg-brick px-6 py-4 text-center text-xs font-semibold tracking-[0.16em] uppercase"
            >
              Request a Quote
            </button>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="border border-white/25 px-6 py-4 text-center text-xs font-semibold tracking-[0.16em] uppercase"
            >
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
