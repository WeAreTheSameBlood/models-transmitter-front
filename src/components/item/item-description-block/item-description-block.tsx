import React from "react";
import "./item-description-block.css";

export interface ItemDescriptionBlockProps {
  amount: number;
  addedDate: string;
  category: string;
  brand: string;
  brandCountry: string;
  manufacturerCountry: string;
  barcodeValue: string;
}

export const ItemDescriptionBlock: React.FC<ItemDescriptionBlockProps> = (
  props: ItemDescriptionBlockProps
) => (
  <div className="item-description">
    <div className="item-meta">
      <span className="item-date">added: {props.addedDate}</span>
      <span className="item-amount">available quantity: {props.amount}</span>
    </div>

    <div className="item-summary">
      <h2 className="summary-title">Properties</h2>

      <div className="spec-list">
        <div className="spec-row">
          <span className="spec-label">Category</span>
          <span className="spec-value">{props.category}</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">Brand</span>
          <span className="spec-value">{props.brand}</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">Brand country</span>
          <span className="spec-value">{props.brandCountry}</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">Manufacturer country</span>
          <span className="spec-value">{props.manufacturerCountry}</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">Barcode</span>
          <span className="spec-value">{props.barcodeValue}</span>
        </div>
      </div>
    </div>
  </div>
);
