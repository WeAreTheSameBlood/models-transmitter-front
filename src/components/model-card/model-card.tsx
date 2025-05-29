import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./model-card.css";
import { Images } from "@/constants/images";

export interface ModelCardProps {
  id: string;
  imageSrc: string;
  avatarSrc: string;
  title: string;
  likes: number;
}

export default function ModelCard({
  id,
  imageSrc,
  avatarSrc,
  title,
  likes,
}: ModelCardProps) {
  const router = useRouter();
  const indicateImgSize = 50;
  return (
    <div
      className="model-card"
      onClick={() => router.push(`items/${id}`)}
      style={{ cursor: 'pointer' }}
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
      <Image
        src={Images.heart}
        alt="likes"
        width={indicateImgSize}
        height={indicateImgSize}
        className="card-like"
      />

      {/* // MARK: - Title */}
      <div className="card-title">{title}</div>
    </div>
  );
}
