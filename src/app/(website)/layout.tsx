import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yingke Africa",
  description: "Global legal counsel with local instinct across Africa",
  authors: [
    {
      url: "",
      name: "Mark Chege",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${display.variable} ${body.variable}`}>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
