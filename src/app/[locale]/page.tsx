"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import ModelCard, { ModelCardProps } from "@/components/model-card/model-card";
import "./page.css";
import { Images } from "@/constants/images";
import { Pagination } from "@/components/pagination/pagination";
import { Dropdown, DropdownOption } from "@/components/dropdown/dropdown";

export default function GalleryPage() {
  const t = useTranslations("GalleryPage");
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [cards, setCards] = useState<ModelCardProps[]>([]);

  const sortOptions: DropdownOption[] = [
    { label: 'Newest', value: 'newest' },
    { label: 'Popular', value: 'popular' },
    { label: 'Oldest', value: 'oldest' },
  ];
  
  const categoryOptions: DropdownOption[] = [
    { label: 'All Categories', value: 'all' },
    { label: 'Art', value: 'art' },
    { label: 'Household', value: 'household' },
    { label: 'Tools', value: 'tools' },
    { label: 'Other', value: 'other' },
  ];
  
  const authorOptions: DropdownOption[] = [
    { label: 'All Authors', value: 'all' },
    { label: 'With owner', value: 'owner' },
    { label: 'Draws', value: 'draws' }
  ]

  const [sort, setSort] = useState(sortOptions[0].value);
  const [category, setCategory] = useState(categoryOptions[0].value);
  const [author, setAuthor] = useState(authorOptions[0].value);

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
      <div className="main-grid">
        <Dropdown options={sortOptions} selected={sort} onChange={setSort} />
        <Dropdown
          options={categoryOptions}
          selected={category}
          onChange={setCategory}
        />
        <Dropdown
          options={authorOptions}
          selected={author}
          onChange={setAuthor}
        />
      </div>

      <div className="main-grid">
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
