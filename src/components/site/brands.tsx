import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { ArrowRight } from "lucide-react";

import ultratechLogo from "@/assets/brandslogo/ultratech-cement-logo-png_seeklogo-170443.png";
import jswLogo from "@/assets/brandslogo/jsw-steel-logo-png_seeklogo-630167.png";
import tataLogo from "@/assets/brandslogo/tata-steel-logo-png_seeklogo-200736.png";
import ramcoLogo from "@/assets/brandslogo/ramco.jpeg";
import ambujaLogo from "@/assets/brandslogo/ambuja-cement-logo-png_seeklogo-304258.png";
import dalmiaLogo from "@/assets/brandslogo/dalmia .jpeg";
import { useEnquiryModal } from "@/components/site/enquiry-modal-context";

type Brand = { name: string; logo?: string; logoClassName?: string };

const BRANDS: Brand[] = [
  { name: "UltraTech Cement", logo: ultratechLogo, logoClassName: "max-w-[74%] max-h-[90px]" },
  { name: "JSW Steel", logo: jswLogo, logoClassName: "max-w-[62%] max-h-[86px]" },
  { name: "Tata Steel", logo: tataLogo, logoClassName: "max-w-[68%] max-h-[90px]" },
  { name: "Ramco Cement", logo: ramcoLogo, logoClassName: "max-w-[76%] max-h-[88px]" },
  { name: "Ambuja Cement", logo: ambujaLogo, logoClassName: "max-w-[70%] max-h-[88px]" },
  { name: "Dalmia Cement", logo: dalmiaLogo, logoClassName: "max-w-[72%] max-h-[84px]" },
  { name: "Other reputed brands" },
];

const BELT_COPIES = 3;

