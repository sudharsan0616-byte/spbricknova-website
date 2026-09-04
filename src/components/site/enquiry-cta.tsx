import { ArrowRight } from "lucide-react";
import { useEnquiryModal } from "@/components/site/enquiry-modal-context";

export function EnquiryCta() {
  const { openEnquiry } = useEnquiryModal();
  return (
    <section className="relative overflow-hidden bg-brick-deep py-20 md:py-24">
      <div className="hairline-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-brick/70 via-brick/10 to-transparent md:w-2/3"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-10 px-5 md:px-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="reveal label-eyebrow text-white/55">Business Enquiry</p>
          <h2 className="reveal mt-5 max-w-xl text-3xl leading-[1.05] font-semibold text-white md:text-5xl">
            Have a Construction
            <br />
            Requirement?
          </h2>
          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-white/70">
            Share your material requirements with us and our team will coordinate sourcing,
            quotation and delivery based on your project needs.
          </p>
        </div>
        <div className="reveal flex flex-wrap gap-3">
          <button
            type="button"
            onClick={openEnquiry}
            className="group inline-flex items-center gap-3 bg-white px-8 py-4.5 text-xs font-semibold tracking-[0.16em] text-charcoal uppercase transition-colors hover:bg-white/85"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-white/35 px-8 py-4.5 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
