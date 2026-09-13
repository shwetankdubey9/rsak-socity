import { Metadata } from "next";

export const siteConfig = {
  name: "Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society)",
  shortName: "RAKHI-Society",
  description: "Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society) provides GIS mapping, 3D GIS mapping, remote sensing, hyperspectral technology, watershed management, soil health testing, nutrient mapping and related technical and social work services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rsak-society-jhansi.vercel.app",
  ogImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
  director: "Rakhi Devi",
  expert: "Anil Kumar Shukla",
  address: "K.K. Puri Colony, Awas Vikas, Shivpuri Road, Jhansi (U.P.) 284003",
  registeredOffice: "",
  phone: "91-9415504335",
  phoneAlt: "",
  email: "societyrakhi@gmail.com",
  emailAlt: "shuklaiirs@gmail.com",
  googleMapsUrl: "https://maps.app.goo.gl/qwfgucyRA9jyWygw7",
  social: {
    x: "https://x.com/RAKHI_Society",
    facebook: "https://www.facebook.com/profile.php?id=61593969150446",
  },
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    keywords: [
      "GIS Mapping Jhansi",
      "Remote Sensing Agriculture",
      "Majith DEM Elevation Model",
      "Bundelkhand Agriculture NGO",
      "Soil Health Card Jhansi",
      "Watershed Management",
      "IWMP DPR GIS",
      "RAKHI-Society",
      "RS & Hyperspectral Technology",
      "Satellite Classification",
    ],
    authors: [
      { name: "Rakhi Devi", url: siteConfig.url },
      { name: "Anil Kumar Shukla", url: siteConfig.url },
    ],
    creator: "Remote Sensing Agriculture Knowledge Help Integral Society",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@RAKHI_Society",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: siteConfig.ogImage,
    founder: {
      "@type": "Person",
      name: siteConfig.director,
      jobTitle: "Director",
    },
    employee: {
      "@type": "Person",
      name: siteConfig.expert,
      jobTitle: "Remote Sensing & GIS Expert",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "K.K. Puri Colony, Awas Vikas, Shivpuri Road",
      addressLocality: "Jhansi",
      addressRegion: "Uttar Pradesh",
      postalCode: "284003",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      email: siteConfig.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      siteConfig.googleMapsUrl,
      siteConfig.social.x,
      siteConfig.social.facebook,
    ],
  };
}
