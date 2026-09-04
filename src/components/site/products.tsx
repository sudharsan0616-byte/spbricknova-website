import { ArrowUpRight } from "lucide-react";
import pCement from "@/assets/products iamges/p-cement.png";
import pSteel from "@/assets/products iamges/p-steel.png";
import pMsand from "@/assets/products iamges/p-msand.png";
import pPsand from "@/assets/products iamges/p-psand.png";
import pBluemetal from "@/assets/products iamges/p-bluemetal.png";
import pBricks from "@/assets/products iamges/p-bricks.png";
import pHollow from "@/assets/products iamges/p-hollow.png";
import pSolid from "@/assets/products iamges/p-solid.png";
import pAac from "@/assets/products iamges/p-aac.png";
import pHollowNew from "@/assets/products iamges/ChatGPT Image Sep 1, 2026, 07_08_45 PM.png";
import accBlocksImg from "@/assets/products iamges/acc blocks.png";
import { useEnquiryModal } from "@/components/site/enquiry-modal-context";

const PRODUCTS = [
  {
    name: "Cement",
    desc: "Supply of cement for construction requirements across project sizes.",
    img: pCement,
    alt: "Stacked grey cement bags on pallets in a warehouse",
  },
  {
    name: "TMT Steel",
    desc: "TMT reinforcement bars sourced in required sizes and quantities.",
    img: pSteel,
    alt: "Bundles of ribbed TMT reinforcement steel bars stacked at a supply yard",
  },
  {
    name: "M-Sand",
    desc: "Manufactured sand for concrete and masonry work.",
    img: pMsand,
    alt: "Large pile of grey manufactured M-sand at a construction material yard",
  },
  {
    name: "P-Sand",
    desc: "Plastering sand for finishing and wall work.",
    img: pPsand,
    alt: "Fine light grey plastering P-sand texture close up",
  },
  {
    name: "Blue Metal",
    desc: "Crushed stone aggregates for concrete and foundation work.",
    img: pBluemetal,
    alt: "Crushed blue metal stone aggregate pile",
  },
  {
    name: "Bricks",
    desc: "Bricks for masonry and general construction requirements.",
    img: pBricks,
    alt: "Neatly stacked red clay bricks at a construction supply yard",
  },
  {
    name: "Hollow Blocks",
    desc: "Concrete hollow blocks in commonly required sizes.",
    img: pHollowNew,
    alt: "Concrete hollow blocks stacked in a material yard",
  },
  {
    name: "Solid Blocks",
    desc: "Solid concrete blocks for load-bearing and partition walls.",
    img: pSolid,
    alt: "Rows of stacked solid concrete blocks at a material depot",
  },
  {
    name: "AAC Blocks",
    desc: "Lightweight autoclaved aerated concrete blocks for walling.",
    img: accBlocksImg,
    alt: "AAC block warehouse material display",
  },
  {
    name: "Other Construction Materials",
    desc: "Available based on customer requirements.",
    img: pAac,
    alt: "Pale white AAC autoclaved aerated concrete blocks stacked on pallets",
  },
];

export function Products() {
  const { openEnquiry } = useEnquiryModal();
  return (
    <section
      id="products"
      className="border-y border-border bg-secondary py-10 sm:py-14 md:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="reveal flex items-center gap-4">
              <span className="h-[2px] w-8 bg-brick" />
              <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm">Our Products</p>
            </div>
            <h2 className="reveal mt-4 sm:mt-7 font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold uppercase">
              Construction Materials.
              <br />
              One Reliable <span className="text-brick">Supply Partner.</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={openEnquiry}
            className="reveal group inline-flex w-full sm:w-fit items-center justify-center sm:justify-start gap-3 border border-foreground/20 px-5 sm:px-7 py-3 sm:py-4 text-xs font-semibold tracking-[0.16em] uppercase transition-colors hover:border-brick hover:bg-brick hover:text-primary-foreground"
          >
            Enquire on Materials
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Mobile Grid */}
        <ul className="reveal mt-8 grid gap-2.5 md:hidden sm:gap-3 grid-cols-2">
          {PRODUCTS.map((p, index) => (
            <li key={`${p.name}-${index}`}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>

        {/* Desktop Grid */}
        <ul className="reveal hidden md:grid mt-8 lg:mt-10 gap-px border border-border bg-border grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PRODUCTS.map((p, index) => (
            <li key={`${p.name}-${index}`}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProductCard({ product: p }: { product: (typeof PRODUCTS)[0] }) {
  return (
    <article
      tabIndex={0}
      className="group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brick/30 hover:shadow-[0_12px_28px_-20px_rgba(41,41,43,0.14)] focus-visible:-translate-y-1 focus-visible:border-brick/30 focus-visible:shadow-[0_12px_28px_-20px_rgba(41,41,43,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/20"
    >
      <div
        className={`relative overflow-hidden aspect-[4/3] md:aspect-[4/3] ${p.img ? "bg-elevated" : `bg-gradient-to-br ${p.color}`}`}
      >
        {p.img ? (
          <img
            src={p.img}
            alt={p.alt}
            className="h-full w-full object-cover brightness-[0.86] contrast-[1.08] saturate-[1.12] transition-transform duration-700 ease-out group-hover:scale-[1.06] group-focus-within:scale-[1.06] group-active:scale-[1.06]"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-elevated" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-white/10" />
      </div>
      <div className="flex flex-1 flex-col p-2.5 sm:p-3 md:p-5 lg:p-6">
        <h3 className="font-display text-[0.78rem] leading-tight font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground group-focus-within:text-foreground group-active:text-foreground sm:text-sm md:text-base lg:text-lg">
          {p.name}
        </h3>
        <p className="mt-1.5 text-[0.62rem] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground group-focus-within:text-muted-foreground group-active:text-muted-foreground sm:text-[0.7rem] md:mt-2 md:text-[0.75rem] lg:text-[0.8125rem]">
          {p.desc}
        </p>
        <span className="mt-2 h-[2px] w-8 bg-border transition-all duration-300 group-hover:w-14 group-focus-within:w-14 group-active:w-14 group-hover:bg-brick group-focus-within:bg-brick group-active:bg-brick sm:mt-3 md:mt-4 lg:mt-6" />
      </div>
    </article>
  );
}
