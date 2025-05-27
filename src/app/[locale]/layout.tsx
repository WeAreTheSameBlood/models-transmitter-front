import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/header/header";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { default: messages } = await import(`../../../messages/${locale}.json`);
  if (!hasLocale(routing.locales, locale))  notFound();
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header isLoggedIn={false} />
          {children}
          {/* <LocalSwitcher /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}