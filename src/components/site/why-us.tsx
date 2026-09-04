import {
  BadgeDollarSign,
  Boxes,
  Building2,
  Handshake,
  Headset,
  Truck,
  type LucideIcon,
} from "lucide-react";

const POINTS: Array<{ title: string; desc: string; icon: LucideIcon }> = [
  {
    title: "Reliable Sourcing",
    desc: "We work with manufacturers, distributors and established suppliers.",
    icon: Handshake,
  },
  {
    title: "Competitive Pricing",
    desc: "We aim to provide competitive rates based on quantity and project requirements.",
    icon: BadgeDollarSign,
  },
  {
    title: "Wide Product Range",
    desc: "Multiple construction material categories through a single supplier.",
    icon: Boxes,
  },
  {
    title: "Site Delivery",
    desc: "Material delivery can be coordinated based on location and order requirements.",
    icon: Truck,
  },
  {
    title: "Project-Based Supply",
    desc: "Suitable for residential, commercial and industrial requirements.",
    icon: Building2,
  },
  {
    title: "Customer Support",
    desc: "Quick response for quotations, availability and order coordination.",
    icon: Headset,
  },
];

function WhyUsCard({ point }: { point: (typeof POINTS)[number] }) {
  const Icon = point.icon;

  return (
    <article className="reveal group flex h-full min-h-[200px] flex-col border border-border bg-card p-5 shadow-[0_14px_30px_-22px_rgba(41,41,43,0.2)] transition-transform duration-300 hover:-translate-y-1 sm:p-6">
      <div className="flex justify-start">
        <span className="flex h-11 w-11 items-center justify-center rounded-md border border-brick/20 bg-brick text-white shadow-[0_10px_18px_-14px_rgba(143,29,36,0.5)]">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </span>
      </div>

      <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-[0.08em] text-foreground sm:text-lg">
        {point.title}
      </h3>

      <p className="mt-3 text-[0.76rem] leading-relaxed text-muted-foreground sm:text-[0.78rem] md:text-[0.8rem]">
        {point.desc}
      </p>
    </article>
  );
}

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative isolate overflow-hidden bg-background py-10 sm:py-14 md:py-18 lg:py-20"
    >
      <div className="hairline-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-2xl">
          <div className="reveal flex items-center gap-4">
            <span className="h-[2px] w-8 bg-brick" />
            <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm">Why Us</p>
          </div>
          <h2 className="reveal mt-4 sm:mt-7 font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-foreground">
            Why <span className="text-brick">SP BrickNova?</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-3">
          {POINTS.map((point) => (
            <WhyUsCard key={point.title} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
}
