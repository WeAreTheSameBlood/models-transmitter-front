import React from 'react';
import { useTranslations } from "next-intl";
import ModelCard, { ModelCardProps } from '@/components/model-card/model-card';
import './page.css';
import { Images } from '@/constants/images';

export default function GalleryPage() {
  const t = useTranslations("GalleryPage");

  const cards: ModelCardProps[] = Array.from({ length: 11 }).map((_, i) => ({
    imageSrc:
      Math.random() < 0.5
        ? Images.modelCardPlaceholder1
        : Images.modelCardPlaceholder2,
    avatarSrc: Images.emptyAvatar,
    title: t("modelName") + (i + 1),
    likes: Math.floor(Math.random() * 1000),
  }));

  return (
    <div className="gallery-grid">
      {cards.map((card, idx) => (
        <ModelCard key={idx} {...card} />
      ))}
    </div>
  );
}