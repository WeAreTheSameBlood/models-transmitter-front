import React from "react";
import {
  ItemsNetworkingService,
  Item as BackendItem,
} from "@/services/items-networking-service/items-networking-service";
import GalleryPageClient from "./page-client";

interface GalleryPageDataProps {
  pageSize: number;
  currentPage: number;
  locale: string;
}

export default async function GalleryPageData({
  pageSize,
  currentPage,
  locale,
}: GalleryPageDataProps) {
  const allItems: BackendItem[] = await ItemsNetworkingService.getAllItems();

  const totalItems = allItems.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageSlice = allItems.slice(startIndex, endIndex);

  return (
    <GalleryPageClient
      items={pageSlice}
      totalItems={totalItems}
      pageSize={pageSize}
      currentPage={currentPage}
      locale={locale}
    />
  );
}
