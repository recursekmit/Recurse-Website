/**
 * Approved listings appear on the public opportunity board.
 *
 * Keep dates in YYYY-MM-DD format and use null for a rolling deadline.
 * Only add opportunities after Recurse has checked the source and apply URL.
 * The sample listing exported below documents every supported field.
 */
export const approvedOpportunities = [];

export const sampleOpportunity = {
  id: "sample-software-engineering-intern",
  title: "Software Engineering Intern",
  company: "Example listing",
  companyInitials: "EX",
  type: "Internship",
  mode: "Hybrid",
  location: "Hyderabad",
  graduationYears: [2027, 2028, 2029],
  compensation: "Stipend disclosed by recruiter",
  deadline: "2026-09-15",
  postedAt: "2026-08-05",
  verifiedAt: "2026-08-05",
  featured: true,
  tags: ["JavaScript", "React", "Problem Solving"],
  summary:
    "A concise explanation of the role, the work students will do, and the skills that matter most.",
  applyUrl: "https://example.com/apply",
  source: "Verified by Recurse",
};
