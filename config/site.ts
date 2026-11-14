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
  tagline: "CAPTURING LIFE, CREATING STORIES.",
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
    headline: "You live the moment. We capture the story.",
    sub: "Whether it's a wedding celebration, a pre-wedding shoot or a personal portrait, bring your excitement, enjoy the experience and make the most of every moment. I'll be there to bring your memories to life, frame by frame.",
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
      blurb: "Capturing the emotions, traditions and moments that make your wedding unforgettable.",
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
      blurb: "Every face has a character. Every portrait has a story.",
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
      blurb: "Finding beauty in the details.",
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
    heading: "Somewhere between the lens and life, I found a world of my own.",
    body: [
      "My love for cinema shapes the way I see photography. Its visuals, emotions and storytelling continue to influence my creative approach and the way I tell stories through my camera.",
      "I like to keep things natural, easy and enjoyable. Whether it's your wedding or a portrait session, I want you to feel comfortable and enjoy the experience. No unnecessary pressure, just genuine smiles, good moments and memories made along the way. I'll be there to capture it all.",
    ],
    stats: [
      { value: "PHOTOGRAPHY", label: "& VIDEOGRAPHY" },
      { value: "WEDDINGS", label: "& PRE-WEDDINGS" },
      { value: "PORTRAITS", label: "& OTHER EVENTS" },
    ],
  },

  /**
   * Packages. Prices are strings so you can write "from €2,400" or "on request".
   */
  packages: [
  {
    name: "Portraits",
    price: "₹1,500",
    features: [
      "Individual portrait sessions",
      "Creative indoor or outdoor portraits",
      "One location, Chennai or nearby",
    ],
    featured: false,
  },
  {
    name: "Weddings",
    price: "₹4,000",
    features: [
      "Wedding photography & videography",
      "Candid moments and celebrations",
      "Capturing the story of your special day",
    ],
    featured: true,
  },
  {
    name: "Pre-Weddings",
    price: "₹2,000",
    features: [
      "Couple photoshoots",
      "Creative concepts and locations",
      "Pre-wedding photography & cinematic films",
    ],
    featured: false,
  },
],

  /** The booking process, set out plainly. */
  process: [
    ["Check the date", "Let me know your event date and what you're planning. I'll respond to you within a day to discuss things further."],
    ["Let's connect", "A coffee or a video call. No pitch — I'd love to hear your ideas and understand what you have in mind."],
    ["The day", "Once I arrive, I'll get familiar with the location, find the right spots and prepare for the moments ahead."],
    ["Your gallery", "I'll carefully edit your photographs and share the final collection with you to view, share and download."],
  ],

  faqs: [
  {
    q: "Can I customise a photoshoot based on my ideas?",
    a: "Absolutely! I'd love to hear your ideas and understand what you have in mind. We can discuss your preferences and shape the shoot around your vision.",
  },
  {
    q: "Can I choose the location for my photoshoot?",
    a: "Of course! If you have a location in mind, let me know. We can discuss the possibilities and find a setting that works well for your shoot.",
  },
  {
    q: "Do you travel to different locations?",
    a: "Yes! I'm open to travelling for shoots. Just share your preferred location, and we can discuss the arrangements.",
  },
  {
    q: "Do you cover small, intimate celebrations?",
    a: "Absolutely! Not every occasion needs to be grand. I'd be happy to capture smaller gatherings and personal celebrations too.",
  },
  {
    q: "Can I share reference photos or inspiration for my shoot?",
    a: "Definitely! Feel free to share reference photos, mood boards or any ideas you've collected. It'll help me understand the style and look you're going for.",
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
      description: p.name,
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
