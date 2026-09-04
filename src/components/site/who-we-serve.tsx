import { Building2, Check, ClipboardCheck, FileText, Search, Truck, User } from "lucide-react";
import buildersImage from "@/assets/whoweareiamges/Builders & Developers.png";
import contractorsImage from "@/assets/whoweareiamges/Civil Contractors.png";
import homeImage from "@/assets/whoweareiamges/Individual Home Builders.png";
import commercialImage from "@/assets/whoweareiamges/Commercial Projects.png";
import industrialImage from "@/assets/whoweareiamges/Industrial Projects.png";
import institutionImage from "@/assets/whoweareiamges/Institutions & Colleges.png";

const PROCESS_STEPS = [
  {
    title: "Customer Enquiry",
    desc: "Share your material requirement.",
    Icon: User,
  },
  {
    title: "Requirement & Quantity",
    desc: "Confirm the specification and quantity.",
    Icon: ClipboardCheck,
  },
  {
    title: "Supplier Sourcing",
    desc: "We source the right material from trusted suppliers.",
    Icon: Search,
  },
  {
    title: "Quotation",
    desc: "Receive a clear and competitive rate.",
    Icon: FileText,
  },
  {
    title: "Order Confirmation",
    desc: "Approve the order and schedule delivery.",
    Icon: Check,
  },
  {
    title: "Material Dispatch",
    desc: "We load and dispatch with quantity checks.",
    Icon: Truck,
  },
  {
    title: "Site Delivery",
    desc: "Timely delivery to your project site.",
    Icon: Building2,
  },
];

const SEGMENTS = [
  {
    title: "Builders & Developers",
    desc: "Reliable material sourcing for ongoing construction requirements.",
    img: buildersImage,
    alt: "Residential apartment tower under construction with scaffolding",
  },
  {
    title: "Civil Contractors",
    desc: "Flexible supply based on project quantity and schedule.",
    img: contractorsImage,
    alt: "Civil contractors in safety helmets reviewing drawings at a construction site",
  },
  {
    title: "Individual Home Builders",
    desc: "Construction materials for residential building requirements.",
    img: homeImage,
    alt: "Individual brick house under construction with materials stacked outside",
  },
  {
    title: "Commercial Projects",
    desc: "Material sourcing for commercial construction needs.",
    img: commercialImage,
    alt: "Commercial office building under construction with glass facade",
  },
  {
    title: "Industrial Projects",
    desc: "Supply coordination for industrial requirements.",
    img: industrialImage,
    alt: "Industrial warehouse shed under construction with steel structure",
  },
  {
    title: "Institutions & Colleges",
    desc: "Construction material support for institutional projects.",
    img: institutionImage,
    alt: "Institutional college building construction project with concrete frame",
  },
];

export function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="border-y border-border bg-secondary py-10 sm:py-14 md:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-2xl">
          <div className="reveal flex items-center gap-4">
            <span className="h-[2px] w-8 bg-brick" />
            <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm">Who We Serve</p>
          </div>
          <h2 className="reveal mt-4 sm:mt-7 font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
            Built Around Your <span className="text-brick">Project Requirements</span>
          </h2>
        </div>

        {/* Mobile Grid */}
        <ul className="reveal mt-8 grid grid-cols-2 gap-2.5 sm:gap-3 md:hidden">
          {SEGMENTS.map((s) => (
            <li key={s.title}>
              <SegmentCard segment={s} />
            </li>
          ))}
        </ul>

        {/* Desktop Grid */}
        <ul className="reveal mt-8 hidden gap-px border border-border bg-border md:grid lg:mt-10 lg:grid-cols-3">
          {SEGMENTS.map((s) => (
            <li key={s.title}>
              <SegmentCard segment={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SegmentCard({ segment: s }: { segment: (typeof SEGMENTS)[0] }) {
  return (
    <article className="group relative isolate flex h-full min-h-[11rem] sm:min-h-[13rem] md:min-h-[19rem] flex-col justify-end overflow-hidden bg-charcoal p-3 sm:p-5 md:p-7">
      <img
        src={s.img}
        alt={s.alt}
        width={800}
        height={600}
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover opacity-60 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/60 via-charcoal/30 to-charcoal/10" />
      <span className="h-[2px] w-8 bg-brick transition-all duration-300 group-hover:w-12 sm:group-hover:w-14" />
      <h3 className="mt-2 font-display text-[0.72rem] font-semibold uppercase tracking-wide text-white sm:mt-3 sm:text-sm md:text-lg">
        {s.title}
      </h3>
      <p className="mt-1.5 max-w-xs text-[0.58rem] leading-relaxed text-white/75 sm:mt-2 sm:text-[0.7rem] md:mt-3 md:text-[0.8125rem]">
        {s.desc}
      </p>
    </article>
  );
}
