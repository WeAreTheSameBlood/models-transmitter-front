import React from "react";
import Image from "next/image";
import "./model-card.css";
import { Images } from "@/constants/images";

export interface ModelCardProps {
  imageSrc: string;
  avatarSrc: string;
  title: string;
  likes: number;
}

export default function ModelCard({
  imageSrc,
  avatarSrc,
  title,
  likes,
}: ModelCardProps) {
  const indicateImgSize = 50;
  return (
    <div className="model-card">
      <div className="card-media">
        
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
      </div>

      {/* // MARK: - Title */}
      <div className="card-title">{title}</div>
    </div>
  );
}
