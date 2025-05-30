import React from "react";
import Image from "next/image";
import "./item-card-likes-counter.css";
import { Images } from "@/constants/images";

export interface ItemCardLikesCounterProps {
  count: number;
  className: string;
}

export const ItemCardLikesCounter: React.FC<ItemCardLikesCounterProps> = ({
  count,
  className,
}) => (
  <div className={className} >

    <div className="likes-counter">
      
      <div className="likes-icon">
        <Image
          src={Images.heart}
          alt="likes"
          width={50}
          height={50}
        />
      </div>

      <div className="likes-badge">{count}</div>

    </div>

  </div>
);
