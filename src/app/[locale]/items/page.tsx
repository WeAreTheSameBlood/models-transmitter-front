import React from "react";
import GalleryPageData from "./page-data";

interface GalleryPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function GalleryPage({ params, searchParams }: GalleryPageProps) {
  const { page } = await searchParams;
  const currentPage = page ? parseInt(page, 10) : 1;
  const pageSize = 12;

  return <GalleryPageData currentPage={currentPage} pageSize={pageSize} />;
}

// interface LocalePageProps {
//   params: { locale: string };
//   searchParams?: { page?: string };
// }

// export default function LocalePage({ params, searchParams }: LocalePageProps) {
//   const { locale } = params;

//   const pageParam = searchParams?.page;
//   const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
//   const pageSize = 12;

//   console.log("locale --> " + locale);
//   console.log("page   --> " + currentPage);

//   return <GalleryPageData currentPage={currentPage} pageSize={pageSize} />;
// }