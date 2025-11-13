import React, { useMemo, useState } from "react";
import {
  Sidebar,
  TextInput,
  Checkbox,
  
  Select,
  
  Button,
  Drawer,
  DrawerItems,
} from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import CatalogItem from "../catalog-components/CatalogItem";
import NavBar from "../NavBar";
import Footer from "../Footer";
import WhatsAppButton from "../WhatsAppIcon";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const ALL_ITEMS = [
  // ===================== CÁMARAS =====================
  {
    id: "p1",
    title: "ARRI Alexa Mini LF",
    price: "$1.400.000 por jornada",
    image: "/fotos-catalogo/p1.png",
    category: "camara",
  },
  {
    id: "p2",
    title: "ARRI Alexa Mini",
    price: "$980.000 por jornada",
    image: "/fotos-catalogo/p2.png",
    category: "camara",
  },
  {
    id: "p3",
    title: "ARRI Alexa Amira",
    price: "$590.000 por jornada",
    image: "/fotos-catalogo/p3.png",
    category: "camara",
  },
  {
    id: "p6",
    title: "RED Helium",
    price: "$470.000 por jornada",
    image: "/fotos-catalogo/p6.png",
    category: "camara",
    discountPct: 50  
  },
  {
    id: "p7",
    title: "RED Gemini 5k",
    price: "$570.000 por jornada",
    image: "/fotos-catalogo/p7.png",
    category: "camara",
  },
  {
    id: "p8",
    title: "RED Epic W",
    price: "$470.000 por jornada",
    image: "/fotos-catalogo/p8.png",
    category: "camara",
    discountPct: 50  
  },
  {
    id: "p11",
    title: "RED Komodo X",
    price: "$325.000 por jornada",
    image: "/fotos-catalogo/p11.png",
    category: "camara",
  },
  {
    id: "p13",
    title: "RED Scarlet MX",
    price: "$215.000 por jornada",
    image: "/fotos-catalogo/p13.png",
    category: "camara",
  },
  {
    id: "p14",
    title: "SONY Venice",
    price: "$1.050.000 por jornada",
    image: "/fotos-catalogo/p14.png",
    category: "camara",
  },
  {
    id: "p163",
    title: "SONY FX6",
    price: "$300.000 por jornada",
    image: "/fotos-catalogo/p163.png",
    category: "camara",
    discountPct: 50 
  },
  {
    id: "p19",
    title: "SONY FS7 mk2 (con metabones)",
    price: "$230.000 por jornada",
    image: "/fotos-catalogo/p19.png",
    category: "camara",
    discountPct: 50 
  },
  {
    id: "p36",
    title: "BLACKMAGIC Pocket 6K Cinema (con cage Tilta)",
    price: "$135.000 por jornada",
    image: "/fotos-catalogo/p36.png",
    category: "camara",
  },
  {
    id: "p39",
    title: "CANON C300 MK3",
    price: "$345.000 por jornada",
    image: "/fotos-catalogo/p39.png",
    category: "camara",
  },
  {
    id: "p54",
    title: "Lente COOKE S4 (individual)",
    price: "$145.000 por jornada",
    image: "/fotos-catalogo/p54.png",
    category: "opticas",
  },
  {
    id: "p55",
    title: "Set COOKE Mini S4 (x6 lentes)",
    price: "$450.000 por jornada",
    image: "/fotos-catalogo/p55.png",
    category: "opticas",
  },
  {
    id: "p58",
    title: "Lente LEICA Summi C (individual)",
    price: "$125.000 por jornada",
    image: "/fotos-catalogo/p58.png",
    category: "opticas",
    discountPct: 50  
  },
  {
    id: "p59",
    title: "Set LEICA Summi C (x6 lentes)",
    price: "$630.000 por jornada",
    image: "/fotos-catalogo/p59.png",
    category: "opticas",
    discountPct: 50  
  },
  {
    id: "p60",
    title: "Lente CARL ZEISS Ultra Prime (individual)",
    price: "$125.000 por jornada",
    image: "/fotos-catalogo/p60.png",
    category: "opticas",
    discountPct: 50  
  },
  {
    id: "p61",
    title: "Set CARL ZEISS Ultra Prime (x6 lentes)",
    price: "$630.000 por jornada",
    image: "/fotos-catalogo/p61.png",
    category: "opticas",
    discountPct: 50  
  },
  {
    id: "p62",
    title: "Set CARL ZEISS 1.3 (x6 lentes)",
    price: "$700.000 por jornada",
    image: "/fotos-catalogo/p62.png",
    category: "opticas",
    discountPct: 50  
  },
  {
    id: "p63",
    title: "Set CARL ZEISS 1.4 (x6 lentes)",
    price: "$450.000 por jornada",
    image: "/fotos-catalogo/p63.png",
    category: "opticas",
    discountPct: 50  
  },
  {
    id: "p64",
    title: "Set CARL ZEISS 2.1 MK2 (x6 lentes)",
    price: "$450.000 por jornada",
    image: "/fotos-catalogo/p64.png",
    category: "opticas",
    discountPct: 50  
  },
  {
    id: "p67",
    title: "Zoom ANGENIEUX HR 25-250mm T3.5 PL",
    price: "$270.000 por jornada",
    image: "/fotos-catalogo/p67.png",
    category: "opticas",
  },
  {
    id: "p68",
    title: "Zoom ANGENIEUX Óptimo DP Rouge 30-80mm T2.8PL",
    price: "$215.000 por jornada",
    image: "/fotos-catalogo/p68.png",
    category: "opticas",
    discountPct: 50  
  },
    {
    id: "p65",
    title: "COOKE Varotal 20-100mm T3.1PL",
    price: "$180.000 por jornada",
    image: "/fotos-catalogo/p65.png",
    category: "opticas",
    discountPct: 50  
  },
  {
    id: "p69",
    title: "Trípode y cabezal oconnor 2575",
    price: "$108.000 por jornada",
    image: "/fotos-catalogo/p69.png",
    category: "tripodes",
    discountPct: 50  
  },
    {
    id: "p150",
    title: "Trípode y cabezal oconnor 2060",
    price: "$108.000 por jornada",
    image: "/fotos-catalogo/p150.png",
    category: "tripodes",
    discountPct: 50  
  },
  {
    id: "p71",
    title: "Trípode 150 mm (7+7)",
    price: "$64.000 por jornada",
    image: "/fotos-catalogo/p71.png",
    category: "tripodes",
    discountPct: 50  
  },
  {
    id: "p72",
    title: "Trípode 100 mm gama ALTA (Sachtler V18, Oconnor 1030, Cartoni C20)",
    price: "$56.000 por jornada",
    image: "/fotos-catalogo/p72.png",
    category: "tripodes",
    discountPct: 50  
  },
  {
    id: "p77",
    title: "HONDA EU65is/70is (5.2 kW)",
    price: "$120.000 por jornada",
    image: "/fotos-catalogo/p77.png",
    category: "generadores",
    discountPct: 50  
  },
  {
    id: "p78",
    title: "HONDA EU30is (2.4 kW)",
    price: "$85.000 por jornada",
    image: "/fotos-catalogo/p78.png",
    category: "generadores",
    discountPct: 50  
  },
  {
    id: "p81",
    title: "ARRI SkyPanel S60-C",
    price: "$180.000 por jornada",
    image: "/fotos-catalogo/p81.png",
    category: "luces",
    discountPct: 50  
  },
  {
    id: "p82",
    title: "ARRI SkyPanel S30-C",
    price: "$115.000 por jornada",
    image: "/fotos-catalogo/p82.png",
    category: "luces",
    discountPct: 50  
  },
  {
    id: "p83",
    title: "KINOFLO Celeb 450",
    price: "$140.000 por jornada",
    image: "/fotos-catalogo/p83.png",
    category: "luces",
  },
  {
    id: "p84",
    title: "KINOFLO FreeStyle 21/31",
    price: "$106.000 por jornada",
    image: "/fotos-catalogo/p84.png",
    category: "luces",
  },
  {
    id: "p85",
    title: "LITEPANELS Gemini 2x1",
    price: "$114.000 por jornada",
    image: "/fotos-catalogo/p85.png",
    category: "luces",
    discountPct: 50  
  },
  {
    id: "p162",
    title: "LITEPANELS Gemini 1x1",
    price: "$47.000 por jornada",
    image: "/fotos-catalogo/p162.png",
    category: "luces",
    discountPct: 50  
  },
  {
    id: "p88",
    title: "NANLITE Evoke 1200 (sin accesorios)",
    price: "$176.000 por jornada",
    image: "/fotos-catalogo/p88.png",
    category: "luces",
  },
  {
    id: "p89",
    title: "NANLITE Forza 720b (sin accesorios)",
    price: "$162.000 por jornada",
    image: "/fotos-catalogo/p89.png",
    category: "luces",
    discountPct: 50  
  },
  {
    id: "p90",
    title: "Valija ASTERA Titan Tube x8",
    price: "$265.000 por jornada",
    image: "/fotos-catalogo/p90.png",
    category: "luces",
    discountPct: 50  
  },
  {
    id: "p91",
    title: "Valija DEDOLIGHT 150w/100w (tungsteno)",
    price: "$82.000 por jornada",
    image: "/fotos-catalogo/p91.png",
    category: "luces",
    discountPct: 50  
  },
  {
    id: "p92",
    title: "valija ASTERA bulb",
    price: "$60.000 por jornada",
    image: "/fotos-catalogo/p92.png",
    category: "luces",
    discountPct: 50  
  },
  {
    id: "p93",
    title: "Monitor 24'' SMALL HD 2403",
    price: "$90.000 por jornada",
    image: "/fotos-catalogo/p93.png",
    category: "videoassist",
    discountPct: 50  
  },
  {
    id: "p94",
    title: "Monitor 17'' SMALL HD 1703",
    price: "$100.000 por jornada",
    image: "/fotos-catalogo/p94.png",
    category: "videoassist",
    discountPct: 50  
  },
  {
    id: "p95",
    title: "Monitor 5.6'' TV Logic (055/056/058)",
    price: "$36.000 por jornada",
    image: "/fotos-catalogo/p95.png",
    category: "videoassist",
    discountPct: 50  
  },
  {
    id: "p96",
    title: "Grabador on board ATOMOS Shogun 7",
    price: "$68.000 por jornada",
    image: "/fotos-catalogo/p96.png",
    category: "videoassist",
    discountPct: 50  
  },
  {
    id: "p98",
    title: "Carro de travelling con 10 mts de vías",
    price: "$96.000 por jornada",
    image: "/fotos-catalogo/p98.png",
    category: "estabilizadores",
  },
  {
    id: "p99",
    title: "Slider Dana Dolly (3–2–1.5 mts)",
    price: "$82.000 por jornada",
    image: "/fotos-catalogo/p99.png",
    category: "estabilizadores",
  },
  {
    id: "p100",
    title: "EASYRIG Vario 5 (con Serene Flowcine)",
    price: "$144.000 por jornada",
    image: "/fotos-catalogo/p100.png",
    category: "estabilizadores",
    discountPct: 50  
  },
  {
    id: "p102",
    title: "DJI Ronin S3",
    price: "$100.000 por jornada",
    image: "/fotos-catalogo/p102.png",
    category: "estabilizadores",
    discountPct: 50  
  },
  {
    id: "p107",
    title: "Máquina de humo 900 W Fogger",
    price: "$22.000 por jornada",
    image: "/fotos-catalogo/p107.png",
    category: "otros",
  },
  {
    id: "p108",
    title: "Craquera Antari HZ500",
    price: "$62.000 por jornada",
    image: "/fotos-catalogo/p108.png",
    category: "otros",
    discountPct: 50  
  },
  {
    id: "p110",
    title: "Trípode Cranck-O B150",
    price: "$70.000 por jornada",
    image: "/fotos-catalogo/p108.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p111",
    title: "Trípode Cranck-O B140",
    price: "$50.000 por jornada",
    image: "/fotos-catalogo/p111.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p112",
    title: "Trípode Hi-Hi / A330",
    price: "$24.000 por jornada",
    image: "/fotos-catalogo/p112.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p113",
    title: "Avenger araña (chico, mediano, grande)",
    price: "$3.500 por jornada",
    image: "/fotos-catalogo/p113.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p114",
    title: "Avenger COMBO (chico, mediano, grande)",
    price: "$5.000 por jornada",
    image: "/fotos-catalogo/p114.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p116",
    title: "Boom Avenger con pesa D650",
    price: "$14.000 por jornada",
    image: "/fotos-catalogo/p116.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p117",
    title: "Gripería común (D200/coco/pelicano/grampa C/portatelgo)",
    price: "$4.000 por jornada",
    image: "/fotos-catalogo/p117.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p119",
    title: "Marco ó bandera",
    price: "$3.500 por jornada",
    image: "/fotos-catalogo/p119.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p122",
    title: "Tamiz 6x6 con juego de telas",
    price: "$68.000 por jornada",
    image: "/fotos-catalogo/p122.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p123",
    title: "Tamiz AVENGER 3,60 mts con 3 telas",
    price: "$50.000 por jornada",
    image: "/fotos-catalogo/p123.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p124",
    title: "Tamiz AVENGER 2,40 mts con 3 telas",
    price: "$36.000 por jornada",
    image: "/fotos-catalogo/p124.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p127",
    title: "Telón 6x6 mts (negro, blanco ó silk)",
    price: "$17.000 por jornada",
    image: "/fotos-catalogo/p127.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p128",
    title: "Telón 4x4 mts (negro, blanco ó silk)",
    price: "$11.000 por jornada",
    image: "/fotos-catalogo/p128.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p129",
    title: "Telón 2x2 mts (negro, blanco ó silk)",
    price: "$5.500 por jornada",
    image: "/fotos-catalogo/p129.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p130",
    title: "Tela Chroma 6x6",
    price: "$21.000 por jornada",
    image: "/fotos-catalogo/p130.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p131",
    title: "Tela Chroma 4x4",
    price: "$15.000 por jornada",
    image: "/fotos-catalogo/p131.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p132",
    title: "Tela Chroma 2x2",
    price: "$6.500 por jornada",
    image: "/fotos-catalogo/p132.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p134",
    title: "Telas Especiales 4x4 - Grid Cloth",
    price: "$15.000 por jornada",
    image: "/fotos-catalogo/p134.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p135",
    title: "Telas Especiales 2x2 - Grid Cloth",
    price: "$12.500 por jornada",
    image: "/fotos-catalogo/p135.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p137",
    title: "Escalera fibra de vidrio",
    price: "$13.500 por jornada",
    image: "/fotos-catalogo/p137.png",
    category: "griperia",
    discountPct: 50  
  },
  {
    id: "p138",
    title: "Tres medidas (full / half / ¼)",
    price: "$4.250 por jornada",
    image: "/fotos-catalogo/p138.png",
    category: "griperia",
    discountPct: 50  
  },
    {
    id: "p142",
    title: "(Tiffen/Schneider) 6x6 - efectos y difusores",
    price: "$31.000,00",
    image: "/fotos-catalogo/p142.png",
    category: "filtros",
    discountPct: 50  
  },
{
  id: "p143",
  title: "(Tiffen/Schneider) 6x6 - ND y Pola",
  price: "$25.000,00",
  image: "/fotos-catalogo/p143.png",
  category: "filtros",
  discountPct: 50  
},
{
  id: "p144",
  title: "(Tiffen/Schneider) 4x5.6 - efectos y difusores",
  price: "$25.000,00",
  image: "/fotos-catalogo/p144.png",
  category: "filtros",
  discountPct: 50  
},
{
  id: "p145",
  title: "(Tiffen/Schneider) 4x5.6 - ND y Pola",
  price: "$20.000,00",
  image: "/fotos-catalogo/p145.png",
  category: "filtros",
  discountPct: 50  
},
{
  id: "p146",
  title: "(Tiffen/Schneider) 4x4 - efectos y difusores",
  price: "$20.000,00",
  image: "/fotos-catalogo/p146.png",
  category: "filtros",
  discountPct: 50  
},
{
  id: "p147",
  title: "(Tiffen/Schneider) 4x4 - ND y Pola",
  price: "$17.500,00",
  image: "/fotos-catalogo/p147.png",
  category: "filtros",
  discountPct: 50  
},
{
  id: "p149",
  title: "Set lentillas aproximación SCHNEIDER de 138mm (+1 +2 +3)",
  price: "$68.000,00",
  image: "/fotos-catalogo/p151.png",
  category: "filtros",
  discountPct: 50  
},
{
  id: "p151",
  title: "Set lentillas aproximación SCHNEIDER de 4½ (+1 +2 +3)",
  price: "$50.000,00",
  image: "/fotos-catalogo/p151.png",
  category: "filtros",
  discountPct: 50  
},
{
  id: "p152",
  title: "HMI Par 6000w",
  price: "$285.000,00",
  image: "/fotos-catalogo/p152.png",
  category: "iluminacion",
  discountPct: 50  
},
{
  id: "p153",
  title: "HMI M40",
  price: "$250.000,00",
  image: "/fotos-catalogo/p153.png",
  category: "iluminacion",
  discountPct: 50  
},
{
  id: "p154",
  title: "HMI Par/Fresnel 4000w",
  price: "$195.000,00",
  image: "/fotos-catalogo/p154.png",
  category: "iluminacion",
  discountPct: 50  
},
{
  id: "p156",
  title: "HMI M18",
  price: "$180.000,00",
  image: "/fotos-catalogo/p156.png",
  category: "iluminacion",
  discountPct: 50  
},
{
  id: "p159",
  title: "HMI Par/Fresnel 575w",
  price: "$95.000,00",
  image: "/fotos-catalogo/p159.png",
  category: "iluminacion",
  discountPct: 50  
},
{
  id: "p160",
  title: "HMI Par 400w Pocket",
  price: "$120.000,00",
  image: "/fotos-catalogo/p160.png",
  category: "iluminacion",
  discountPct: 50  
},
{
  id: "p161",
  title: "HMI Par 200w",
  price: "$88.000,00",
  image: "/fotos-catalogo/p161.png",
  category: "iluminacion",
  discountPct: 50  
},

];

