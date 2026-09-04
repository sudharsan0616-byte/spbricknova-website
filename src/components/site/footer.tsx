import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/Splogo1.png";
import { CONTACT, NAV_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-6 sm:py-8 md:px-10 md:py-10 lg:py-12">
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={logo}
              alt="SP BrickNova"
              width={132}
              height={104}
              className="h-14 sm:h-16 w-auto rounded-sm bg-white/95 p-1.5 shadow-sm"
            />
            <p className="mt-4 sm:mt-6 max-w-sm text-xs sm:text-sm leading-relaxed text-white/65">
              Construction materials trading and distribution. {CONTACT.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="label-eyebrow text-white/55 text-xs sm:text-sm">Navigate</h3>
            <ul className="mt-3 sm:mt-5 space-y-2 sm:space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-white/75 transition-colors hover:text-brick"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="label-eyebrow text-white/55 text-xs sm:text-sm">Contact</h3>
            <ul className="mt-3 sm:mt-5 space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/75">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-brick">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brick">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
                <span>{CONTACT.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-2 sm:gap-3 border-t border-white/15 pt-4 sm:pt-5 text-[0.7rem] sm:text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {CONTACT.business}. All rights reserved.
          </p>
          <p>Proprietor: {CONTACT.proprietor}</p>
        </div>
      </div>
    </footer>
  );
}
