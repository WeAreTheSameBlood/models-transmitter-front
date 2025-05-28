"use client";
import React from "react";
import "./pagination.css";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  if (totalPages <= 1) return null;

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  const visiblePages = [];
  for (let p = Math.max(1, currentPage - 2); p <= Math.min(totalPages, currentPage + 2); p++) {
    visiblePages.push(p);
  }

  return (
    <nav className="pagination">
      <button
        className="page-btn"
        onClick={() => goTo(1)}
        disabled={currentPage === 1}
      >
        |←
      </button>
      <button
        className="page-btn"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ←
      </button>

      {visiblePages.map((p) => (
        <button
          key={p}
          className={`page-number ${p === currentPage ? "active" : ""}`}
          onClick={() => goTo(p)}
        >
          {p}
        </button>
      ))}

      <button
        className="page-btn"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        →
      </button>
      <button
        className="page-btn"
        onClick={() => goTo(totalPages)}
        disabled={currentPage === totalPages}
      >
        →|
      </button>
    </nav>
  );
};
