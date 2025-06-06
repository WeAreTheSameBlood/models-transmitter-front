import React from "react";
import "./download-button.css";

export interface DownloadButtonProps {
  onClick: () => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => (
  <button
    className="download-button"
    onClick={onClick}
  >
    Download model
  </button>
);
