import TeamSite from "@/components/TeamSite";

export const metadata = {
  title: "Club Heads & Core Team",
  description:
    "Meet the club heads and core members behind Recurse, the technical club of Keshav Memorial Institute of Technology (KMIT), Hyderabad.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    type: "website",
    url: "/team",
    title: "Recurse KMIT Club Heads & Core Team",
    description:
      "Meet the students building Recurse, KMIT's technical club and student technology community.",
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
    images: ["/opengraph-image"],
  },
};

export default function TeamPage() {
  return <TeamSite />;
}
