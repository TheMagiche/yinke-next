import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import i18nConfig from "@/src/app/i18nConfig";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yingke",
  description: "Finest law firm in Africa",
  authors: [
    {
      url: "",
      name: "Mark Chege",
    },
  ],
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
