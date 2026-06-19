import "./globals.css";

export const metadata = {
  title: "Recurse — KMIT's Technical Club",
  description:
    "Recurse is KMIT's technical club for builders, problem-solvers, and students who want to go beyond the classroom.",
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport = {
  themeColor: "#080a09",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
