export const site = {
  url: "https://www.francolungwingchunacademy.com",
  phone: {
    raw: "+16262332882",
    display: "(626) 233-2882",
    href: "tel:+16262332882",
  },
  address: {
    street: "5614 Rosemead Blvd",
    city: "Temple City",
    state: "CA",
    zip: "91780",
    mapsHref: "https://maps.google.com/?q=5614+Rosemead+Blvd+Temple+City+CA+91780",
    embedSrc: "https://maps.google.com/maps?q=5614+Rosemead+Blvd%2C+Temple+City%2C+CA+91780&z=15&output=embed&hl=en",
  },
  social: {
    instagram: { href: "https://www.instagram.com/wingchunfrancolung", handle: "@wingchunfrancolung" },
    facebook:  { href: "https://www.facebook.com/FrancoLung",           label: "Franco Lung" },
    youtube:   { href: "https://www.youtube.com/@FrancoLungWingChun",   label: "YouTube Channel" },
  },
  reviews: {
    count: 30,
    url: "https://www.google.com/search?q=Franco+Lung+Wing+Chun+Temple+City+reviews",
  },
} as const;
