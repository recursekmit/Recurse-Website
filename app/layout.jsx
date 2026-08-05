import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Recurse KMIT — The Technical Club of KMIT",
    template: "%s | Recurse KMIT",
  },
  description: siteConfig.description,
  applicationName: "Recurse KMIT",
  authors: [{ name: "Recurse KMIT", url: siteConfig.url }],
  creator: "Recurse KMIT",
  publisher: "Recurse KMIT",
  category: "technology",
  keywords: [
    "Recurse",
    "Recurse KMIT",
    "Recurse Club KMIT",
    "Recurse Technical Club",
    "KMIT Technical Club",
    "KMIT student club",
    "Keshav Memorial Institute of Technology",
    "KMIT Hyderabad",
    "Codenovate KMIT",
    "KMIT hackathon",
    "KMIT coding club",
    "technical clubs in Hyderabad",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Recurse KMIT",
    title: "Recurse KMIT — The Technical Club of KMIT",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Recurse — The Technical Club of KMIT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recurse KMIT — The Technical Club of KMIT",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport = {
  themeColor: "#080a09",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "Recurse — The Technical Club of KMIT",
    alternateName: ["Recurse KMIT", "Recurse Club KMIT"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [siteConfig.instagram, siteConfig.linkedin],
    memberOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.collegeName,
      alternateName: "KMIT",
      url: siteConfig.collegeUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    knowsAbout: [
      "Computer Science",
      "Programming",
      "Artificial Intelligence",
      "Web Development",
      "Competitive Programming",
      "Hackathons",
      "Student Career Opportunities",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: "Recurse KMIT",
    alternateName: "Recurse — The Technical Club of KMIT",
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteConfig.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/opportunities?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}
