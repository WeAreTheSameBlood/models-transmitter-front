import React from "react";
import { ItemsNetworkingService, StoreItemGeneralInfo } from "@services";
import GalleryPageClient from "./page-client";

interface GalleryPageDataProps {
  currentPage: number;
  pageSize: number;
}

export default async function GalleryPageData(propeties: GalleryPageDataProps) {
  const allItems: StoreItemGeneralInfo[] = (await ItemsNetworkingService.getAllItems()).reverse();

  const totalItems =  allItems.length;
  const startIndex =  (propeties.currentPage - 1) * propeties.pageSize;
  const endIndex =    startIndex + propeties.pageSize;
  const pageSlice =   allItems.slice(startIndex, endIndex);

  return (
    <GalleryPageClient
      items=      {pageSlice}
      totalItems= {totalItems}
      pageSize=   {propeties.pageSize}
      currentPage={propeties.currentPage}
    />
  );
}
