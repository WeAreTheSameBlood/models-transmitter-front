"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import ItemCard, { ItemCardProps } from "@/components/item/item-card/item-card";
import { Dropdown, DropdownOption } from "@/components/dropdown/dropdown";
import { Pagination } from "@/components/pagination/pagination";
import { Images } from "@/constants/images";
import "./page.css"

interface GalleryPageClientProps {
  items: {
    id: string;
    title: string;
  }[];
  totalItems: number;
  pageSize: number;
  currentPage: number;
}

export default function GalleryPageClient({
  items,
  totalItems,
  pageSize,
  currentPage,
}: GalleryPageClientProps) {
  const t = useTranslations("GalleryPage");

  const sortOptions: DropdownOption[] = [
    { label: t("sort.newest"), value: "newest" },
    { label: t("sort.popular"), value: "popular" },
    { label: t("sort.oldest"), value: "oldest" },
  ];

  const categoryOptions: DropdownOption[] = [
    { label: t("category.all"), value: "all" },
    { label: t("category.art"), value: "art" },
    { label: t("category.household"), value: "household" },
    { label: t("category.tools"), value: "tools" },
    { label: t("category.other"), value: "other" },
  ];
  
  const authorOptions: DropdownOption[] = [
    { label: t("author.all"), value: "all" },
    { label: t("author.withOwner"), value: "owner" },
    { label: t("author.draws"), value: "draws" },
  ];

  const [sort, setSort] = useState(sortOptions[0].value);
  const [category, setCategory] = useState(categoryOptions[0].value);
  const [author, setAuthor] = useState(authorOptions[0].value);

  const onPageChange = (page: number) => {
    const search = new URLSearchParams(window.location.search);
    search.set("page", page.toString());
    window.location.search = search.toString();
  };

  const cards: ItemCardProps[] = items.map((item) => ({
    id: item.id,
    imageSrc: Images.modelCardPlaceholder3,
    title: item.title,
  }));

  return (
    <>
      {/* MARK: - Dropdown */}
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

      {/* MARK: - Items */}
      <div className="main-grid">
        {
          cards.map((card) => (
            <ItemCard key={card.id} {...card} />
          ))
        }
      </div>

      {/* MARK: - Pagination */}
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </>
  );
}
