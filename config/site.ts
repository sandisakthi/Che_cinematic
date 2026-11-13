/**
 * ─────────────────────────────────────────────────────────────────────────────
 * LUMEN — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 * Studio name, galleries, pricing, and copy all live here. Edit this file and
 * the whole portfolio re-themes.
 *
 * ABOUT THE IMAGES: this template ships with ZERO image files. Every "photo" is
 * a deterministic CSS gradient drawn by components/Frame.tsx, so the repo stays
 * tiny, loads instantly, and contains nothing you need a license for.
 * When you have real photography, see the "Using real photos" section of the
 * README — it is a two-line change per image.
 */

export const siteConfig = {
  name: "Che Cinematic",
  photographer: "Rohit Thiyagaraj",
  tagline: "Capturing moments, creating stories",
  title: "Che Cinematic Photography & Videography",
  description:
    "Capturing weddings, events and portraits through creative photography and cinematic storytelling. Booking 2026 dates now.",
  url: "https://che-cinematic.pages.dev/",

  contact: {
    email: "rohitsteve1@gmail.com",
    phone: "9087249925",
    phoneHref: "9087249925",
    city: "Chennai",
    country: "India",
  },

  social: {
    instagram: "https://www.instagram.com/che_cinematic?xtok=MTNpZWdvdTI3Z3Exdw==",
    pinterest: "-",
  },

  hero: {
    eyebrow: "Freelance · Photography",
    headline: "Light, laughter, and the moments between the poses.",
    sub: "No need to practise your smiles or worry about perfect poses. Just be yourself, enjoy your special day, and I'll take care of capturing the emotions, little details and moments along the way.",
    primaryCta: "Check your date",
    secondaryCta: "See the work",
  },

  /**
   * Galleries. Each becomes a filterable collection on the homepage and opens
   * in the lightbox.
   *
   * `shots` is just a count — Frame.tsx generates a distinct gradient per
   * (gallery, index) pair. Replace with real image paths when you have them.
   *
   * `ratio` controls the grid: "portrait" | "landscape" | "square".
   */
  galleries: [
    {
      slug: "weddings",
      name: "Weddings",
      blurb: "Full-day coverage, documentary-leaning, always unhurried.",
      shots: 9,
      images: [
  "/galleries/weddings/wedding-01.jpg",
  "/galleries/weddings/WhatsApp Image 2026-11-13 at 11.29.46 AM (1).jpeg",
  "/galleries/weddings/WhatsApp Image 2026-11-13 at 4.04.47 PM.jpeg",
  "/galleries/weddings/WhatsApp Image 2026-11-13 at 4.04.48 PM.jpeg",
  "/galleries/weddings/WhatsApp Image 2026-11-13 at 4.04.498 PM.jpeg",
],
      ratios: ["portrait", "landscape", "square", "landscape", "portrait", "portrait", "landscape", "square", "portrait"],
    },
    {
      slug: "portraits",
      name: "Portraits",
      blurb: "Individuals, couples, and families — usually outdoors, usually golden hour.",
      shots: 6,
      images: [
  "/galleries/portraits/WhatsApp Image 2026-11-13 at 11.29.47 AM (2).jpeg",
  "/galleries/portraits/WhatsApp Image 2026-11-13 at 11.29.47 AM (1).jpeg",
  "/galleries/portraits/WhatsApp Image 2026-11-13 at 11.29.47 AM.jpeg",
  "/galleries/portraits/WhatsApp Image 2026-11-13 at 5.17.40 PM.jpeg",
"/galleries/portraits/WhatsApp Image 2026-11-13 at 5.17.41 PM.jpeg",
],
      ratios: ["portrait", "square", "portrait", "landscape", "portrait", "square"],
    },
    {
      slug: "editorial",
      name: "Editorial",
      blurb: "Brand and magazine commissions. Studio or location.",
      shots: 6,
      images: [
  "/galleries/editorial/WhatsApp Image 2026-11-13 at 11.29.48 AM (4).jpeg",
  "/galleries/editorial/WhatsApp Image 2026-11-13 at 11.29.48 AM (3).jpeg",
  "/galleries/editorial/WhatsApp Image 2026-11-13 at 11.29.47 AM (5).jpeg",
  "/galleries/editorial/WhatsApp Image 2026-11-13 at 11.29.46 AM (2).jpeg",
  "/galleries/editorial/WhatsApp Image 2026-11-13 at 4.57.42 PM.jpeg",
],
      ratios: ["landscape", "portrait", "landscape", "square", "landscape", "portrait"],
    },
  ],

  about: {
    heading: "I have photographed so many weddings and events cried at most of them",
    body: [
      "I picked up a camera in 2020 to document a friend's wedding nobody could afford to have photographed. I have not really put it down since.",
      "My approach is simple: arrive early, stay quiet, know where the light is going to be an hour from now. I will direct you when it helps and disappear when it does not. The photographs you will remember are almost never the ones you posed for.",
    ],
    stats: [
      { value: "Hassle Free", label: "Weddings & Events" },
      { value: "Quality", label: "delivery" },
      { value: "2024", label: "Shooting since" },
    ],
  },

  /**
   * Packages. Prices are strings so you can write "from €2,400" or "on request".
   */
  packages: [
    {
      name: "Portrait session",
      price: "1500",
      duration: "2 Hours",
      features: [
        "One location, Chennai or nearby",
        "40+ edited photographs",
        "Online gallery, 12-month hosting",
        "Print release included",
      ],
      featured: false,
    },
    {
      name: "Wedding",
      price: "5000",
      duration: "10 hours",
      features: [
        "Preparations through first dance",
        "600+ edited photographs",
        "Online gallery with client proofing",
        "Engagement session included",
        "Print release included",
      ],
      featured: true,
    },
    {
      name: "Editorial / brand",
      price: "On request",
      duration: "Half or full day",
      features: [
        "Studio or location",
        "Licensed for commercial use",
        "Art direction on request",
        "48-hour turnaround available",
      ],
      featured: false,
    },
  ],

  /** The booking process, set out plainly. */
  process: [
    ["Check the date", "Send me your date and I will tell you within a day whether I am free."],
    ["Meet", "A coffee or a video call. No pitch — mostly I want to know how you want the day to feel."],
    ["The day", "I arrive early, find the light, and stay out of the way."],
    ["Your gallery", "Delivered in ten days, in a private online gallery you can share and download."],
  ],

  faqs: [
    {
      q: "Do you travel?",
      a: "Yes, constantly. Travel within TamilNadu is included. Anywhere else, I add travel and a night's accommodation at cost — no markup, no day rate for travel.",
    },
    {
      q: "How long until we see the photographs?",
      a: "Ten days for the full gallery. I send a preview of around thirty images within 48 hours, because waiting is unbearable and you will want something to show people.",
    },
    {
      q: "Do we get the raw files?",
      a: "No, and no photographer worth booking will say yes. Editing is half the work and half the reason the photographs look like mine. You get every keeper, fully edited, at full resolution, with a print release.",
    },
    {
      q: "What happens if you are ill?",
      a: "I carry professional insurance and I am part of a network of photographers who cover each other. In eleven years I have never missed a wedding, but there is a real plan if I ever do.",
    },
  ],

  /** Client proofing page copy (app/proofing/page.tsx). */
  proofing: {
    heading: "Client galleries",
    body: "If you are here to see your photographs, enter the gallery code I sent you. Galleries stay online for twelve months.",
    placeholder: "e.g. Rohit-2026",
  },

  footerNote: "Built with passion by",
  footerCredit: {
    label: "Che Cinematic",
    href: "https://www.instagram.com/che_cinematic?xtok=MTNpZWdvdTI3Z3Exdw==",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** schema.org data — helps you show up for "<city> wedding photographer". */
export function photographerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.city,
      addressCountry: siteConfig.contact.country,
    },
    founder: { "@type": "Person", name: siteConfig.photographer },
    makesOffer: siteConfig.packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: `${p.name} — ${p.duration}`,
    })),
  };
}

/** FAQ structured data — eligible for rich results. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
