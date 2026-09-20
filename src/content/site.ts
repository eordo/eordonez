// src/content/site.ts
export type SiteNavItem = { 
    label: string;
    href: string 
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;            
  locale: string;
  author: {
    name: string;
    email?: string;
    url?: string;
    socials?: {
      x?: string;
      github?: string;
      linkedin?: string;
    };
  };
  nav: SiteNavItem[];
  seo: {
    ogImage?: string;
    robots: string;
    themeColor: string;
  };
};

export const site: SiteConfig = {
  name: "Eric Ordoñez",
  tagline: "Ahoy-hoy!",
  description:
    "I am a data scientist, researcher, and occasional pub trivia winner.",
  url: import.meta.env.SITE_URL ?? "https://example.com",
  locale: "en",
  author: {
    name: "Eric Ordoñez",
    url: import.meta.env.SITE_URL ?? "https://example.com",
    socials: {
      github: "https://github.com/eordo",
      linkedin: "https://www.linkedin.com/in/eordo/"
    }
  },
  nav: [
    { label: "Home", href: "/" },
  ],
  seo: {
    ogImage: "/images/og/og-default.jpg",
    robots: "index,follow",
    themeColor: "#fbfbf9"
  }
};