// =============================================================
// === UTILIDADES ==============================================
// =============================================================
const ITEMS_PER_PAGE = 24;

const CATEGORIES = [
  "camara",
  "opticas",
  "filtros",
  "tripodes",
  "generadores",
  "luces",
  "griperia",
  "videoassist",
  "estabilizadores",
  "utileria",
  "otros",
];

function normalize(s) {
  return s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function toNumberPrice(val) {
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

// ¿El item está en descuento?
function isDiscounted(it) {
  const price = toNumberPrice(it.price);
  const compareAt = toNumberPrice(it.compareAtPrice);
  const salePrice = toNumberPrice(it.salePrice);
  const pct = toNumberPct(it.discountPct);

  if (!isNaN(pct) && pct > 0) return true;
  if (!isNaN(compareAt) && !isNaN(price) && compareAt > price) return true;
  if (!isNaN(salePrice) && !isNaN(price) && salePrice < price) return true;
  if (it.discount === true || it.onSale === true || it.sale === true) return true;
  return false;
}

// Aplica búsqueda / filtros / orden
function applyFiltersAndSort(items, { q, selectedCats, sortKey, onlyDiscounted }) {
  let data = [...items];

  // búsqueda
  if (q) {
    const nq = normalize(q);
    data = data.filter(
      (it) =>
        normalize(it.title).includes(nq) || normalize(it.category).includes(nq)
    );
  }

  // categorías
  if (selectedCats.size > 0) {
    data = data.filter((it) => selectedCats.has(it.category));
  }

  // normalizar precios a number (no muta ALL_ITEMS original)
  data = data.map((it) => ({
    ...it,
    price: toNumberPrice(it.price) || 0,
    compareAtPrice:
      it.compareAtPrice !== undefined ? toNumberPrice(it.compareAtPrice) : it.compareAtPrice,
    salePrice:
      it.salePrice !== undefined ? toNumberPrice(it.salePrice) : it.salePrice,
  }));

  // solo con descuento
  if (onlyDiscounted) {
    data = data.filter((it) => isDiscounted(it));
  }

  // orden
  data.sort((a, b) => {
    switch (sortKey) {
      case "az":
        return a.title.localeCompare(b.title, "es");
      case "za":
        return b.title.localeCompare(a.title, "es");
      default:
        return 0;
    }
  });

  return data;
}

// =============================================================
// === COMPONENTE PRINCIPAL ====================================
// =============================================================
const CatalogPage = () => {
  const [q, setQ] = useState("");
  const [selectedCats, setSelectedCats] = useState(new Set());
  const [sortKey, setSortKey] = useState("az");
  const [isFilterOpen, setIsFilterOpen] = useState(false); // drawer filtros (mobile)
  const [isSearchOpen, setIsSearchOpen] = useState(false); // drawer búsqueda (mobile)
  const [onlyDiscounted, setOnlyDiscounted] = useState(false); // filtro descuento
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();

  // Detectar cat desde ?cat=
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("cat");
    if (cat) setSelectedCats(new Set([cat.toLowerCase()]));
    else setSelectedCats(new Set());
    setCurrentPage(1);
  }, [location.search]);

  const results = useMemo(
    () =>
      applyFiltersAndSort(ALL_ITEMS, {
        q,
        selectedCats,
        sortKey,
        onlyDiscounted,
      }),
    [q, selectedCats, sortKey, onlyDiscounted]
  );

  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const paginatedResults = results.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleCat = (cat) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ====== Panel de Filtros ======
  const FilterContent = (
    <Sidebar className="rounded-xl shadow-sm bg-gray-900/80 backdrop-blur border border-gray-800 p-2">
      <div className="px-4 py-3 border-b border-gray-800">
        <p className="text-sm font-semibold">Filtros</p>
      </div>

      {/* Solo con descuento */}
      <div className="px-4 py-3 border-b border-gray-800">
        <label className="flex items-center gap-2">
          <Checkbox
            checked={onlyDiscounted}
            onChange={() => setOnlyDiscounted((v) => !v)}
            className="rounded border-gray-600"
          />
        <span className="text-sm">Solo con descuento</span>
        </label>
      </div>

      {/* Categorías */}
      <div className="px-4 py-2 space-y-2">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
          Categorías
        </p>
        {CATEGORIES.map((cat) => (
          <label key={cat} className="flex items-center gap-2">
            <Checkbox
              checked={selectedCats.has(cat)}
              onChange={() => toggleCat(cat)}
              className="rounded border-gray-600"
            />
            <span className="text-sm capitalize">{cat}</span>
          </label>
        ))}
      </div>
    </Sidebar>
  );

  return (
    <div className="bg-[#0B0B0C] min-h-screen text-white">
      <WhatsAppButton />
      <NavBar />
      {/* compensar navbar fijo */}
      <div className="h-20" />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        {/* Encabezado */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Catálogo de Equipos
            </h1>
            <p className="text-gray-300 mt-2">
              Equipos disponibles • {results.length} resultados
            </p>
          </div>

          {/* Buscador y orden (desktop) */}
          <div className="hidden md:flex items-center gap-3 w-[520px]">
            <TextInput
              icon={MagnifyingGlassIcon}
              placeholder="Buscar por nombre o categoría…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full bg-gray-900 border-gray-700 text-white placeholder-gray-400"
            />
            <Select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white"
            >
              <option value="az">A–Z</option>
              <option value="za">Z–A</option>
            </Select>
          </div>
        </div>

        {/* Controles mobile (Filtros + Lupa) */}
        <div className="mt-6 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 bg-gray-900 px-3 py-2 rounded-lg border border-gray-700"
            >
              <FunnelIcon className="w-5 h-5 text-[#2A86E2]" />
              <span className="text-sm text-gray-200">Filtros</span>
            </Button>

            <Button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center bg-gray-900 p-2 rounded-lg border border-gray-700"
              aria-label="Buscar"
              title="Buscar"
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-[#2A86E2]" />
            </Button>
          </div>

          <p className="text-sm text-gray-400">{results.length} productos</p>
        </div>

        {/* Drawer de búsqueda (mobile) — desplazado bajo el navbar */}
        <Drawer open={isSearchOpen} onClose={() => setIsSearchOpen(false)} position="top">
          <DrawerItems>
            <div className="pt-20 p-4 bg-[#0B0B0C] border-b border-gray-800">
              <h3 className="text-base font-semibold mb-3">Buscar</h3>
              <TextInput
                icon={MagnifyingGlassIcon}
                placeholder="Buscar por nombre o categoría…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                autoFocus
                className="w-full bg-gray-900 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </DrawerItems>
        </Drawer>

        {/* Drawer de filtros (mobile) — desplazado bajo el navbar */}
        <Drawer open={isFilterOpen} onClose={() => setIsFilterOpen(false)} position="left">
          <DrawerItems>
            <div className="pt-20 p-2">{FilterContent}</div>
          </DrawerItems>
        </Drawer>

        {/* Grilla principal (desktop igual que antes; mobile 2 col) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="hidden lg:block lg:col-span-3">{FilterContent}</aside>

          <section className="lg:col-span-9">
            <AnimatePresence mode="popLayout">
              {paginatedResults.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-24 text-gray-400"
                >
                  No se encontraron equipos.
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  layout="position"
                  className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {paginatedResults.map((item) => (
                    <CatalogItem
                      key={item.id}
                      item={item}
                      onClick={() => console.log("Ver producto:", item.id)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-10 gap-3">
                <Button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="bg-gray-800 border border-gray-700 hover:bg-gray-700"
                >
                  Anterior
                </Button>

                <span className="text-gray-300 text-sm">
                  Página {currentPage} de {totalPages}
                </span>

                <Button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="bg-gray-800 border border-gray-700 hover:bg-gray-700"
                >
                  Siguiente
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="relative bg-black text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default CatalogPage;