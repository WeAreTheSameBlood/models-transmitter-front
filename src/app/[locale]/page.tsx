"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import ModelCard, { ModelCardProps } from "@/components/model-card/model-card";
import "./page.css";
import { Images } from "@/constants/images";
import { Pagination } from "@/components/pagination/pagination";

export default function GalleryPage() {
  const t = useTranslations("GalleryPage");
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [cards, setCards] = useState<ModelCardProps[]>([]);

  useEffect(() => {
    setTotalItems(150);
    setCards(
      Array.from({ length: pageSize }).map((_, i) => ({
        imageSrc: [
          Images.modelCardPlaceholder1,
          Images.modelCardPlaceholder2,
          Images.modelCardPlaceholder3,
        ][Math.floor(Math.random() * 3)],
        avatarSrc: Images.emptyAvatar,
        title: t("modelName") + (i + 1 + (currentPage - 1) * pageSize),
        likes: Math.floor(Math.random() * 1000),
      }))
    );
  }, [currentPage, t]);

  return (
    <>
      <div className="gallery-grid">
        {cards.map((card, idx) => (
          <ModelCard key={idx} {...card} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
