import type { Metadata } from "next";
import "./globals.css";

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
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
