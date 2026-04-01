import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumaskin.example"),
  title: {
    default: "Luma Skin | Premium Minimal Skincare",
    template: "%s | Luma Skin"
  },
  description: "Calm, science-backed skincare with premium minimalist routines.",
  openGraph: {
    title: "Luma Skin",
    description: "Calm, science-backed skincare with premium minimalist routines.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="min-h-screen pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
