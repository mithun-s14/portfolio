import type { Metadata } from "next";
import { Big_Shoulders } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Mithun Sivapathasundram",
  description:
    "Creative Builder · Software Engineer · Computer Science Graduate. Code, systems & craft.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bigShoulders.variable} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
