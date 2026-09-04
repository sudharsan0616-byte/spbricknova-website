import { createContext, useContext } from "react";

type EnquiryModalContextValue = {
  openEnquiry: () => void;
};

export const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) throw new Error("useEnquiryModal must be used inside EnquiryModalProvider");
  return context;
}
