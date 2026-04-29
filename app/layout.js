import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LandscapeBackground from "@/components/LandscapeBackground";
import CursorFollower from "@/components/CursorFollower";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Pushable AI — AI Assistant That Automates Your Routine Workflows",
  description:
    "Pushable AI quietly manages everyday repetitive tasks in the background, reducing manual effort so your team can focus on what matters.",
  keywords: "AI assistant, workflow automation, AI agents, business automation, Pushable AI",
  openGraph: {
    title: "Pushable AI — Automate Your Workflows",
    description: "AI Assistants that work quietly, deliver consistently.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="text-slate-900 overflow-x-hidden">
        <LoadingScreen />
        <LandscapeBackground />
        <CursorFollower />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
