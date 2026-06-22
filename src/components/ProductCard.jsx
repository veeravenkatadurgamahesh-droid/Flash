import React from "react";
import { getLowestPrice, getStoreById } from "../data/products";

export default function ProductCard({ product, onClick, compact }) {
  const lowest = getLowestPrice(product);
  const store = getStoreById(lowest.store);
  const save = lowest.original - lowest.price;

  return (
    <article
      className="product-card"
      onClick={() => onClick && onClick(product)}
      role="button"
      tabIndex={0}
      aria-label={`${product.name}, lowest price ₹${lowest.price} at ${store?.name}`}
      onKeyDown={e => e.key === "Enter" && onClick && onClick(product)}
    >
      {save > 0 && <span className="badge-hot">DEAL</span>}
      <div className="product-img-placeholder" aria-hidden="true">
        {product.emoji}
      </div>
      <p className="product-name">{product.name}</p>
      <p style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: 600, marginBottom: 4 }}>
        {product.qty}
      </p>
      <div className="product-price-row">
        <span className="price-current">₹{lowest.price}</span>
        {save > 0 && <span className="price-old">₹{lowest.original}</span>}
      </div>
      {save > 0 && (
        <p className="price-save">Save ₹{save}</p>
      )}
      <div className="badge-lowest" aria-label={`Lowest price at ${store?.name}`}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: store?.dot, display: "inline-block" }} />
        {store?.name}
      </div>
    </article>
  );
}
