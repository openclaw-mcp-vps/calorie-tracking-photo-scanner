import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnapCalorie — Snap photos to track calories automatically",
  description: "Uses image recognition to identify food and estimate calories from photos with manual correction. Perfect for fitness enthusiasts, dieters, and health coaches."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1021e9b3-4045-41d3-99a2-f4126b67faf2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
