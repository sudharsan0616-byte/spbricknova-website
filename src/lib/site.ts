export const CONTACT = {
  business: "SP BrickNova",
  proprietor: "Sudharsan M",
  location:
    "Plot no : 63, Mahalakshmi Nagar, Extension -3, Nandhivaram, Guduvanchery. Chengalpattu - 603202",
  address: {
    streetAddress: "Plot no : 63, Mahalakshmi Nagar, Extension -3",
    addressLocality: "Nandhivaram, Guduvanchery",
    addressRegion: "Chengalpattu, Tamil Nadu",
    postalCode: "603202",
    addressCountry: "IN",
  },
  directionUrl: "https://www.google.com/maps?q=12.8488363,80.0718588&z=17&hl=en",
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
