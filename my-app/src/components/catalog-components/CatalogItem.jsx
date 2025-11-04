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

function toNumber(val) {
  if (typeof val === "number") return val;
  if (val == null) return NaN;
  return parseFloat(
    val
      .toString()
      .replace(/\./g, "")
      .replace(/[^0-9,]+/g, "")
      .replace(",", ".")
  );
}

function toNumberPct(val) {
  if (typeof val === "number") return val;
  if (val == null) return NaN;
  return parseFloat(val.toString().replace("%", "").replace(",", "."));
}

/**
 * CatalogItem
 * Props:
 * - item: { id, title, image, price, category, compareAtPrice?, salePrice?, discountPct?, discount?, onSale?, sale? }
 * - discountPct?: number (opcional, 0-100). Si viene, pisa a item.discountPct.
 * - onClick?: () => void
 */
const CatalogItem = ({ item, discountPct, onClick }) => {
  const price = toNumber(item.price);
  const compareAt = toNumber(item.compareAtPrice);
  const salePrice = toNumber(item.salePrice);

  // Prioridad del %:
  // 1) prop discountPct
  // 2) item.discountPct
  // 3) derivado de compareAtPrice / salePrice
  let pct =
    typeof discountPct === "number"
      ? discountPct
      : toNumberPct(item.discountPct);

  if ((isNaN(pct) || pct <= 0) && !isNaN(compareAt) && compareAt > price && price > 0) {
    pct = Math.round((1 - price / compareAt) * 100);
  }
  if ((isNaN(pct) || pct <= 0) && !isNaN(salePrice) && salePrice > 0 && salePrice < price) {
    pct = Math.round((1 - salePrice / price) * 100);
  }

  const flagSale = item.discount === true || item.onSale === true || item.sale === true;

  // Determinar si hay descuento (por % o por precios/flags)
  const hasPct = !isNaN(pct) && pct > 0;
  const hasDiscount = hasPct || (!isNaN(compareAt) && compareAt > price) || (!isNaN(salePrice) && salePrice < price) || flagSale;

  // Precio a mostrar
  let finalPrice = price;
  if (hasPct) {
    finalPrice = Math.round(price * (1 - pct / 100));
  } else if (!isNaN(salePrice) && salePrice < price) {
    finalPrice = salePrice;
  }

  // ¿Mostrar tachado?
  const showStrikethrough = hasDiscount && finalPrice < price;

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
        {/* Imagen con relación 3:4 */}
        <div className="aspect-[3/4] bg-gray-900">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            draggable="false"
            loading="lazy"
          />
        </div>

        {/* Badge de oferta */}
        {hasDiscount && (
          <div className="absolute top-3 left-3">
            <Badge className="rounded-full px-3 py-1 text-xs bg-[#2A86E2] text-white border-0">
              Oferta
            </Badge>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-white line-clamp-1">{item.title}</h3>
        <p className="text-sm text-gray-400">{item.category}</p>

        <div className="mt-3 flex items-end gap-2">
          {showStrikethrough && (
            <span className="text-sm text-gray-500 line-through">
              {formatCurrencyARS(price)}
            </span>
          )}
          <span className="text-lg font-bold text-white">
            {formatCurrencyARS(finalPrice)} ARS
          </span>
        </div>

        {hasPct && (
          <p className="mt-1 text-xs text-emerald-400 font-medium">
            -{pct}% de descuento
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default CatalogItem;
