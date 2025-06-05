import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./item-card.css";

export interface ItemCardProps {
  id: string;
  imageSrc: string;
  title: string;
}

export default function ItemCard({ id, imageSrc, title }: ItemCardProps) {
  const router = useRouter();
  
  return (
    <div
      className="model-card"
      onClick={() => router.push(`items/${id}`)}
      style={{ cursor: "pointer" }}
    >
      {/* // MARK: - Image */}
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={250}
        className="card-image"
      />

      {/* // MARK: - Title */}
      <div className="card-title">{title}</div>
    </div>
  );
}
