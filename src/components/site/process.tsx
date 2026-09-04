import { Check, ClipboardCheck, FileText, Search, Truck, User } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Customer Enquiry",
    desc: "Share your material requirement and project scope with us.",
    Icon: User,
  },
  {
    num: "02",
    title: "Requirement Review",
    desc: "We understand the quantity, specification, and delivery timeline.",
    Icon: ClipboardCheck,
  },
  {
    num: "03",
    title: "Supplier Sourcing",
    desc: "We source the right material from trusted manufacturers and suppliers.",
    Icon: Search,
  },
  {
    num: "04",
    title: "Quotation",
    desc: "Receive a clear and competitive rate for your requirement.",
    Icon: FileText,
  },
  {
    num: "05",
    title: "Order Confirmation",
    desc: "Approve the order and confirm the delivery schedule.",
    Icon: Check,
  },
  {
    num: "06",
    title: "Dispatch & Delivery",
    desc: "We arrange dispatch and ensure timely site delivery.",
    Icon: Truck,
  },
];

function ProcessStepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <article className="relative z-10 flex h-full w-full flex-col rounded-[1.25rem] border border-border bg-card p-4 text-center md:p-5 lg:p-6">
      <div className="mb-4 flex justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-[0.9rem] border border-border bg-brick text-white shadow-[0_10px_18px_-14px_rgba(143,29,37,0.5)] md:h-13 md:w-13">
          <step.Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.8} />
        </span>
      </div>

      <h3 className="mt-3 font-display text-[0.8rem] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-foreground md:text-[0.9rem] lg:text-[0.96rem]">
        {step.title}
      </h3>

      <p className="mt-3 flex-1 text-[0.72rem] leading-relaxed text-muted-foreground md:text-[0.75rem] lg:text-[0.78rem]">
        {step.desc}
      </p>
    </article>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-background py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span className="hidden h-px w-full max-w-[120px] bg-border sm:block" />
          <p className="label-eyebrow text-[0.72rem] font-semibold tracking-[0.18em] text-brick uppercase sm:text-xs">
            HOW IT WORKS
          </p>
          <span className="hidden h-px w-full max-w-[120px] bg-border sm:block" />
        </div>

        <div className="mt-4 text-center sm:mt-5 md:mt-6">
          <h2 className="font-display text-[clamp(2rem,4vw,4.5rem)] leading-[0.92] tracking-[-0.06em] text-foreground uppercase">
            Our Supply Process
          </h2>
        </div>

        <div className="relative mt-8 md:mt-12">
          <div className="hidden md:grid md:grid-cols-6 md:gap-3 lg:gap-4">
            {STEPS.map((step, index) => (
              <div key={step.num} className="relative z-10 min-w-0">
                <div className="relative z-10 h-full">
                  <ProcessStepCard step={step} />
                </div>

                {index < STEPS.length - 1 && (
                  <>
                    <div className="pointer-events-none absolute left-full top-[46%] z-0 h-[2px] w-[calc(100%-0.5rem)] -translate-y-1/2 bg-border" />
                    <div className="pointer-events-none absolute left-[calc(100%-0.15rem)] top-[46%] z-0 h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[9px] border-y-transparent border-l-brick" />
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="relative md:hidden">
            <div className="absolute left-[1.05rem] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-4">
              {STEPS.map((step, index) => (
                <div key={step.num} className="relative pl-10">
                  <div className="absolute left-0 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-[0.62rem] font-semibold text-brick">
                    {step.num}
                  </div>

                  {index < STEPS.length - 1 && (
                    <>
                      <div className="absolute left-[1.05rem] top-[3.2rem] h-8 w-px bg-border" />
                      <div className="absolute left-[1.85rem] top-[3.9rem] h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-brick" />
                    </>
                  )}

                  <article className="rounded-[1.15rem] border border-border bg-card p-4 text-left">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-[0.8rem] border border-border bg-brick text-white">
                        <step.Icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                    </div>

                    <h3 className="font-display text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[0.72rem] leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
