export const CONTACT = {
  business: "SP BrickNova",
  proprietor: "Sudharsan M",
  location: "Kandigai, Chennai, Tamil Nadu",
  directionUrl:
    "https://www.google.com/maps/place/Unihomes+1,+Uniworld+City/@12.8367755,80.123752,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5258435c4f34b9:0xfa91fa96c3fd75dc!8m2!3d12.8367755!4d80.1263269!16s%2Fg%2F11gzc56fy?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D",
  phoneDisplay: "+91 73581 97702",
  phoneRaw: "+917358197702",
  whatsapp: "917358197702",
  email: "sales@spbricknova.com",
  tagline: "Quality Materials. Reliable Supply. Timely Delivery.",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hello SP BrickNova, I would like a quotation for construction materials.",
)}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
