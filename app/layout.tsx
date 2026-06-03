import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
  title: "House Cleaning Services in Boston | ShineClean",
  description:
    "Professional house cleaning, deep cleaning, apartment cleaning, move-out cleaning, and recurring cleaning services across Greater Boston.",
};
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#faf8fb]" style={{ fontFamily: "var(--font-dm-sans)" }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
