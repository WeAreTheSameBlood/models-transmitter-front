"use client";
import { BackButton } from "@/components/buttons/back-button/back-button";
import { DownloadButton } from "@/components/buttons/download-button/download-button";
import { ItemDescriptionBlock } from "@/components/item/item-description-block/item-description-block";
import { ItemMediaPanel } from "@/components/item/item-media-panel-props/item-media-panel-props";
import "./page.css";
import { ModelsEntityManager, StoreItemDetailedInfo } from "@/services";
import { Images } from "@/constants";
import { notFound } from "next/navigation";

interface SingleStoreItemPageClientProps {
  item: StoreItemDetailedInfo | null;
}

export default function SingleStoreItemPageClient(
  { item }: SingleStoreItemPageClientProps
) {
  if (!item) notFound();

  const mediaUrls: string[] = [Images.modelCardPlaceholder1];
  const modelUrl = item.model_file_download_url;

  const handleDownload = () => {
    window.location.href = item.model_file_download_url;
  };

  return (
    <div className="item-page">

      <div className="top-block">
        <div className="title-block">
          <BackButton />
          <h2>{item.title}</h2>
        </div>

        <DownloadButton onClick={handleDownload} />
      </div>

      <ItemMediaPanel
        modelUrl={modelUrl}
        mediaUrls={mediaUrls}
      />

      <ItemDescriptionBlock />
    </div>
  );
}