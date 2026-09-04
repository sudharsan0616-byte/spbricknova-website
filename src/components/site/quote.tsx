import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

import { CONTACT, WHATSAPP_URL } from "@/lib/site";

const FIELDS: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  full?: boolean;
}[] = [
  { name: "name", label: "Name", required: true },
  { name: "company", label: "Company / Project Name" },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email" },
  { name: "material", label: "Material Required", required: true },
  { name: "quantity", label: "Quantity" },
  { name: "projectType", label: "Project Type" },
  { name: "location", label: "Delivery Location" },
];

export function Quote() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);

    // No backend configured yet: hand the enquiry to WhatsApp so nothing is lost.
    const lines = [
      "New enquiry — SP BrickNova",
      ...FIELDS.map(({ name, label }) => {
        const value = String(data.get(name) ?? "").trim();
        return value ? `${label}: ${value}` : "";
      }).filter(Boolean),
    ];
    const notes = String(data.get("notes") ?? "").trim();
    if (notes) lines.push(`Additional Requirements: ${notes}`);

    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Enquiry ready to send", {
      description: "We've opened WhatsApp with your requirement details.",
    });
    form.reset();
    setSubmitting(false);
  }

  return (
    <section id="quote" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="reveal label-eyebrow text-brick">Request a Quote</p>
            <h2 className="reveal mt-5 text-3xl leading-[1.08] font-semibold md:text-5xl">
              Send your material
              <br />
              requirement
            </h2>
            <p className="reveal mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Fill in your requirement and we will revert with availability, pricing and a delivery
              plan for your site.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="reveal mt-8 inline-flex items-center gap-2 border border-border px-7 py-4 text-xs font-semibold tracking-[0.16em] text-foreground uppercase transition-colors hover:border-brick hover:bg-brick hover:text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal grid gap-5 border border-border bg-background p-6 sm:grid-cols-2 md:p-10"
          >
            {FIELDS.map((field) => (
              <label key={field.name} className="block">
                <span className="label-eyebrow text-muted-foreground">
                  {field.label}
                  {field.required ? " *" : ""}
                </span>
                <input
                  name={field.name}
                  type={field.type ?? "text"}
                  required={field.required}
                  className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-brick"
                />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="label-eyebrow text-muted-foreground">Additional Requirements</span>
              <textarea
                name="notes"
                rows={4}
                className="mt-2 w-full resize-none border border-input bg-background p-4 text-sm outline-none transition-colors focus:border-brick"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center justify-center gap-3 bg-brick px-8 py-4.5 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-brick-deep disabled:opacity-70 sm:col-span-2 sm:justify-self-start"
            >
              Submit Enquiry
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
