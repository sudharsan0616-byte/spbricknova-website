export const CONTACT = {
  business: "SP BrickNova",
  proprietor: "Sudharsan M",
  location:
    "Plot no: 63, Mahalakshmi Nagar, Extension -3, Nandhivaram, Guduvanchery, Chengalpattu - 603202",
  address: {
    streetAddress: "Plot no: 63, Mahalakshmi Nagar, Extension -3",
    addressLocality: "Nandhivaram, Guduvanchery",
    addressRegion: "Chengalpattu, Tamil Nadu",
    postalCode: "603202",
    addressCountry: "IN",
  },
  directionUrl:
    "https://www.google.com/maps/place/12%C2%B050'55.8%22N+80%C2%B004'18.7%22E/@12.8488363,80.0692839,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.8488363!4d80.0718588?hl=en&entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D",
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
