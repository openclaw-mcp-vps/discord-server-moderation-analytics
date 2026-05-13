import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Server Moderation Analytics",
  description: "Track Discord server health with moderation and engagement metrics"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="32049169-e823-4158-a34a-b517a51d8c25"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
