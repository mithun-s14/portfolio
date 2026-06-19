import type { Metadata } from "next";
import { Inter, Big_Shoulders } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Mithun Sivapathasundram",
  description:
    "Creative Builder · Software Engineer · Computer Science Student. Code, systems & craft.",
  icons: {
    icon: "/portfolio/me.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bigShoulders.variable} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
