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
export type StatIcon = "school" | "university" | "graduation-cap" | "award";

export type SiteContent = {
  topBar: {
    address: string;
    phone: string;
    email: string;
    socials: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
  };
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  mission: {
    title: string;
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
  contact: {
    title: string;
    subtitle: string;
    mapEmbedUrl: string;
    offices: {
      title: string;
      organisation: string;
      people: string;
      address: string;
      phones: string[];
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
    phone: "+256 701 117410",
    email: "info@noahsarc.org",
    // Empty means "no account yet" -- those icons are simply not rendered.
    socials: {
      facebook: "",
      instagram: "",
      twitter: "",
    },
  },
  hero: {
    title: "With your help, we can change the life stories of many children.",
    description:
      "Please do not wait to get involved with this incredible opportunity for these children. Please continue to consider and spread to word about the opportunity to sponsor children and give them a supported future!",
    backgroundImage: "/images/home-hero.jpg",
    primaryCta: { text: "Current Projects", href: "#edu-funds" },
    secondaryCta: { text: "Our Mission", href: "#mission" },
  },
  mission: {
    title: "Mission And Vision",
    welcome: "Welcome to Noah’s Arc",
    welcomeText:
      "NOAH’S ARC is a faith-based organization operating in Kyenjojo District, Mid-Western Uganda. It focuses on implementing programs aimed at fighting and eradicating hunger, poverty, illiteracy, and exposure to preventable diseases to all unconditionally without basing on their religion, race, and political affiliation. It was founded by Kenneth and Beatrice in November 2008 after realizing that the majority of the population in Kyenjojo District lives below the poverty line and is thus exposed to hunger, poverty, illiteracy, and preventable diseases.",
    missionTitle: "Our Mission",
    missionText:
      "Our mission is to empower orphans and vulnerable children in Kyenjojo District, Mid-Western Uganda, by providing access to quality education and creating a nurturing environment for their holistic development. We strive to enhance income generation in the region by promoting sustainable agriculture practices and empowering individuals with the necessary skills and resources. Additionally, we are committed to promoting peace, human rights, and resolving conflicts at the family level, fostering harmony and social cohesion. Finally, we aim to foster spiritual growth among community members, creating an environment that nurtures faith, values, and personal well-being. Together, we envision a community where every child thrives, individuals flourish economically, conflicts are resolved peacefully, and spiritual growth is nurtured.",
    visionTitle: "Vision",
    visionText:
      "To have a community that is free from hunger, poverty, illiteracy, preventable diseases and spiritually empowered.",
    image: "/images/mission-portrait.jpg",
  },
  whatWeDo: {
    title: "What we do",
    subtitle: "Passionate About Making a Difference in communities.",
    items: [
      {
        title: "Education Support",
        description:
          "Educating kids for a better future and a better life in the communities",
        image: "/images/what-we-do-education.jpg",
      },
      {
        title: "Spiritual Growth",
        description:
          "Nourishing and helping children in their relationship with God",
        image: "/images/what-we-do-spiritual.jpg",
      },
      {
        title: "Health Enhancement",
        description:
          "Protecting children and the community from preventable diseases",
        image: "/images/what-we-do-health.jpg",
      },
    ],
  },
  gallery: {
    title: "See Our Noah’s Arc Photo Gallery!",
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
    cta: { text: "Become a partner", href: "#contact" },
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
        id: "edu-funds",
        title: "Education Funds",
        description:
          "The Noah’s Arc Foundation Education Fund provides scholarships and school supplies to youth in underserved communities.",
        image: "/images/education-fund.jpg",
        status: "Active",
        cta: { text: "Donate to this Fund", href: "/education-funds" },
      },
      {
        id: "dormitory",
        title: "Girls’ Dormitory Construction",
        description:
          "We are currently building safe, secure housing for young girls attending our programs.",
        image: "/images/girls-dormitory-construction.jpg",
        status: "In Progress",
        cta: { text: "Support Construction", href: "/girls-dormitory" },
      },
    ],
  },
  sponsorship: {
    title: "Sponsorship changes Everything",
    subtitle: "Get involved with our work by joining our sponsorship program!",
    description:
      "You can also support our work with your donation to one of our other current projects. NOAH’S ARC’s efforts are crucial in uplifting the community and improving the quality of life for the residents. By providing assistance in the areas of hunger, poverty, illiteracy, and preventable diseases, the organization plays a vital role in creating a better future for the people it serves.",
    image: "/images/sponsorship-impact.jpg",
    cta: { text: "Sponsor a child", href: "/sponsor" },
  },
  sponsor: {
    title: "Sponsor a Child",
    subtitle: "Make a Difference",
    description:
      "Noah’s ARC is currently serving 500 children and they are at different levels of education:",
    backgroundImage: "/images/sponsor-banner.jpg",
    stats: [
      { label: "Primary Level", value: 427, icon: "school" },
      { label: "Secondary", value: 60, icon: "university" },
      { label: "Tertiary & University", value: 20, icon: "graduation-cap" },
      { label: "Graduated", value: 25, icon: "award" },
    ],
    footerText:
      "25 of our Children have already graduated and are self-sustaining to their families and the community.",
    cta: { text: "Become a Sponsor", href: "/sponsor" },
  },
  contact: {
    title: "Contact Us",
    subtitle:
      "We’d love to hear from you. Reach out to our teams in Uganda or the USA.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.1678129037!2d30.640523!3d0.613345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177651a5a0f5a5a5%3A0x5a5a5a5a5a5a5a5!2sKyenjojo%2C%20Uganda!5e0!3m2!1sen!2sbr!4v1715473000000!5m2!1sen!2sbr",
    offices: [
      {
        title: "Head Office Uganda",
        organisation: "Noah’s Arc Organization",
        people: "Kenneth Kabagambe and Beatrice Kabagambe",
        address: "P.O. Box 1083 Kyenjojo, Uganda",
        phones: ["+256 701 117410", "0782880500 / 0700749178"],
        emails: [
          "info@noahsarc.org",
          "Kenapuuli@gmail.com",
          "beatricekunihira@yahoo.com",
        ],
      },
      {
        title: "Strategic Partner in USA",
        organisation: "ThinSpace Africa",
        people: "",
        address: "Office and mail: 50 Buckskin Road, Bell Canyon, CA 91307",
        phones: ["8186875556"],
        emails: ["info@thinspaceafrica.org"],
      },
    ],
  },
  footer: {
    logo: "/images/logo.png",
    description:
      "A 501(c)(3) non-profit organization helping children choose peace through the power of expression.",
    copy: "© 2026 Noah’s Arc Foundation. All Rights Reserved. | Development by TCA Digital",
  },
};
