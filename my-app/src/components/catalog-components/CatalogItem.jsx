import React from "react";
import { Badge } from "flowbite-react";
import { motion } from "framer-motion";

function formatCurrencyARS(value) {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
}

/**
 * CatalogItem
 * Props:
 * - item: { id, title, image, price, inStock, category, brand?, tags?, addedAt?, discountPct? }
 * - discountPct?: number (opcional, 0-100). Si viene, pisa a item.discountPct.
 * - onClick?: () => void
 */
const CatalogItem = ({ item, discountPct, onClick }) => {
  const pct =
    typeof discountPct === "number"
      ? discountPct
      : typeof item.discountPct === "number"
      ? item.discountPct
      : 0;

  const hasDiscount = pct > 0;
  const discountedPrice = hasDiscount
    ? Math.round(item.price * (1 - pct / 100))
    : item.price;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl overflow-hidden bg-[#111213] shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-800"
      onClick={onClick}
      role="button"
    >
      <div className="relative">
        {/* Relación 3:4 fija, estilo catálogo */}
        <div className="aspect-[3/4] bg-gray-900">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            draggable="false"
            loading="lazy"
          />
        </div>

        <div className="absolute top-3 left-3 flex gap-2">
          {hasDiscount && (
            <Badge className="rounded-full px-3 py-1 text-xs bg-[#2A86E2] text-white border-0">
              Oferta
            </Badge>
          )}
          {!item.inStock && (
            <Badge className="rounded-full px-3 py-1 text-xs bg-gray-700 text-gray-200 border-0">
              Sin stock
            </Badge>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-white line-clamp-1">{item.title}</h3>
        <p className="text-sm text-gray-400">{item.category}</p>

        <div className="mt-3 flex items-end gap-2">
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              {formatCurrencyARS(item.price)}
            </span>
          )}
          <span className="text-lg font-bold text-white">
            {formatCurrencyARS(discountedPrice)} {hasDiscount && "ARS"}
          </span>
          {!hasDiscount && <span className="text-lg font-bold text-white">ARS</span>}
        </div>

        {hasDiscount && (
          <p className="mt-1 text-xs text-emerald-400 font-medium">-{pct}% de descuento</p>
        )}
      </div>
    </motion.article>
  );
};

export default CatalogItem;
