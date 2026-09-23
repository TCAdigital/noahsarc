/**
 * The shape of every piece of editable copy on the site, plus the content the
 * site ships with. The CMS stores an override of this object in Supabase; see
 * `lib/content.ts` for how the two are merged.
 */

export type CtaLink = {
  text: string;
  href: string;
};

/** Fixed palette for partner cards -- the CMS may only pick one of these. */
export type PartnerTheme = "dark" | "amber" | "blue" | "green";

/** Fixed icon set for the sponsorship counters. */
export type StatIcon =
  | "users"
  | "school"
  | "university"
  | "graduation-cap"
  | "award"
  | "heart-handshake";

export type SiteContent = {
  topBar: {
    address: string;
    phone: string;
    email: string;
    socials: {
      facebook: string;
      instagram: string;
    };
  };
  hero: {
    title: string;
    description: string;
    closing: string;
    backgroundImage: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  mission: {
    title: string;
    teaser: string;
    welcome: string;
    welcomeText: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    image: string;
  };
  whatWeDo: {
    title: string;
    subtitle: string;
    impact: string;
    intro: string;
    items: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  gallery: {
    title: string;
    images: string[];
  };
  partners: {
    title: string;
    subtitle: string;
    cta: CtaLink;
    list: {
      name: string;
      subName?: string;
      theme: PartnerTheme;
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      image: string;
      status: string;
      cta: CtaLink;
    }[];
  };
  sponsorship: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    cta: CtaLink;
  };
  sponsor: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    stats: {
      label: string;
      value: number;
      icon: StatIcon;
    }[];
    footerText: string;
    cta: CtaLink;
  };
  newsletter: {
    title: string;
    description: string;
    buttonText: string;
    consent: string;
  };
  contact: {
    title: string;
    subtitle: string;
    locationLine: string;
    mapUrl: string;
    offices: {
      title: string;
      organisation: string;
      people: string;
      address: string;
      phones: string[];
      whatsapp: string;
      emails: string[];
    }[];
  };
  footer: {
    logo: string;
    description: string;
    copy: string;
  };
};

