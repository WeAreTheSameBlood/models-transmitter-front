"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./item-media-panel-props.css";
import { DownloadButton } from "@/components/buttons/download-button/download-button";

export interface ItemMediaPanelProps {
  mediaUrls: string[];
}

export const ItemMediaPanel: React.FC<ItemMediaPanelProps> = ({ mediaUrls }) =>
  (() => {
    const [selected, setSelected] = useState(0);
    return (
      <div className="item-media-panel">
        <div className="preview-frame">
          <Image
            src={mediaUrls[selected]}
            alt={`Preview ${selected + 1}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="thumbnail-list">
          {mediaUrls.map((url, idx) => (
            <div
              key={idx}
              className={`thumb-frame ${idx === selected ? "active" : ""}`}
              onClick={() => setSelected(idx)}
            >
              <Image
                src={url}
                alt={`Thumb ${idx + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  })();
