import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

import { CONTACT } from "@/lib/site";
import { EnquiryModalContext } from "./enquiry-modal-context";
import heroImage from "@/assets/hero.png";

type FormValues = {
  name: string;
  mobile: string;
  email: string;
  product: string;
  specifyMaterial: string;
  quantity: string;
  projectType: string;
  delivery: string;
  message: string;
  source: string;
};

const INITIAL_VALUES: FormValues = {
  name: "",
  mobile: "",
  email: "",
  product: "",
  specifyMaterial: "",
  quantity: "",
  projectType: "",
  delivery: "",
  message: "",
  source: "",
};

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const [welcomeClosing, setWelcomeClosing] = useState(false);

  useEffect(() => {
    const autoOpenTimer = window.setTimeout(() => setWelcomeOpen(true), 400);
    return () => {
      window.clearTimeout(autoOpenTimer);
    };
  }, []);

  function closeEnquiry() {
    setIsOpen(false);
  }

  function closeWelcome() {
    if (welcomeClosing) return;
    setWelcomeClosing(true);
    window.setTimeout(() => {
      setWelcomeOpen(false);
      setWelcomeClosing(false);
    }, 320);
  }

  function openQuoteFromWelcome() {
    closeWelcome();
    window.setTimeout(() => setIsOpen(true), 320);
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (welcomeOpen || isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [welcomeOpen, isOpen]);

  return (
    <EnquiryModalContext.Provider value={{ openEnquiry: () => setIsOpen(true) }}>
      {children}
      <WelcomeModal
        isOpen={welcomeOpen}
        isClosing={welcomeClosing}
        onClose={closeWelcome}
        onRequestQuote={openQuoteFromWelcome}
      />
      <EnquiryModal isOpen={isOpen} onClose={closeEnquiry} />
    </EnquiryModalContext.Provider>
  );
}

function WelcomeModal({
  isOpen,
  isClosing,
  onClose,
  onRequestQuote,
}: {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-charcoal/80 px-4 py-5 sm:px-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-modal-title"
        className={`relative grid max-h-[calc(100dvh-2.5rem)] w-full max-w-[960px] overflow-hidden rounded-2xl border border-white/15 bg-card shadow-[0_28px_90px_rgba(0,0,0,0.55)] md:grid-cols-2 ${isClosing ? "welcome-modal-exit" : "welcome-modal-enter"}`}
      >
        <button
          type="button"
          aria-label="Close welcome popup"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 inline-flex size-9 items-center justify-center rounded-full border border-white/25 bg-charcoal/70 text-white transition-colors hover:border-brick hover:bg-brick"
        >
          <X className="size-4" />
        </button>

        <div className="order-2 flex min-h-0 flex-col justify-center p-6 sm:p-9 md:order-1 md:p-12">
          <p className="label-eyebrow text-brick">SP BRICKNOVA</p>
          <h2
            id="welcome-modal-title"
            className="mt-4 max-w-md font-display text-3xl leading-[0.98] font-bold uppercase text-foreground sm:text-4xl md:text-5xl"
          >
            Let&apos;s Build
            <br />
            <span className="text-brick">Something Strong.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us what construction materials you need and our team will help you with the right
            products, quantities and pricing.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onRequestQuote}
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-brick px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brick-deep"
            >
              Request a Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#products"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-3 rounded-md border border-border px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-brick hover:text-brick"
            >
              Explore Products
            </a>
          </div>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="mt-6 text-sm font-medium text-muted-foreground transition-colors hover:text-brick"
          >
            {CONTACT.phoneDisplay}
          </a>
        </div>

        <div className="relative order-1 min-h-[190px] overflow-hidden md:order-2 md:min-h-[520px]">
          <img
            src={heroImage}
            alt="Construction materials and an active building site"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-brick/10" />
          <div className="absolute inset-x-6 bottom-6 h-px bg-brick/70 md:inset-x-10" />
        </div>
      </div>
    </div>
  );
}

function EnquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFallback(false);
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    const mobile = values.mobile.replace(/[\s-]/g, "");
    if (!values.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
      nextErrors.mobile = "Enter a valid Indian mobile number.";
    }
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.product) nextErrors.product = "Please select a material.";
    if (values.product === "Other Construction Materials" && !values.specifyMaterial.trim()) {
      nextErrors.specifyMaterial = "Please specify the material you need.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setFallback(false);
    window.setTimeout(() => {
      const message = [
        "Hello SP BrickNova,",
        "",
        "New Construction Material Enquiry",
        "",
        `Name: ${values.name.trim()}`,
        `Mobile: ${values.mobile.trim()}`,
        `Email: ${values.email.trim()}`,
        `Material: ${values.product === "Other Construction Materials" ? values.specifyMaterial.trim() : values.product}`,
        values.quantity.trim() ? `Quantity: ${values.quantity.trim()}` : "",
        values.projectType ? `Project Type: ${values.projectType}` : "",
        values.delivery ? `Delivery: ${values.delivery}` : "",
        values.source ? `Source: ${values.source}` : "",
        values.message.trim() ? `Additional Details: ${values.message.trim()}` : "",
        "",
        "Please share the quotation and further details.",
        "",
        "Thank you.",
      ]
        .filter(Boolean)
        .join("\n");
      const whatsappWindow = window.open(
        `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );

      setSubmitting(false);
      if (whatsappWindow) {
        setValues(INITIAL_VALUES);
        setErrors({});
        onClose();
      } else {
        setFallback(true);
      }
    }, 350);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-charcoal/65 px-4 py-6 sm:px-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !submitting) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="flex max-h-[calc(100dvh-3rem)] w-full max-w-[580px] flex-col overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-[0_24px_80px_rgba(41,41,43,0.24)] animate-in fade-in zoom-in-95 duration-200 sm:p-8"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="label-eyebrow text-brick">GET IN TOUCH</p>
            <h2
              id="enquiry-modal-title"
              className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl"
            >
              Request a Quote
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tell us what you need and our team will get back to you shortly.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close enquiry form"
            onClick={onClose}
            disabled={submitting}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brick hover:text-brick disabled:opacity-50"
          >
            <X className="size-4" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-6 min-h-0 overflow-y-auto pr-1 grid gap-4 sm:grid-cols-2"
        >
          <Field
            label="Full Name"
            name="name"
            value={values.name}
            error={errors.name}
            onChange={(value) => updateValue("name", value)}
            required
          />
          <Field
            label="Mobile Number"
            name="mobile"
            type="tel"
            value={values.mobile}
            error={errors.mobile}
            inputMode="numeric"
            maxLength={10}
            onChange={(value) => updateValue("mobile", value.replace(/\D/g, "").slice(0, 10))}
            required
          />
          <Field
            label="Email Address"
            name="email"
            type="email"
            value={values.email}
            error={errors.email}
            onChange={(value) => updateValue("email", value)}
            required
          />
          <SelectField
            label="Material / Product Requirement"
            name="product"
            value={values.product}
            error={errors.product}
            onChange={(value) => updateValue("product", value)}
            placeholder="Select material"
            options={[
              "Cement",
              "TMT Steel",
              "M-Sand",
              "P-Sand",
              "Blue Metal",
              "Bricks",
              "Hollow Blocks",
              "Solid Blocks",
              "AAC Blocks",
              "Other Construction Materials",
            ]}
            required
          />
          {values.product === "Other Construction Materials" && (
            <Field
              label="Please specify material"
              name="specifyMaterial"
              value={values.specifyMaterial}
              error={errors.specifyMaterial}
              onChange={(value) => updateValue("specifyMaterial", value)}
              required
            />
          )}
          <Field
            label="Quantity / Project Requirement"
            name="quantity"
            value={values.quantity}
            onChange={(value) => updateValue("quantity", value)}
            placeholder="Example: 500 bags / 10 tons / 2,000 blocks"
          />
          <SelectField
            label="Project Type"
            name="projectType"
            value={values.projectType}
            onChange={(value) => updateValue("projectType", value)}
            placeholder="Select project type"
            options={[
              "Residential",
              "Commercial",
              "Industrial",
              "Infrastructure",
              "Renovation",
              "Other",
            ]}
          />
          <SelectField
            label="Delivery Requirement"
            name="delivery"
            value={values.delivery}
            onChange={(value) => updateValue("delivery", value)}
            placeholder="Select delivery preference"
            options={["Delivery Required", "Self Pickup", "Not Decided"]}
          />
          <label className="block sm:col-span-2">
            <span className="label-eyebrow text-muted-foreground">
              Message / Additional Details
            </span>
            <textarea
              name="message"
              value={values.message}
              placeholder="Tell us about your project or any specific requirements..."
              onChange={(event) => updateValue("message", event.target.value)}
              rows={3}
              className="mt-2 w-full resize-none rounded-md border border-input bg-secondary px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brick focus:ring-1 focus:ring-brick/30"
            />
          </label>
          <SelectField
            label="How did you hear about us?"
            name="source"
            value={values.source}
            onChange={(value) => updateValue("source", value)}
            placeholder="Select a source"
            options={[
              "Google Search",
              "WhatsApp",
              "Instagram",
              "Facebook",
              "Reference",
              "Existing Customer",
              "Other",
            ]}
            full
          />

          {fallback && (
            <p className="rounded-md border border-brick/30 bg-brick/5 px-3 py-2 text-xs leading-relaxed text-brick sm:col-span-2">
              WhatsApp could not be opened. Please contact us directly at {CONTACT.phoneDisplay}.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-brick px-5 text-[0.68rem] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-brick-deep disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
          >
            {submitting ? "Preparing WhatsApp..." : "Send Enquiry on WhatsApp"}
            {!submitting && <ArrowRight className="size-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  error,
  required,
  placeholder,
  inputMode,
  maxLength,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="label-eyebrow text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 h-11 w-full rounded-md border border-input bg-secondary px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brick focus:ring-1 focus:ring-brick/30 aria-[invalid=true]:border-brick"
      />
      {error && (
        <span id={`${name}-error`} className="mt-1 block text-xs text-brick">
          {error}
        </span>
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  error,
  required,
  placeholder,
  options,
  full,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  required?: boolean;
  placeholder: string;
  options: string[];
  full?: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <label className={full ? "block sm:col-span-2" : "block"}>
      <span className="label-eyebrow text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 h-11 w-full rounded-md border border-input bg-secondary px-3 text-sm text-foreground outline-none transition-colors focus:border-brick focus:ring-1 focus:ring-brick/30 aria-[invalid=true]:border-brick"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <span id={`${name}-error`} className="mt-1 block text-xs text-brick">
          {error}
        </span>
      )}
    </label>
  );
}
