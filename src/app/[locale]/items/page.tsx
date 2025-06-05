"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import GalleryPageData from "./page-data";

export default function GalleryPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = useTranslations("GalleryPage");

  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

  const pageSize = 12;

  return (
    <>
      <GalleryPageData
        pageSize={pageSize}
        currentPage={currentPage}
        locale={params.locale}
      />
    </>
  );
}
