import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./item-card.css";
import { Images } from "@/constants/images";
import { ItemCardLikesCounter } from "../item-card-likes-counter/item-card-likes-counter";

export interface ItemCardProps {
  id: string;
  imageSrc: string;
  avatarSrc: string;
  title: string;
  likes: number;
}

export default function ItemCard({
  id,
  imageSrc,
  avatarSrc,
  title,
  likes,
}: ItemCardProps) {
  const router = useRouter();
  const indicateImgSize = 50;
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

      {/* // MARK: - Owner */}
      <Image
        src={avatarSrc}
        alt="owner"
        width={indicateImgSize}
        height={indicateImgSize}
        className="card-avatar"
      />

      {/* // MARK: - Likes */}
      <ItemCardLikesCounter
        className="card-like"
        count={likes}
      />

      {/* // MARK: - Title */}
      <div className="card-title">{title}</div>
    </div>
  );
}
