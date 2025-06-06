import React from "react";
import GalleryPageData from "./page-data";

interface GalleryPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function GalleryPage({
  params,
  searchParams,
}: GalleryPageProps) {
  const pageSize = 12;
  const sp = await searchParams;
  const pageParam = sp.page;
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

  return (
    <GalleryPageData
      currentPage={currentPage}
      pageSize={pageSize}
    />
  );
}
