import { MapPin } from "lucide-react";
import aboutImage from "@/assets/aboutimage.png";

export function About() {
  return (
    <section id="about" className="bg-background py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[1.08fr_1.22fr]">
          <div className="order-1 overflow-hidden rounded-[1.5rem] border border-border bg-muted shadow-[0_18px_48px_-24px_rgba(41,41,43,0.14)]">
            <img
              src={aboutImage}
              alt="Construction materials prepared for professional project supply"
              width={1200}
              height={900}
              loading="lazy"
              className="h-[240px] w-full object-cover sm:h-[280px] md:h-[360px] lg:h-[500px]"
            />
          </div>

          <div className="order-2 flex flex-col justify-center">
            <div className="reveal flex items-center gap-4">
              <span className="h-[2px] w-8 bg-brick" />
              <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm font-semibold tracking-wide">
                ABOUT SP BRICKNOVA
              </p>
            </div>

            <div className="reveal mt-4 sm:mt-5 md:mt-6">
              <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm font-semibold tracking-wide">
                FROM SOURCE TO SITE
              </p>
            </div>

            <h2 className="reveal mt-4 sm:mt-5 md:mt-6 font-display leading-tight font-bold tracking-[-0.02em] text-foreground">
              <span className="text-[clamp(1.75rem,5vw,3.5rem)]">
                BUILT ON
                <br />
                <span className="text-brick">QUALITY</span>
              </span>
              <br />
              <span className="text-[clamp(1.75rem,5vw,3.5rem)]">
                DRIVEN BY
                <br />
                <span className="text-brick">RELIABILITY</span>
              </span>
            </h2>

            <div className="mt-6 space-y-4 sm:space-y-5 md:space-y-6">
              <p className="reveal text-[0.875rem] sm:text-[0.95rem] md:text-base leading-relaxed text-muted-foreground max-w-[38rem]">
                SP BrickNova is a Chennai-based construction material trading and distribution
                business committed to supplying quality building materials to contractors, builders,
                developers, industries and individual customers.
              </p>

              <p className="reveal text-[0.875rem] sm:text-[0.95rem] md:text-base leading-relaxed text-muted-foreground max-w-[38rem]">
                We work with manufacturers, distributors and reliable suppliers to source
                construction materials at competitive prices and coordinate dependable delivery to
                project sites.
              </p>

              <p className="reveal border-l-3 border-brick pl-4 sm:pl-5 md:pl-6 font-display text-[0.875rem] sm:text-[0.95rem] md:text-base font-semibold text-foreground max-w-[38rem]">
                Our focus is simple — quality products, competitive pricing, reliable sourcing and
                timely service.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-8 sm:mt-10 md:mt-12 lg:mt-14 border-y border-border bg-muted px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-7">
          <div className="grid gap-5 sm:gap-6 md:gap-8 text-left md:grid-cols-2 lg:grid-cols-4">
            <div className="pb-5 md:border-r md:border-b-0 md:pb-0 md:pr-6">
              <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm font-semibold tracking-wide">
                Business
              </p>
              <p className="mt-2 sm:mt-3 font-display text-base sm:text-lg font-semibold text-foreground">
                SP BrickNova
              </p>
            </div>
            <div className="pb-5 md:border-r md:border-b-0 md:pb-0 md:pr-6">
              <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm font-semibold tracking-wide">
                Based in
              </p>
              <p className="mt-2 sm:mt-3 flex items-center gap-2 font-display text-base sm:text-lg font-semibold text-foreground">
                <MapPin className="size-4 text-brick shrink-0" strokeWidth={2} />
                <span>Chennai, Tamil Nadu</span>
              </p>
            </div>
            <div className="pb-5 md:border-r md:border-b-0 md:pb-0 md:pr-6 lg:border-r-0 lg:pr-0">
              <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm font-semibold tracking-wide">
                Business Type
              </p>
              <p className="mt-2 sm:mt-3 font-display text-base sm:text-lg font-semibold text-foreground">
                Construction Materials Trading &amp; Distribution
              </p>
            </div>
            <div>
              <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm font-semibold tracking-wide">
                Material Range
              </p>
              <p className="mt-2 sm:mt-3 font-display text-base sm:text-lg font-semibold text-foreground">
                Cement, Steel, Sand, Bricks, Blocks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
