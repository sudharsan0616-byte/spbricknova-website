import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with SP BrickNova on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex size-12 items-center justify-center rounded-full bg-brick text-white shadow-[0_12px_28px_-12px_rgba(41,41,43,0.5)] transition-colors hover:bg-brick-deep sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5" strokeWidth={1.8} />
    </a>
  );
}
