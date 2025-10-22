import React, { useMemo, useState } from "react";
import { Sidebar, TextInput, Checkbox, Label, Select, Badge } from "flowbite-react"; // ← sin RangeSlider
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import CatalogItem from "../catalog-components/CatalogItem";

// ---------- Data local (ejemplo) ----------
const ALL_ITEMS = [
  { id: "p1", title: "Adjudication Slider", image: "/catalog/adjudication.jpg", price: 44999, inStock: true, category: "Slider", discountPct: 11, addedAt: "2025-09-15" },
  { id: "p2", title: "Amber Ring", image: "/catalog/amber-ring.jpg", price: 42600, inStock: true, category: "Ring", discountPct: 0, addedAt: "2025-09-10" },
  { id: "p3", title: "Cloud Spinner", image: "/catalog/cloud-spinner.jpg", price: 34500, inStock: true, category: "Spinner", addedAt: "2025-08-20" },
  { id: "p4", title: "Ghost Coin V2", image: "/catalog/ghost-coin.jpg", price: 38999, inStock: false, category: "Coins", discountPct: 5, addedAt: "2025-07-01" },
  { id: "p5", title: "Mini Multitool K1", image: "/catalog/multitool.jpg", price: 52999, inStock: true, category: "Multitool", addedAt: "2025-09-30" },
  { id: "p6", title: "Orbit Ring", image: "/catalog/orbit-ring.jpg", price: 39999, inStock: true, category: "Ring", addedAt: "2025-09-05" },
  { id: "p7", title: "Neo Slider Matte", image: "/catalog/neo-slider.jpg", price: 41999, inStock: true, category: "Slider", discountPct: 15, addedAt: "2025-10-01" },
  { id: "p8", title: "Wave Spinner", image: "/catalog/wave-spinner.jpg", price: 36999, inStock: false, category: "Spinner", addedAt: "2025-09-25" },
  { id: "p9", title: "Atom Coin", image: "/catalog/atom-coin.jpg", price: 30999, inStock: true, category: "Coins", addedAt: "2025-07-21" },
  { id: "p10", title: "Arc Slider Pro", image: "/catalog/arc-slider.jpg", price: 46999, inStock: true, category: "Slider", addedAt: "2025-09-29" },
  { id: "p11", title: "Nimbus Spinner Black", image: "/catalog/nimbus-spinner.jpg", price: 38999, inStock: true, category: "Spinner", addedAt: "2025-06-11" },
  { id: "p12", title: "Flex Ring Clear", image: "/catalog/flex-ring.jpg", price: 33999, inStock: true, category: "Ring", discountPct: 20, addedAt: "2025-10-02" },
];

// categorías para el filtro
const CATEGORIES = ["Coins", "Multitool", "Otro", "Ring", "Slider", "Spinner"];

// ---------- Helpers ----------
function normalize(s) {
  return s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}
function applyFiltersAndSort(items, { q, selectedCats, onlyStock, priceMin, priceMax, sortKey }) {
  let data = [...items];
  if (q) {
    const nq = normalize(q);
    data = data.filter((it) => normalize(it.title).includes(nq) || normalize(it.category).includes(nq));
  }
  if (selectedCats.size > 0) data = data.filter((it) => selectedCats.has(it.category));
  if (onlyStock) data = data.filter((it) => it.inStock);
  data = data.filter((it) => it.price >= priceMin && it.price <= priceMax);
  data.sort((a, b) => {
    switch (sortKey) {
      case "az": return a.title.localeCompare(b.title, "es");
      case "za": return b.title.localeCompare(a.title, "es");
      case "priceAsc": return a.price - b.price;
      case "priceDesc": return b.price - a.price;
      case "newest": return new Date(b.addedAt || 0) - new Date(a.addedAt || 0);
      default: return 0;
    }
  });
  return data;
}

