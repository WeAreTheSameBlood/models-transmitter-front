import React from "react";
import { notFound } from "next/navigation";
import "./page.css";
import { ItemMediaPanel } from "@/components/item/item-media-panel-props/item-media-panel-props";
import { ItemDescriptionBlock } from "@/components/item/item-description-block/item-description-block";
import { Images } from "@/constants/images";
import { DownloadButton } from "@/components/buttons/download-button/download-button";
import { BackButton } from "@/components/buttons/back-button/back-button";

interface ItemPageProps {
  params: { locale: string; id: string };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { locale, id } = await params;
  const data = {
    mediaUrls: [
      Images.modelCardPlaceholder1,
      Images.modelCardPlaceholder2,
      Images.modelCardPlaceholder3,
      Images.modelCardPlaceholder1,
      Images.modelCardPlaceholder2,
      Images.modelCardPlaceholder3,
    ],
    title: "Bombardillo Crocodillo 3d Modelillo",
    owner: "andrii666",
    date: new Date().toISOString(),
    summary: "This is a mock summary of the model for development purposes",
  };

  const handleDownload = () => {
    // window.location.href = `${process.env.BACKEND_URL}/items/${id}/download`;
  };

  const { mediaUrls, title, owner, date, summary } = data;

  return (
    <div className="item-page">

      <div className="top-block">

        <div className="title-block">
          <BackButton />
          <h2> {title} </h2>
        </div>
        
        <DownloadButton onClick={() => handleDownload()} />
      </div>

      <ItemMediaPanel mediaUrls={mediaUrls} />

      <ItemDescriptionBlock
        owner={owner}
        date={new Date(date).toLocaleDateString(locale)}
        summary={summary}
      />
    </div>
  );
}
