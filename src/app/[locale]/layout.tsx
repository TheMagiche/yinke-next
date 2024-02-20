import React from "react";
import initTranslations from "@/src/app/i18n";
import TranslationProvider from "@/src/app/[locale]/TranslationProvider";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import TopRightNav from "@/src/components/TopRightNav";
import TopLeftNav from "@/src/components/TopLeftNav";
import FullPageNav from "@/src/components/FullPageNav";
import Footer from "@/src/components/Footer";

const i18nNamespaces = ["translation"];

export default async function Layout({ children, params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <TopLeftNav />
      <TopRightNav />
      <FullPageNav />
      {children}
      <LanguageSwitcher />
      <Footer />
    </TranslationProvider>
  );
}
