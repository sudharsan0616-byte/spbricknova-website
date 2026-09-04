import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Products } from "@/components/site/products";
import { Brands } from "@/components/site/brands";
import { WhoWeServe } from "@/components/site/who-we-serve";
import { WhyUs } from "@/components/site/why-us";
import { Process } from "@/components/site/process";
import { Contact } from "@/components/site/contact";
import { EnquiryCta } from "@/components/site/enquiry-cta";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { useReveal } from "@/hooks/use-reveal";
import { CONTACT } from "@/lib/site";
import { EnquiryModalProvider } from "@/components/site/enquiry-modal";

const TITLE = "SP BrickNova — Construction Materials Supplier in Chennai";
const DESCRIPTION =
  "SP BrickNova supplies bricks, blocks, M-sand, P-sand, aggregates, cement and steel across Chennai and Tamil Nadu. Quality materials, reliable supply, timely delivery.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: CONTACT.business,
          description: DESCRIPTION,
          slogan: CONTACT.tagline,
          telephone: CONTACT.phoneDisplay,
          email: CONTACT.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          areaServed: "Chennai, Tamil Nadu",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <EnquiryModalProvider>
      <div className="min-h-screen bg-background">
        <SiteNav />
        <main>
          <Hero />
          <Products />
          <Brands />
          <WhoWeServe />
          <WhyUs />
          <Process />
          <About />
          <EnquiryCta />
          <Contact />
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </div>
    </EnquiryModalProvider>
  );
}
