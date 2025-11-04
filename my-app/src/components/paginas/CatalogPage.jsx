import React, { useMemo, useState } from "react";
import {
  Sidebar,
  TextInput,
  Checkbox,
  
  Select,
  
  Button,
  Drawer,
  DrawerHeader,
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
    price: "$570.000 por jornada",
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
    price: "$570.000 por jornada",
    image: "/fotos-catalogo/p8.png",
    category: "camara",
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
    id: "p16",
    title: "SONY FX9",
    price: "$325.000 por jornada",
    image: "/fotos-catalogo/p16.png",
    category: "camara",
  },
  {
    id: "p19",
    title: "SONY FS7 mk2 (con metabones)",
    price: "$250.000 por jornada",
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
  },
  {
    id: "p59",
    title: "Set LEICA Summi C (x6 lentes)",
    price: "$630.000 por jornada",
    image: "/fotos-catalogo/p59.png",
    category: "opticas",
  },
  {
    id: "p60",
    title: "Lente CARL ZEISS Ultra Prime (individual)",
    price: "$125.000 por jornada",
    image: "/fotos-catalogo/p60.png",
    category: "opticas",
  },
  {
    id: "p61",
    title: "Set CARL ZEISS Ultra Prime (x6 lentes)",
    price: "$630.000 por jornada",
    image: "/fotos-catalogo/p61.png",
    category: "opticas",
  },
  {
    id: "p62",
    title: "Set CARL ZEISS 1.3 (x6 lentes)",
    price: "$700.000 por jornada",
    image: "/fotos-catalogo/p62.png",
    category: "opticas",
  },
  {
    id: "p63",
    title: "Set CARL ZEISS 1.4 (x6 lentes)",
    price: "$450.000 por jornada",
    image: "/fotos-catalogo/p63.png",
    category: "opticas",
  },
  {
    id: "p64",
    title: "Set CARL ZEISS 2.1 MK2 (x6 lentes)",
    price: "$450.000 por jornada",
    image: "/fotos-catalogo/p64.png",
    category: "opticas",
  },
  {
    id: "p65",
    title: "Lente SIGMA Cine FF T1.5 High-Speed (individual)",
    price: "$58.000 por jornada",
    image: "/fotos-catalogo/p65.png",
    category: "opticas",
  },
  {
    id: "p66",
    title: "Set SIGMA Cine FF T1.5 High-Speed (x5 lentes)",
    price: "$280.000 por jornada",
    image: "/fotos-catalogo/p66.png",
    category: "opticas",
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
    title: "Lente fijo SONY GM (14-24-35-50-85-135) c/u",
    price: "$42.000 por jornada",
    image: "/fotos-catalogo/p68.png",
    category: "opticas",
  },
  {
    id: "p69",
    title: "Trípode Mitchell (2575, 2060)",
    price: "$108.000 por jornada",
    image: "/fotos-catalogo/p69.png",
    category: "tripodes",
  },
  {
    id: "p70",
    title: "Trípode Mitchell (C40, Video 20)",
    price: "$72.000 por jornada",
    image: "/fotos-catalogo/p70.png",
    category: "tripodes",
  },
  {
    id: "p71",
    title: "Trípode 150 mm (7+7)",
    price: "$64.000 por jornada",
    image: "/fotos-catalogo/p71.png",
    category: "tripodes",
  },
  {
    id: "p72",
    title: "Trípode 100 mm gama ALTA (Sachtler V18, Oconnor 1030, Cartoni C20)",
    price: "$56.000 por jornada",
    image: "/fotos-catalogo/p72.png",
    category: "tripodes",
  },
  {
    id: "p73",
    title: "Trípode de cámara gama MEDIA Manfrotto tipo 504",
    price: "$28.000 por jornada",
    image: "/fotos-catalogo/p73.png",
    category: "tripodes",
  },
  {
    id: "p74",
    title: "Trípode básico Manfrotto cabezal 500/502/Benro",
    price: "$21.000 por jornada",
    image: "/fotos-catalogo/p74.png",
    category: "tripodes",
  },
  {
    id: "p75",
    title: "Generador trifásico 50 a 88 kW",
    price: "$630.000 por jornada",
    image: "/fotos-catalogo/p75.png",
    category: "generadores",
  },
  {
    id: "p76",
    title: "Generador trifásico 20 a 40 kW",
    price: "$380.000 por jornada",
    image: "/fotos-catalogo/p76.png",
    category: "generadores",
  },
  {
    id: "p77",
    title: "HONDA EU65is/70is (5.2 kW)",
    price: "$120.000 por jornada",
    image: "/fotos-catalogo/p77.png",
    category: "generadores",
  },
  {
    id: "p78",
    title: "HONDA EU30is (2.4 kW)",
    price: "$85.000 por jornada",
    image: "/fotos-catalogo/p78.png",
    category: "generadores",
  },
  {
    id: "p79",
    title: "HONDA EU20is (1.6 kW)",
    price: "$60.000 por jornada",
    image: "/fotos-catalogo/p79.png",
    category: "generadores",
  },
  {
    id: "p80",
    title: "HONDA EU10i (800 W)",
    price: "$44.000 por jornada",
    image: "/fotos-catalogo/p80.png",
    category: "generadores",
  },
  {
    id: "p81",
    title: "ARRI SkyPanel S60-C",
    price: "$180.000 por jornada",
    image: "/fotos-catalogo/p81.png",
    category: "luces",
  },
  {
    id: "p82",
    title: "ARRI SkyPanel S30-C",
    price: "$115.000 por jornada",
    image: "/fotos-catalogo/p82.png",
    category: "luces",
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
    price: "$134.000 por jornada",
    image: "/fotos-catalogo/p85.png",
    category: "luces",
  },
  {
    id: "p86",
    title: "APUTURE 600C Pro (RGB)",
    price: "$176.000 por jornada",
    image: "/fotos-catalogo/p86.png",
    category: "luces",
  },
  {
    id: "p87",
    title: "APUTURE Amaran 200X",
    price: "$54.000 por jornada",
    image: "/fotos-catalogo/p87.png",
    category: "luces",
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
  },
  {
    id: "p90",
    title: "Valija ASTERA Titan Tube x8",
    price: "$265.000 por jornada",
    image: "/fotos-catalogo/p90.png",
    category: "luces",
  },
  {
    id: "p91",
    title: "Valija DEDOLIGHT 150w/100w (tungsteno)",
    price: "$82.000 por jornada",
    image: "/fotos-catalogo/p91.png",
    category: "luces",
  },
  {
    id: "p92",
    title: "Switcher BLACKMAGIC TV Pro 4K",
    price: "$126.000 por jornada",
    image: "/fotos-catalogo/p92.png",
    category: "videoassist",
  },
  {
    id: "p93",
    title: "Monitor 24'' SMALL HD 2403",
    price: "$90.000 por jornada",
    image: "/fotos-catalogo/p93.png",
    category: "videoassist",
  },
  {
    id: "p94",
    title: "Monitor 17'' SMALL HD 1703 o FLANDERS FSI 17",
    price: "$100.000 por jornada",
    image: "/fotos-catalogo/p94.png",
    category: "videoassist",
  },
  {
    id: "p95",
    title: "Monitor 5.6'' TV Logic (055/056/058)",
    price: "$36.000 por jornada",
    image: "/fotos-catalogo/p95.png",
    category: "videoassist",
  },
  {
    id: "p96",
    title: "Grabador on board ATOMOS Shogun 7",
    price: "$68.000 por jornada",
    image: "/fotos-catalogo/p96.png",
    category: "videoassist",
  },
  {
    id: "p97",
    title: "Roland V-02HD",
    price: "$40.000 por jornada",
    image: "/fotos-catalogo/p97.png",
    category: "videoassist",
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
  },
  {
    id: "p101",
    title: "DJI Ronin S2",
    price: "$82.000 por jornada",
    image: "/fotos-catalogo/p101.png",
    category: "estabilizadores",
  },
  {
    id: "p102",
    title: "DJI Ronin S3",
    price: "$100.000 por jornada",
    image: "/fotos-catalogo/p102.png",
    category: "estabilizadores",
  },
  {
    id: "p103",
    title: "Cargador Alta Velocidad + 4 Baterías 220 V",
    price: "$106.000 por jornada",
    image: "/fotos-catalogo/p103.png",
    category: "otros",
  },
  {
    id: "p104",
    title: "Batería V-Mount C150 IDX/SWIT",
    price: "$14.000 por jornada",
    image: "/fotos-catalogo/p104.png",
    category: "otros",
  },
  {
    id: "p105",
    title: "Proyector 3500/4000 Lumens",
    price: "$64.000 por jornada",
    image: "/fotos-catalogo/p105.png",
    category: "otros",
  },
  {
    id: "p106",
    title: "Pantalla Proyector 100''",
    price: "$22.000 por jornada",
    image: "/fotos-catalogo/p106.png",
    category: "otros",
  },
  {
    id: "p107",
    title: "Máquina de humo 900 W",
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
  },
  {
    id: "p109",
    title: "Carro Magliner OX",
    price: "$50.000 por jornada",
    image: "/fotos-catalogo/p109.png",
    category: "otros",
  },
  {
    id: "p110",
    title: "Trípode Cranck-O B150",
    price: "$70.000 por jornada",
    image: "/fotos-catalogo/p110.png",
    category: "griperia",
  },
  {
    id: "p111",
    title: "Trípode Cranck-O B140/B100",
    price: "$50.000 por jornada",
    image: "/fotos-catalogo/p111.png",
    category: "griperia",
  },
  {
    id: "p112",
    title: "Trípode Hi-Hi / A330",
    price: "$24.000 por jornada",
    image: "/fotos-catalogo/p112.png",
    category: "griperia",
  },
  {
    id: "p113",
    title: "Trípode Dexel / Manfrotto / Avenger comunes",
    price: "$3.500 por jornada",
    image: "/fotos-catalogo/p113.png",
    category: "griperia",
  },
  {
    id: "p114",
    title: "Trípode Dexel / Manfrotto / Avenger COMBO",
    price: "$5.000 por jornada",
    image: "/fotos-catalogo/p114.png",
    category: "griperia",
  },
  {
    id: "p115",
    title: "Kit x3 ruedas para trípode combo",
    price: "$7.500 por jornada",
    image: "/fotos-catalogo/p115.png",
    category: "griperia",
  },
  {
    id: "p116",
    title: "Boom Avenger con pesa D650",
    price: "$14.000 por jornada",
    image: "/fotos-catalogo/p116.png",
    category: "griperia",
  },
  {
    id: "p117",
    title: "Gripería común (D200/coco/pelicano/grampa C/portatelgo)",
    price: "$4.000 por jornada",
    image: "/fotos-catalogo/p117.png",
    category: "griperia",
  },
  {
    id: "p118",
    title: "Sopapa Avenger",
    price: "$12.500 por jornada",
    image: "/fotos-catalogo/p118.png",
    category: "griperia",
  },
  {
    id: "p119",
    title: "Marco ó bandera",
    price: "$3.500 por jornada",
    image: "/fotos-catalogo/p119.png",
    category: "griperia",
  },
  {
    id: "p120",
    title: "Kit x10 banderas tela negra",
    price: "$30.000 por jornada",
    image: "/fotos-catalogo/p120.png",
    category: "griperia",
  },
  {
    id: "p121",
    title: "Kit x6 NET Matthews",
    price: "$36.000 por jornada",
    image: "/fotos-catalogo/p121.png",
    category: "griperia",
  },
  {
    id: "p122",
    title: "Tamiz 6x6 con juego de telas",
    price: "$68.000 por jornada",
    image: "/fotos-catalogo/p122.png",
    category: "griperia",
  },
  {
    id: "p123",
    title: "Tamiz AVENGER 3,60 mts con 3 telas",
    price: "$50.000 por jornada",
    image: "/fotos-catalogo/p123.png",
    category: "griperia",
  },
  {
    id: "p124",
    title: "Tamiz AVENGER 2,40 mts con 3 telas",
    price: "$36.000 por jornada",
    image: "/fotos-catalogo/p124.png",
    category: "griperia",
  },
  {
    id: "p125",
    title: "Tamiz 4x4 OX con juego de telas",
    price: "$36.000 por jornada",
    image: "/fotos-catalogo/p125.png",
    category: "griperia",
  },
  {
    id: "p126",
    title: "Tamiz 2x2 OX con juego de telas",
    price: "$26.000 por jornada",
    image: "/fotos-catalogo/p126.png",
    category: "griperia",
  },
  {
    id: "p127",
    title: "Telón 6x6 mts (negro, blanco ó silk)",
    price: "$17.000 por jornada",
    image: "/fotos-catalogo/p127.png",
    category: "griperia",
  },
  {
    id: "p128",
    title: "Telón 4x4 mts (negro, blanco ó silk)",
    price: "$11.000 por jornada",
    image: "/fotos-catalogo/p128.png",
    category: "griperia",
  },
  {
    id: "p129",
    title: "Telón 2x2 mts (negro, blanco ó silk)",
    price: "$5.500 por jornada",
    image: "/fotos-catalogo/p129.png",
    category: "griperia",
  },
  {
    id: "p130",
    title: "Tela Chroma 6x6",
    price: "$21.000 por jornada",
    image: "/fotos-catalogo/p130.png",
    category: "griperia",
  },
  {
    id: "p131",
    title: "Tela Chroma 4x4",
    price: "$15.000 por jornada",
    image: "/fotos-catalogo/p131.png",
    category: "griperia",
  },
  {
    id: "p132",
    title: "Tela Chroma 2x2",
    price: "$6.500 por jornada",
    image: "/fotos-catalogo/p132.png",
    category: "griperia",
  },
  {
    id: "p133",
    title: "Telas Especiales 4x4 - ULTRABOUNCE",
    price: "$31.000 por jornada",
    image: "/fotos-catalogo/p133.png",
    category: "griperia",
  },
  {
    id: "p134",
    title: "Telas Especiales 4x4 - Grid Cloth",
    price: "$15.000 por jornada",
    image: "/fotos-catalogo/p134.png",
    category: "griperia",
  },
  {
    id: "p135",
    title: "Telas Especiales 2x2 - Grid Cloth",
    price: "$12.500 por jornada",
    image: "/fotos-catalogo/p135.png",
    category: "griperia",
  },
  {
    id: "p136",
    title: "Pantalla refractaria 1x1 (sin trípode)",
    price: "$8.500 por jornada",
    image: "/fotos-catalogo/p136.png",
    category: "griperia",
  },
  {
    id: "p137",
    title: "Escalera fibra de vidrio",
    price: "$13.500 por jornada",
    image: "/fotos-catalogo/p137.png",
    category: "griperia",
  },
  {
    id: "p138",
    title: "Tres medidas (full / half / ¼)",
    price: "$4.250 por jornada",
    image: "/fotos-catalogo/p138.png",
    category: "griperia",
  },
  {
    id: "p139",
    title: "Reflector plateado 1x1 con pinza",
    price: "$7.000 por jornada",
    image: "/fotos-catalogo/p139.png",
    category: "griperia",
  },
  {
    id: "p140",
    title: "Soporte telescópico Avenger",
    price: "$11.000 por jornada",
    image: "/fotos-catalogo/p140.png",
    category: "griperia",
  },
  {
    id: "p141",
    title: "Difusor 1x1 tipo silk",
    price: "$4.250 por jornada",
    image: "/fotos-catalogo/p141.png",
    category: "griperia",
  },
];

