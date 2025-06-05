import React from "react";
import { ItemsNetworkingService, ModelsEntityManager, StoreItemDetailedInfo } from "@/services";
import SingleStoreItemPageClient from "./page-client";

interface ItemPageProps {
  params: { locale: string; id: string };
}

export default async function SingleStoreItemPage({ params }: ItemPageProps) {
  const { locale, id } = await params;
  const item: StoreItemDetailedInfo = await ItemsNetworkingService.getItemById(id);

  return (
    <SingleStoreItemPageClient
      item= {item}
    />
  )
}