export function Brands() {
  const { openEnquiry } = useEnquiryModal();
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const offsetRef = useRef(BRANDS.length);
  const draggingRef = useRef(false);
  const hoveredRef = useRef(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastTime = performance.now();

    const renderCards = () => {
      const isMobile = stage.clientWidth < 640;
      const spacing = isMobile
        ? Math.min(170, stage.clientWidth * 0.48)
        : Math.min(250, stage.clientWidth * 0.2);
      const centerIndex = Math.round(offsetRef.current) % BRANDS.length;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const relative = index - offsetRef.current;
        const distance = Math.abs(relative);
        const visible = distance < 3.6;
        const scale = Math.max(0.78, 1.08 - distance * 0.1);
        const opacity = Math.max(0, 1 - distance * 0.17);
        const rotate = Math.max(-34, Math.min(34, relative * -9));
        const depth = Math.max(-120, 150 - distance * 85);
        const x = relative * spacing;

        card.style.opacity = visible ? String(opacity) : "0";
        card.style.visibility = visible ? "visible" : "hidden";
        card.style.zIndex = String(100 - Math.round(distance * 10));
        card.style.transform = `translate3d(calc(-50% + ${x}px), -50%, ${depth}px) rotateY(${rotate}deg) scale(${scale})`;
        card.dataset.featured = index % BRANDS.length === centerIndex ? "true" : "false";
      });

      const nextFeatured = ((centerIndex % BRANDS.length) + BRANDS.length) % BRANDS.length;
      setFeaturedIndex((current) => (current === nextFeatured ? current : nextFeatured));
    };

    const animate = (time: number) => {
      const delta = Math.min(40, time - lastTime);
      lastTime = time;
      if (!draggingRef.current && !reduceMotion.matches) {
        const speed = hoveredRef.current ? 0.00011 : 0.00032;
        offsetRef.current += delta * speed;
        if (offsetRef.current >= BRANDS.length * 2) offsetRef.current -= BRANDS.length;
      }
      renderCards();
      frame = window.requestAnimationFrame(animate);
    };

    renderCards();
    frame = window.requestAnimationFrame(animate);
    const onResize = () => renderCards();
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    dragStartRef.current = { x: event.clientX, offset: offsetRef.current };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!draggingRef.current || !stageRef.current) return;
    const spacing =
      stageRef.current.clientWidth < 640
        ? Math.min(170, stageRef.current.clientWidth * 0.48)
        : Math.min(250, stageRef.current.clientWidth * 0.2);
    offsetRef.current =
      dragStartRef.current.offset - (event.clientX - dragStartRef.current.x) / spacing;
    if (offsetRef.current < 0) offsetRef.current += BRANDS.length;
    if (offsetRef.current >= BRANDS.length * 2) offsetRef.current -= BRANDS.length;
  }

  function finishPointer(event: ReactPointerEvent<HTMLDivElement>) {
    draggingRef.current = false;
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  }

  const featuredBrand = BRANDS[featuredIndex];

  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-secondary py-14 sm:py-18 md:py-22 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(155,28,43,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(155,28,43,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-1/4 top-24 h-72 rounded-full bg-brick/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal flex items-center justify-center gap-4">
            <span className="h-[2px] w-8 bg-brick" />
            <p className="label-eyebrow text-muted-foreground text-xs sm:text-sm">
              Brands We Supply
            </p>
            <span className="h-[2px] w-8 bg-brick" />
          </div>
          <h2 className="reveal mt-4 font-display text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            Trusted Brands. <span className="text-brick">Reliable Supply.</span>
          </h2>
          <p className="reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We source quality construction materials from reputed manufacturers and suppliers to
            meet different project requirements.
          </p>
        </div>

        <div
          ref={stageRef}
          className="relative mx-auto mt-8 h-[280px] w-full max-w-[1180px] cursor-grab touch-pan-y select-none [perspective:1100px] active:cursor-grabbing sm:mt-12 sm:h-[340px] md:h-[390px]"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishPointer}
          onPointerCancel={finishPointer}
          onPointerEnter={() => {
            hoveredRef.current = true;
          }}
          onPointerLeave={() => {
            hoveredRef.current = false;
          }}
          aria-label="Continuously rotating trusted brand showcase"
        >
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brick/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-[18%] bottom-4 h-12 rounded-[50%] bg-black/25 blur-2xl" />
          {Array.from({ length: BELT_COPIES }).flatMap((_, copyIndex) =>
            BRANDS.map((brand, brandIndex) => {
              const index = copyIndex * BRANDS.length + brandIndex;
              return (
                <div
                  key={`${brand.name}-${copyIndex}`}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  data-featured="false"
                  className="brand-belt-card absolute left-1/2 top-1/2 h-[148px] w-[148px] overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-[0_22px_42px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow] duration-300 sm:h-[190px] sm:w-[210px] sm:p-4 md:h-[220px] md:w-[240px]"
                >
                  <div className="flex h-full flex-col items-center justify-center gap-3">
                    {brand.logo ? (
                      <div className="flex h-[76px] w-full items-center justify-center rounded-lg bg-white p-2 sm:h-[112px]">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className={`h-auto w-auto object-contain ${brand.logoClassName ?? "max-h-[76px] max-w-[82%]"}`}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex h-[76px] w-full items-center justify-center rounded-lg border border-brick/40 bg-brick/10 p-3 text-center sm:h-[112px]">
                        <span className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-brick sm:text-sm">
                          Your brand, supplied
                        </span>
                      </div>
                    )}
                    <span className="text-center font-display text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-foreground sm:text-xs">
                      {brand.name}
                    </span>
                  </div>
                </div>
              );
            }),
          )}
        </div>

        <div className="reveal mx-auto -mt-1 max-w-sm text-center sm:-mt-3">
          <p className="label-eyebrow text-brick">Trusted Brand Partner</p>
          <p className="mt-2 font-display text-xl font-bold uppercase text-foreground sm:text-2xl">
            {featuredBrand.name}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Quality materials supplied for construction requirements.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-col items-center gap-4 text-center sm:mt-14">
          <p className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-foreground sm:text-2xl">
            Quality Materials. <span className="text-brick">Trusted Brands.</span> Reliable Supply.
          </p>
          <button
            type="button"
            onClick={openEnquiry}
            className="group inline-flex items-center gap-3 border border-brick px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-brick transition-colors hover:bg-brick hover:text-white"
          >
            Enquire on Materials
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
