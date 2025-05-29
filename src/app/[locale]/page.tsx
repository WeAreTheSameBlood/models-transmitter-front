import { redirect } from "next/navigation";

interface LocalePageProps {
  params: { locale: string };
}

export default async function LocaleIndexPage({ params }: LocalePageProps) {
  const { locale } = await params;
  redirect(`/${locale}/items`);
}