export const defaultSiteContent: SiteContent = {
  topBar: {
    address: "Kyenjojo, Uganda",
    phone: "+256 701 117 410",
    email: "kenapuuli@gmail.com",
    // Empty means "no account linked yet" -- those icons are not rendered.
    socials: {
      facebook: "",
      instagram: "",
    },
  },
  hero: {
    title:
      "Every Child Deserves Hope. Every Community Deserves the Opportunity to Thrive.",
    description:
      "Since 2009, Noah’s Arc Organization has been transforming lives in Kyenjojo, Uganda. Born from founders Kenneth and Beatrice Kabagambe’s own challenging life experiences and their desire to create a different future for others, Noah’s Arc walks alongside vulnerable children, families, and communities — building hope, creating opportunity, strengthening self-reliance, and nurturing spiritual growth.",
    closing:
      "Partner with us on this journey of transformation, helping children grow, families flourish, and communities thrive.",
    backgroundImage: "/images/home-hero.jpg",
    primaryCta: { text: "Current Projects", href: "#edu-fund" },
    secondaryCta: { text: "Our Mission", href: "#mission" },
  },
  mission: {
    title: "Mission And Vision",
    teaser:
      "Our commitment to empowering children, strengthening families, and building communities rooted in dignity, hope, and self-reliance.",
    welcome: "Welcome to Noah’s Arc",
    welcomeText:
      "Noah’s Arc Organization is a faith-based organization operating in Kyenjojo District, Mid-Western Uganda. It focuses on implementing programs aimed at fighting and eradicating hunger, poverty, illiteracy, and exposure to preventable diseases to all unconditionally without basing on their religion, race, and political affiliation. It was founded by Kenneth and Beatrice in November 2008 after realizing that the majority of the population in Kyenjojo District lives below the poverty line and is thus exposed to hunger, poverty, illiteracy, and preventable diseases.",
    missionTitle: "Our Mission",
    missionText:
      "To transform communities through quality education and holistic care, sustainable livelihoods and agriculture, improved health and access to clean water, strong and peaceful families, and spiritual growth — helping individuals and communities become self-reliant and thrive.",
    visionTitle: "Vision",
    visionText:
      "To have a community that is free from hunger, poverty, illiteracy, preventable diseases and spiritually empowered.",
    image: "/images/mission-portrait.jpg",
  },
  whatWeDo: {
    title: "What We Do",
    subtitle: "Passionate about making a difference in communities.",
    impact:
      "Fighting poverty, hunger, and illiteracy through education, sustainable livelihoods, health initiatives, and community development.",
    intro:
      "Our work is rooted in long-term, community-based solutions that help children, families, and communities build stronger and more self-reliant futures. Through education, health initiatives, sustainable livelihoods, family support, and spiritual empowerment, we work alongside the people of Kyenjojo District and surrounding areas to create lasting change.",
    items: [
      {
        title: "Education Support",
        description:
          "Educating children for a better future and a better life in their communities.",
        image: "/images/what-we-do-education.jpg",
      },
      {
        title: "Spiritual Empowerment",
        description:
          "Nurturing faith, character, and hope through church leader training, youth programs, and family support.",
        image: "/images/what-we-do-spiritual.jpg",
      },
      {
        title: "Health Enhancement",
        description:
          "Protecting children and the community from preventable diseases.",
        image: "/images/what-we-do-health.jpg",
      },
    ],
  },
  gallery: {
    title: "See Our Noah’s Arc Photo Gallery",
    // The first four are the ones shown before a visitor expands the grid.
    images: [
      "/images/home-gallery-01.jpg",
      "/images/home-gallery-02.jpg",
      "/images/home-gallery-03.jpg",
      "/images/home-gallery-04.jpg",
      "/images/gallery/gallery-01.jpg",
      "/images/gallery/gallery-02.jpg",
      "/images/gallery/gallery-03.jpg",
      "/images/gallery/gallery-04.jpg",
      "/images/gallery/gallery-05.jpg",
      "/images/gallery/gallery-06.jpg",
      "/images/gallery/gallery-07.jpg",
      "/images/gallery/gallery-08.jpg",
    ],
  },
  partners: {
    title: "Our Partners",
    subtitle:
      "Working together with global organizations to create lasting impact.",
    cta: { text: "Become a partner", href: "/contact" },
    list: [
      { name: "Emmaus Church", subName: "", theme: "dark" },
      { name: "ThinSpace Africa", subName: "", theme: "amber" },
      { name: "Agoura", subName: "Bible Fellowship", theme: "blue" },
      { name: "Rockwell", subName: "Foundation", theme: "green" },
    ],
  },
  projects: {
    title: "Our Projects",
    subtitle:
      "Empowering the community through sustainable development and educational support.",
    items: [
      {
        id: "edu-fund",
        title: "Education Fund",
        description:
          "The Noah’s Arc Education Fund helps students access the support they need to learn, grow, and continue their education with dignity.",
        image: "/images/education-fund.jpg",
        status: "Active",
        cta: { text: "Support the Fund", href: "/education-fund" },
      },
      {
        id: "dormitory",
        title: "Girls’ Dormitory Construction",
        description:
          "We are building a safe, secure, and nurturing home for 250 girls. The dormitory is now in Phase 3 of construction.",
        image: "/images/girls-dormitory-construction.jpg",
        status: "Phase 3",
        cta: { text: "Help Build the Home", href: "/girls-dormitory" },
      },
    ],
  },
  sponsorship: {
    title: "Sponsorship Changes Everything",
    subtitle:
      "Your sponsorship helps students access education, health support, daily care, and opportunities that can change the course of their future.",
    description:
      "We invite you to be part of this opportunity to give children hope for a supported future. By sponsoring a child, sharing our work with others, or supporting Noah’s Arc in any way you can, you help us continue walking alongside children and families as they build a better future.",
    image: "/images/sponsorship-impact.jpg",
    cta: { text: "Sponsor a child", href: "/sponsor" },
  },
  sponsor: {
    title: "Sponsor a Child",
    subtitle: "Make a Difference",
    description:
      "Noah’s Arc currently supports 531 students at different levels of education:",
    backgroundImage: "/images/sponsor-banner.jpg",
    stats: [
      { label: "Currently Serving", value: 531, icon: "users" },
      { label: "Primary Level", value: 436, icon: "school" },
      { label: "Secondary Level", value: 77, icon: "university" },
      { label: "Tertiary & University", value: 18, icon: "graduation-cap" },
      { label: "Graduated & Self-Sustaining", value: 62, icon: "award" },
      { label: "Returned to Serve", value: 9, icon: "heart-handshake" },
    ],
    footerText:
      "62 of our students have graduated and are now self-sustaining, supporting their families and their community. Nine of them have returned to work with Noah’s Arc and support the next generation.",
    cta: { text: "Become a Sponsor", href: "/sponsor" },
  },
  newsletter: {
    title: "Stay Connected",
    description:
      "Receive stories, project updates, and news from Noah’s Arc.",
    buttonText: "Sign Up for Updates",
    consent:
      "By subscribing, you agree to receive news, project updates, stories, and occasional fundraising communications from Noah’s Arc Organization. You may unsubscribe at any time. Please see our Privacy Policy for information about how we use and protect your personal information.",
  },
  contact: {
    title: "Contact Us",
    subtitle: "We’d love to hear from you.",
    locationLine: "Located in Kyenjojo District, Mid-Western Uganda.",
    mapUrl: "https://www.google.com/maps/place/Kyenjojo,+Uganda",
    offices: [
      {
        title: "Head Office Uganda",
        organisation: "Noah’s Arc Organization",
        people: "Kenneth and Beatrice Kabagambe",
        address: "P.O. Box 1083 Kyenjojo, Uganda",
        phones: ["+256 701 117 410"],
        whatsapp: "+256 701 117 410",
        emails: ["kenapuuli@gmail.com"],
      },
      {
        title: "Strategic Partner in USA",
        organisation: "ThinSpace Africa",
        people: "",
        address: "50 Buckskin Road, Bell Canyon, CA 91307",
        phones: ["+1 626 400 7075"],
        whatsapp: "",
        emails: ["info@thinspaceafrica.org"],
      },
    ],
  },
  footer: {
    logo: "/images/logo.png",
    description:
      "A faith-based organization in Kyenjojo District, Mid-Western Uganda, walking alongside vulnerable children, families, and communities.",
    copy: "© 2026 Noah’s Arc Organization. All Rights Reserved. | Development by TCA Digital",
  },
};
