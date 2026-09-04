import { ArrowRight, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero.png";
import { useEnquiryModal } from "@/components/site/enquiry-modal-context";

export function Hero() {
  const { openEnquiry } = useEnquiryModal();
  return (
    <section
      id="home"
      className="relative isolate min-h-[78vh] md:min-h-[82svh] overflow-hidden bg-charcoal"
    >
      <img
        src={heroImage}
        alt="Construction site with stacked cement bags, bricks and steel reinforcement bars at sunrise"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover object-center brightness-[0.9] contrast-105 saturate-100"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,12,0.8)_0%,rgba(12,12,12,0.52)_52%,rgba(12,12,12,0.36)_100%)]" />

      <div className="relative mx-auto flex min-h-[78vh] md:min-h-[82svh] max-w-[1400px] items-center px-5 pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20">
        <div className="max-w-3xl w-full">
          <h1 className="reveal mt-5 sm:mt-7 font-display text-2xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            SP BRICKNOVA
            <span className="mt-3 sm:mt-4 block text-base sm:text-lg md:text-xl lg:text-2xl leading-tight font-medium tracking-[0.16em] text-white/80 uppercase">
              Construction Materials
              <br />
              Trading &amp; Distribution
            </span>
          </h1>

          <p className="reveal mt-5 sm:mt-8 font-display text-lg sm:text-xl md:text-2xl lg:text-4xl leading-tight font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            Quality Materials
            <br />
            Reliable Supply
            <br />
            <span className="text-brick">Timely Delivery</span>
          </p>

          <p className="reveal mt-4 sm:mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-white/80 drop-shadow-[0_1px_5px_rgba(0,0,0,0.38)]">
            Reliable sourcing and dependable supply of construction materials for residential,
            commercial, industrial and project-based requirements.
          </p>

          <div className="reveal mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={openEnquiry}
              className="group inline-flex items-center gap-3 bg-brick px-6 sm:px-8 py-3 sm:py-4.5 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-brick-deep w-full sm:w-auto justify-center sm:justify-start"
            >
              Request a Quote
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </button>
            <a
              href="#products"
              className="inline-flex items-center gap-3 border border-white/30 bg-white/4 px-6 sm:px-8 py-3 sm:py-4.5 text-xs font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 w-full sm:w-auto justify-center sm:justify-start"
            >
              Explore Products
            </a>
          </div>

          <div className="hero-location reveal mt-7 ml-auto w-fit max-w-[min(100%,20rem)] md:absolute md:right-5 md:top-1/2 md:mt-0 md:-translate-y-1/2">
            <span className="label-eyebrow relative z-10 block px-4 py-3 text-center text-[0.6rem] leading-relaxed tracking-[0.18em] text-white sm:px-5 sm:text-xs">
              <span className="text-brick">IN AND AROUND</span>
              <br />
              CHENNAI, TAMIL NADU
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