// =============================================================
// === FUNCIONES Y COMPONENTE PRINCIPAL =========================
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

// 🔧 Normaliza texto (quita tildes y pasa a minúsculas)
function normalize(s) {
  return s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

// 🔧 Aplica filtros y ordenamiento
function applyFiltersAndSort(items, { q, selectedCats, sortKey }) {
  let data = [...items];

  // 🔍 Filtro por búsqueda
  if (q) {
    const nq = normalize(q);
    data = data.filter(
      (it) =>
        normalize(it.title).includes(nq) || normalize(it.category).includes(nq)
    );
  }

  // 🏷️ Filtro por categoría
  if (selectedCats.size > 0)
    data = data.filter((it) => selectedCats.has(it.category));

  // 🔢 Conversión de precios a número (por si vienen con texto)
  data = data.map((it) => {
    const numericPrice =
  typeof it.price === "number"
    ? it.price
    : parseFloat(
        it.price
          .toString()
          .replace(/\./g, "")              // ✅ borra los puntos de miles
          .replace(/[^0-9,]+/g, "")        // ✅ deja solo números y coma decimal
          .replace(",", ".")               // ✅ cambia coma por punto si hay
      ) || 0;
    return { ...it, price: numericPrice };
  });

  // 🔤 Ordenamiento alfabético
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

const CatalogPage = () => {
  const [q, setQ] = useState("");
  const [selectedCats, setSelectedCats] = useState(new Set());
  const [sortKey, setSortKey] = useState("az");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();

  // 🔁 Detecta categoría desde la URL (?cat=)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("cat");
    if (cat) {
      setSelectedCats(new Set([cat.toLowerCase()]));
    } else {
      setSelectedCats(new Set());
    }
    setCurrentPage(1);
  }, [location.search]);

  // 🔍 Calcula los resultados filtrados y ordenados
  const results = useMemo(
    () => applyFiltersAndSort(ALL_ITEMS, { q, selectedCats, sortKey }),
    [q, selectedCats, sortKey]
  );

  // 📄 Paginación
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

  // 🧩 Sidebar de filtros
  const FilterContent = (
    <Sidebar className="rounded-xl shadow-sm bg-gray-900/80 backdrop-blur border border-gray-800 p-2">
      <div className="px-4 py-3">
        <p className="text-sm font-semibold">Filtrar por categoría</p>
      </div>
      <div className="px-4 py-2 space-y-2">
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
      <div className="h-20" />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        {/* 🔹 Encabezado */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Catálogo de Equipos
            </h1>
            <p className="text-gray-300 mt-2">
              Equipos disponibles • {results.length} resultados
            </p>
          </div>

          {/* 🔍 Buscador y orden (desktop) */}
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

        {/* 🔹 Filtros mobile */}
        <div className="mt-6 flex items-center justify-between md:hidden">
          <Button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-700"
          >
            <FunnelIcon className="w-5 h-5 text-[#2A86E2]" />
            <span className="text-sm text-gray-200">Filtrar</span>
          </Button>
          <p className="text-sm text-gray-400">{results.length} productos</p>
        </div>

        <Drawer
          open={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          position="left"
        >
          <DrawerHeader title="Filtros" />
          <DrawerItems>{FilterContent}</DrawerItems>
        </Drawer>

        {/* 🔹 Grilla principal */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="hidden lg:block lg:col-span-3">
            {FilterContent}
          </aside>

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
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {paginatedResults.map((item) => (
                    <CatalogItem
                      key={item.id}
                      item={item}
                      onClick={() =>
                        console.log("Ver producto:", item.id)
                      }
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* 🔹 Paginación */}
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