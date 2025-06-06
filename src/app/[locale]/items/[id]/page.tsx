import React from "react";
import { ItemsNetworkingService, StoreItemDetailedInfo } from "@/services";
import SingleStoreItemPageClient from "./page-client";

export default async function SingleStoreItemPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const item: StoreItemDetailedInfo = await ItemsNetworkingService.getItemById(id);

  return <SingleStoreItemPageClient item={item}/>;
}
