import React from "react";
import "../../globals.css";
import initTranslations from "@/src/app/i18n";
import TranslationProvider from "@/src/app/(website)/[locale]/TranslationProvider";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import FullPageNav from "@/src/components/FullPageNav";
import Footer from "@/src/components/Footer";
// import PageTransition from "@/src/components/PageTransition";

const i18nNamespaces = ["translation"];

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >

      {/* <TopRightNav /> */}
      <FullPageNav />
      {/* <PageTransition> */}
        {children}
      {/* </PageTransition> */}
      <LanguageSwitcher />
      <Footer />
    </TranslationProvider>
  );
}