// ---------- Page ----------
const CatalogPage = () => {
  const [q, setQ] = useState("");
  const [selectedCats, setSelectedCats] = useState(new Set());
  const [onlyStock, setOnlyStock] = useState(false);
  const [sortKey, setSortKey] = useState("az");
  const [priceMin, setPriceMin] = useState(30000);
  const [priceMax, setPriceMax] = useState(60000);

  const results = useMemo(
    () => applyFiltersAndSort(ALL_ITEMS, { q, selectedCats, onlyStock, priceMin, priceMax, sortKey }),
    [q, selectedCats, onlyStock, priceMin, priceMax, sortKey]
  );

  const toggleCat = (cat) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      return next;
    });
  };

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        {/* Título y barra de herramientas */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Productos</h1>
            <p className="text-gray-600 mt-2">Catálogo completo • {results.length} resultados</p>
          </div>

          <div className="hidden md:flex items-center gap-3 w-[520px]">
            <TextInput
              icon={MagnifyingGlassIcon}
              placeholder="Buscar por nombre o categoría…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full"
            />
            <Select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
              <option value="az">Alfabéticamente, A–Z</option>
              <option value="za">Alfabéticamente, Z–A</option>
              <option value="priceAsc">Precio: menor a mayor</option>
              <option value="priceDesc">Precio: mayor a menor</option>
              <option value="newest">Más recientes</option>
            </Select>
          </div>
        </div>

        {/* Toolbar en mobile */}
        <div className="mt-4 md:hidden grid grid-cols-1 gap-3">
          <TextInput
            icon={MagnifyingGlassIcon}
            placeholder="Buscar por nombre o categoría…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <Select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
            <option value="az">Alfabéticamente, A–Z</option>
            <option value="za">Alfabéticamente, Z–A</option>
            <option value="priceAsc">Precio: menor a mayor</option>
            <option value="priceDesc">Precio: mayor a menor</option>
            <option value="newest">Más recientes</option>
          </Select>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar filtros */}
          <aside className="lg:col-span-3">
            <Sidebar aria-label="Filtros de catálogo" className="rounded-xl shadow-sm">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <div className="px-2 py-2">
                    <p className="text-sm font-semibold text-gray-900">Filtrar:</p>
                  </div>

                  {/* Tipo de fidget */}
                  <div className="px-4 py-2">
                    <p className="text-sm font-medium text-gray-700 mb-2">Tipo de fidget</p>
                    <div className="space-y-2">
                      {CATEGORIES.map((cat) => (
                        <label key={cat} className="flex items-center gap-2">
                          <Checkbox
                            checked={selectedCats.has(cat)}
                            onChange={() => toggleCat(cat)}
                          />
                          <span className="text-sm text-gray-800">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Disponibilidad */}
                  <div className="px-4 py-2">
                    <p className="text-sm font-medium text-gray-700 mb-2">Disponibilidad</p>
                    <label className="flex items-center gap-2">
                      <Checkbox
                        checked={onlyStock}
                        onChange={() => setOnlyStock((v) => !v)}
                      />
                      <span className="text-sm text-gray-800">En stock</span>
                    </label>
                  </div>

                  {/* Precio */}
                  <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-700">Precio</p>
                      <Badge color="gray" className="text-xs">ARS</Badge>
                    </div>

                    <div className="mt-3">
                      <Label htmlFor="min">Mínimo</Label>
                      <TextInput
                        id="min"
                        type="number"
                        value={priceMin}
                        onChange={(e) => setPriceMin(Number(e.target.value || 0))}
                        min={0}
                      />
                    </div>
                    <div className="mt-3">
                      <Label htmlFor="max">Máximo</Label>
                      <TextInput
                        id="max"
                        type="number"
                        value={priceMax}
                        onChange={(e) => setPriceMax(Number(e.target.value || 0))}
                        min={0}
                      />
                    </div>

                    {/* Rango rápido (inputs nativos) */}
                    <div className="mt-4 space-y-3">
                      <Label className="block">Rango rápido (mín.)</Label>
                      <input
                        type="range"
                        min={30000}
                        max={60000}
                        step={1000}
                        value={priceMin}
                        onChange={(e) => setPriceMin(Number(e.target.value))}
                        className="w-full"
                      />
                      <Label className="block">Rango rápido (máx.)</Label>
                      <input
                        type="range"
                        min={30000}
                        max={60000}
                        step={1000}
                        value={priceMax}
                        onChange={(e) => setPriceMax(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </aside>

          {/* Grilla de productos */}
          <section className="lg:col-span-9">
            <AnimatePresence mode="popLayout">
              {results.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-24 text-gray-500"
                >
                  No se encontraron productos con esos filtros.
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {results.map((item) => (
                    <CatalogItem
                      key={item.id}
                      item={item}
                      onClick={() => console.log("Ver producto:", item.id)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
