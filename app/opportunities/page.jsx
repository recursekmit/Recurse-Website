import OpportunityBoard from "@/components/OpportunityBoard";
import { approvedOpportunities } from "@/components/opportunityListings";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Student Internships & Job Opportunities",
  description:
    "Explore verified internships, fresher jobs, fellowships, research roles, and career opportunities curated for KMIT students by Recurse, KMIT's technical club.",
  keywords: [
    "KMIT internships",
    "KMIT job opportunities",
    "KMIT student jobs",
    "KMIT placements",
    "internships for KMIT students",
    "Recurse KMIT opportunities",
    "Keshav Memorial Institute of Technology internships",
    "Hyderabad student internships",
  ],
  alternates: {
    canonical: "/opportunities",
  },
  openGraph: {
    type: "website",
    url: "/opportunities",
    title: "Opportunity Board — Recurse KMIT",
    description:
      "Verified internships, fresher roles, fellowships, and career opportunities for KMIT students.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Recurse KMIT student opportunity board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opportunity Board — Recurse KMIT",
    description:
      "Verified internships, fresher roles, fellowships, and career opportunities for KMIT students.",
    images: ["/opengraph-image"],
  },
};

function jobPostingSchema(opportunity) {
  const employmentType = {
    Internship: "INTERN",
    "Full-time": "FULL_TIME",
    "Part-time": "PART_TIME",
    Freelance: "CONTRACTOR",
  }[opportunity.type];

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: opportunity.title,
    description: opportunity.summary,
    datePosted: opportunity.postedAt,
    ...(opportunity.deadline ? { validThrough: opportunity.deadline } : {}),
    ...(employmentType ? { employmentType } : {}),
    hiringOrganization: {
      "@type": "Organization",
      name: opportunity.company,
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    jobLocationType:
      opportunity.mode === "Remote" ? "TELECOMMUTE" : undefined,
    url: opportunity.applyUrl,
  };
}

export default function OpportunitiesPage() {
  const schemas = approvedOpportunities.map(jobPostingSchema);

  return (
    <>
      {schemas.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
      <OpportunityBoard
        initialListings={approvedOpportunities}
        reviewEmail={siteConfig.email}
      />
    </>
  );
}
