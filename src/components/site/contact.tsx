import { Phone, Mail, MapPin, MessageCircle, User } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-10 sm:py-14 md:py-18 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p className="reveal label-eyebrow text-brick text-xs sm:text-sm">Get In Touch</p>
            <h2 className="reveal mt-3 sm:mt-5 text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight font-semibold">
              Request a quotation
            </h2>
            <p className="reveal mt-3 sm:mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground">
              Send us your material list with quantity and delivery location. We respond quickly
              with availability and rates.
            </p>

            <dl className="reveal mt-6 sm:mt-8 space-y-px overflow-hidden border border-border bg-border">
              <ContactRow Icon={User} label="Proprietor" value={CONTACT.proprietor} />
              <ContactRow
                Icon={Phone}
                label="Phone"
                value={CONTACT.phoneDisplay}
                href={`tel:${CONTACT.phoneRaw}`}
              />
              <ContactRow
                Icon={Mail}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactRow
                Icon={MapPin}
                label="Location"
                value={CONTACT.location}
                href={CONTACT.directionUrl}
              />
            </dl>

            <div className="reveal mt-5 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center sm:justify-start gap-2 bg-brick px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brick-deep"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center sm:justify-start gap-2 border border-border px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide text-foreground uppercase transition-colors hover:border-brick hover:bg-brick hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={CONTACT.directionUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center sm:justify-start gap-2 border border-border px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide text-foreground uppercase transition-colors hover:border-brick hover:bg-brick hover:text-white"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>

          <div className="reveal border border-border bg-secondary/60 p-4 sm:p-5 md:p-7">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold">
              Enquiry details to share
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Including these makes your quotation faster and more accurate.
            </p>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {[
                "Material type — bricks, blocks, sand, aggregates, cement, steel",
                "Quantity required (units, tonnes or loads)",
                "Delivery location and site access details",
                "Required delivery date or schedule",
                "Any brand or grade preference",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 sm:gap-4 border-b border-border pb-3 sm:pb-4 last:border-0"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brick" />
                  <span className="text-xs sm:text-sm leading-relaxed text-foreground/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 sm:mt-8 border-l-2 border-brick bg-background p-3 sm:p-5">
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Serving{" "}
                <strong className="font-semibold text-foreground">
                  Chennai and surrounding regions
                </strong>{" "}
                across Tamil Nadu, for residential, commercial and industrial projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="reveal flex items-center gap-3 sm:gap-5 bg-background px-3 sm:px-5 md:px-7 py-4 sm:py-5">
      <Icon className="h-5 w-5 shrink-0 text-brick" strokeWidth={1.5} />
      <div className="min-w-0">
        <dt className="label-eyebrow text-muted-foreground text-xs sm:text-sm">{label}</dt>
        {href ? (
          <a
            href={href}
            className="mt-1 block truncate text-sm sm:text-base font-medium transition-colors hover:text-brick"
          >
            {value}
          </a>
        ) : (
          <dd className="mt-1 truncate text-sm sm:text-base font-medium">{value}</dd>
        )}
      </div>
    </div>
  );
}
