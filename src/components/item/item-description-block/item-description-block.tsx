import React from "react";
import "./item-description-block.css";

export interface ItemDescriptionBlockProps {
  owner: string;
  date: string;
  summary: string;
}

export const ItemDescriptionBlock: React.FC<ItemDescriptionBlockProps> = ({
  owner,
  date,
  summary,
}) => (
  <div className="item-description">

    <div className="item-meta">
      <span className="item-owner">{owner}</span>
      <span className="item-date">{date}</span>
    </div>

    <div className="item-summary">
      <h2>Details</h2>
      <p>{summary}</p>
    </div>
    
  </div>
);