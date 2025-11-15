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
    price: "$260.000 por jornada",
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
{
  id: "p164",
  title: "Hitachi CK-2B",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p164.png",
  category: "utileria television",
},
{
  id: "p165",
  title: "Sony Power HAD EX",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p165.png",
  category: "utileria television",
},
{
  id: "p166",
  title: "Sony Power HAD EX",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p166.png",
  category: "utileria television",
},
{
  id: "p167",
  title: "Sony Camcorder",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p167.png",
  category: "utileria television",
},
{
  id: "p168",
  title: "Sony Camcorder",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p168.png",
  category: "utileria television",
},
{
  id: "p169",
  title: "Sony Camcorder",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p169.png",
  category: "utileria television",
},
{
  id: "p170",
  title: "Sony DSR-250",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p170.png",
  category: "utileria television",
},
{
  id: "p171",
  title: "Sony CA-537P",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p171.png",
  category: "utileria television",
},
{
  id: "p172",
  title: "Sony BVW-200P",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p172.png",
  category: "utileria television",
},
{
  id: "p173",
  title: "Sony DXC-M3AP",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p173.png",
  category: "utileria television",
},
{
  id: "p174",
  title: "Sony DXC-M7P",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p174.png",
  category: "utileria television",
},
{
  id: "p175",
  title: "Sony UVW-100BP",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p175.png",
  category: "utileria television",
},
{
  id: "p176",
  title: "Sony BXC-537AP",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p176.png",
  category: "utileria television",
},
{
  id: "p177",
  title: "Sony BVP-SP",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p177.png",
  category: "utileria television",
},
{
  id: "p178",
  title: "Sony DXC-M3AP",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p178.png",
  category: "utileria television",
},
{
  id: "p179",
  title: "JVC KY-19E",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p179.png",
  category: "utileria television",
},
{
  id: "p180",
  title: "JVC KY-19E",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p180.png",
  category: "utileria television",
},
{
  id: "p181",
  title: "Panasonic WV-F700",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p181.png",
  category: "utileria television",
},
{
  id: "p182",
  title: "Panasonic WV-F250E",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p182.png",
  category: "utileria television",
},
{
  id: "p183",
  title: "BTS LDK-0391",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p183.png",
  category: "utileria television",
},
{
  id: "p184",
  title: "Ikegami ITC-735",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p184.png",
  category: "utileria television",
},
{
  id: "p185",
  title: "Grafex Speed Graphic",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p185.png",
  category: "utileria fotografia",
},
{
  id: "p186",
  title: "Agfa Karat 12",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p186.png",
  category: "utileria fotografia",
},
{
  id: "p187",
  title: "Agfa Optima Ia",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p187.png",
  category: "utileria fotografia",
},
{
  id: "p188",
  title: "Agfa Silette",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p188.png",
  category: "utileria fotografia",
},
{
  id: "p189",
  title: "Agfa Silette-L",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p189.png",
  category: "utileria fotografia",
},
{
  id: "p190",
  title: "Agfa Silette-LK Pronto-LK",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p190.png",
  category: "utileria fotografia",
},
{
  id: "p191",
  title: "Agfa Super Silette-L",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p191.png",
  category: "utileria fotografia",
},
{
  id: "p192",
  title: "Argus C3 Type IV",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p192.png",
  category: "utileria fotografia",
},
{
  id: "p193",
  title: "Asahi Pentax",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p193.png",
  category: "utileria fotografia",
},
{
  id: "p194",
  title: "Balda Baldessa Ia",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p194.png",
  category: "utileria fotografia",
},
{
  id: "p195",
  title: "Balda Mess Baldinette",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p195.png",
  category: "utileria fotografia",
},
{
  id: "p196",
  title: "Baldinette Balda",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p196.png",
  category: "utileria fotografia",
},
{
  id: "p197",
  title: "Beire Beirette VSN",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p197.png",
  category: "utileria fotografia",
},
{
  id: "p198",
  title: "Beirette VSN Noire",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p198.png",
  category: "utileria fotografia",
},
{
  id: "p199",
  title: "Canon A-1",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p199.png",
  category: "utileria fotografia",
},
{
  id: "p200",
  title: "Canon AE-1",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p200.png",
  category: "utileria fotografia",
},
{
  id: "p201",
  title: "Canon AE-1 Program",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p201.png",
  category: "utileria fotografia",
},
{
  id: "p202",
  title: "Canon Canonet QL17 G-III",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p202.png",
  category: "utileria fotografia",
},
{
  id: "p203",
  title: "Canon EF-M",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p203.png",
  category: "utileria fotografia",
},
{
  id: "p204",
  title: "Canon EOS Rebel XT",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p204.png",
  category: "utileria fotografia",
},
{
  id: "p205",
  title: "Canon EOS 1000F",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p205.png",
  category: "utileria fotografia",
},
{
  id: "p206",
  title: "Canon EOS 100QD",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p206.png",
  category: "utileria fotografia",
},
{
  id: "p207",
  title: "Canon EOS 500",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p207.png",
  category: "utileria fotografia",
},
{
  id: "p208",
  title: "Canon EOS 5000",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p208.png",
  category: "utileria fotografia",
},
{
  id: "p209",
  title: "Canon RM Canonflex",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p209.png",
  category: "utileria fotografia",
},
{
  id: "p210",
  title: "Canon T70",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p210.png",
  category: "utileria fotografia",
},
{
  id: "p211",
  title: "Chinon CE-4s",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p211.png",
  category: "utileria fotografia",
},
{
  id: "p212",
  title: "Civica BF-100",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p212.png",
  category: "utileria fotografia",
},
{
  id: "p213",
  title: "Efica Splendor 120",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p213.png",
  category: "utileria fotografia",
},
{
  id: "p214",
  title: "Ensign 2 1/4 B",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p214.png",
  category: "utileria fotografia",
},
{
  id: "p215",
  title: "Exakta Varex VX Jhagee Dresden",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p215.png",
  category: "utileria fotografia",
},
{
  id: "p216",
  title: "Eyelux Amica Intl Corp",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p216.png",
  category: "utileria fotografia",
},
{
  id: "p217",
  title: "Fujica 35 Auto-W",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p217.png",
  category: "utileria fotografia",
},
{
  id: "p218",
  title: "Fujifilm FinePix A700",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p218.png",
  category: "utileria fotografia",
},
{
  id: "p219",
  title: "Fujifilm S9100",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p219.png",
  category: "utileria fotografia",
},
{
  id: "p220",
  title: "Halina Rolls",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p220.png",
  category: "utileria fotografia",
},
{
  id: "p221",
  title: "Hasselblad 500 EL",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p221.png",
  category: "utileria fotografia",
},
{
  id: "p222",
  title: "Hasselblad 500C",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p222.png",
  category: "utileria fotografia",
},
{
  id: "p223",
  title: "Kiev 4A",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p223.png",
  category: "utileria fotografia",
},
{
  id: "p224",
  title: "King Rectamat Dominant",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p224.png",
  category: "utileria fotografia",
},
{
  id: "p225",
  title: "Kodak Ball Bearing Shutter 25 BT 50",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p225.png",
  category: "utileria fotografia",
},
{
  id: "p226",
  title: "Kodak EasyShare C140",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p226.png",
  category: "utileria fotografia",
},
{
  id: "p227",
  title: "Kodak EasyShare C653",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p227.png",
  category: "utileria fotografia",
},
{
  id: "p228",
  title: "Kodak EasyShare CX4300",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p228.png",
  category: "utileria fotografia",
},
{
  id: "p229",
  title: "Kodak EC300",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p229.png",
  category: "utileria fotografia",
},
{
  id: "p230",
  title: "Kodak EC70",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p230.png",
  category: "utileria fotografia",
},
{
  id: "p231",
  title: "Kodak Fiesta Instant",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p231.png",
  category: "utileria fotografia",
},
{
  id: "p232",
  title: "Kodak Instamatic 155 X",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p232.png",
  category: "utileria fotografia",
},
{
  id: "p233",
  title: "Kodak Retina Automatic III",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p233.png",
  category: "utileria fotografia",
},
{
  id: "p234",
  title: "Kodak Star AF",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p234.png",
  category: "utileria fotografia",
},
{
  id: "p235",
  title: "Konica Auto-S",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p235.png",
  category: "utileria fotografia",
},
{
  id: "p236",
  title: "Konica Arborg",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p236.png",
  category: "utileria fotografia",
},
{
  id: "p237",
  title: "Konica C35",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p237.png",
  category: "utileria fotografia",
},
{
  id: "p238",
  title: "Konica SIII",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p238.png",
  category: "utileria fotografia",
},
{
  id: "p239",
  title: "KW Pilot",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p239.png",
  category: "utileria fotografia",
},
{
  id: "p240",
  title: "Leica R4s",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p240.png",
  category: "utileria fotografia",
},
{
  id: "p241",
  title: "Leica Ernst Leitz Wetzlar",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p241.png",
  category: "utileria fotografia",
},
{
  id: "p242",
  title: "Mamiya 528 AL",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p242.png",
  category: "utileria fotografia",
},
{
  id: "p243",
  title: "Mamiya 528 TL",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p243.png",
  category: "utileria fotografia",
},
{
  id: "p244",
  title: "Mamiya M645",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p244.png",
  category: "utileria fotografia",
},
{
  id: "p245",
  title: "Mamiya NC1000s Chrome",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p245.png",
  category: "utileria fotografia",
},
{
  id: "p246",
  title: "Mamiya RB67 Professional",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p246.png",
  category: "utileria fotografia",
},
{
  id: "p247",
  title: "Mamiya RZ67 Professional",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p247.png",
  category: "utileria fotografia",
},
{
  id: "p248",
  title: "Mamiyaflex",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p248.png",
  category: "utileria fotografia",
},
{
  id: "p249",
  title: "Minolta AF-E",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p249.png",
  category: "utileria fotografia",
},
{
  id: "p250",
  title: "Minolta AF-Tele Super",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p250.png",
  category: "utileria fotografia",
},
{
  id: "p251",
  title: "Minolta Freedom Zoom 125",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p251.png",
  category: "utileria fotografia",
},
{
  id: "p252",
  title: "Minolta Maxxum 400si",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p252.png",
  category: "utileria fotografia",
},
{
  id: "p253",
  title: "Miranda Sensomat",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p253.png",
  category: "utileria fotografia",
},
{
  id: "p254",
  title: "Nikon AF F-401s",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p254.png",
  category: "utileria fotografia",
},
{
  id: "p255",
  title: "Nikon AF F-601",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p255.png",
  category: "utileria fotografia",
},
{
  id: "p256",
  title: "Nikon D100",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p256.png",
  category: "utileria fotografia",
},
{
  id: "p257",
  title: "Nikon D200",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p257.png",
  category: "utileria fotografia",
},
{
  id: "p258",
  title: "Nikon D50",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p258.png",
  category: "utileria fotografia",
},
{
  id: "p259",
  title: "Nikon D50",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p259.png",
  category: "utileria fotografia",
},
{
  id: "p260",
  title: "Nikon D70s",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p260.png",
  category: "utileria fotografia",
},
{
  id: "p261",
  title: "Nikon D80",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p261.png",
  category: "utileria fotografia",
},
{
  id: "p262",
  title: "Nikon EM",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p262.png",
  category: "utileria fotografia",
},
{
  id: "p263",
  title: "Nikon F Photomic FTN",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p263.png",
  category: "utileria fotografia",
},
{
  id: "p264",
  title: "Nikon F-401s",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p264.png",
  category: "utileria fotografia",
},
{
  id: "p265",
  title: "Nikon F-401x",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p265.png",
  category: "utileria fotografia",
},
{
  id: "p266",
  title: "Nikon F-601",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p266.png",
  category: "utileria fotografia",
},
{
  id: "p267",
  title: "Nikon F2 Photomic",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p267.png",
  category: "utileria fotografia",
},
{
  id: "p268",
  title: "Nikon F3",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p268.png",
  category: "utileria fotografia",
},
{
  id: "p269",
  title: "Nikon F4",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p269.png",
  category: "utileria fotografia",
},
{
  id: "p270",
  title: "Nikon F70",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p270.png",
  category: "utileria fotografia",
},
{
  id: "p271",
  title: "Nikon F90X",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p271.png",
  category: "utileria fotografia",
},
{
  id: "p272",
  title: "Nikon N2020 AF (F-501)",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p272.png",
  category: "utileria fotografia",
},
{
  id: "p273",
  title: "Nikon N50 (F50)",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p273.png",
  category: "utileria fotografia",
},
{
  id: "p274",
  title: "Nikon N90s",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p274.png",
  category: "utileria fotografia",
},
{
  id: "p275",
  title: "Nikon Nikomat FTN",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p275.png",
  category: "utileria fotografia",
},
{
  id: "p276",
  title: "Olympus AZ-300 Superzoom",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p276.png",
  category: "utileria fotografia",
},
{
  id: "p277",
  title: "Olympus D-535 Zoom",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p277.png",
  category: "utileria fotografia",
},
{
  id: "p278",
  title: "Olympus FE-200",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p278.png",
  category: "utileria fotografia",
},
{
  id: "p279",
  title: "Olympus IS-1000",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p279.png",
  category: "utileria fotografia",
},
{
  id: "p280",
  title: "Olympus OM 88",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p280.png",
  category: "utileria fotografia",
},
{
  id: "p281",
  title: "Olympus Stylus Zoom 70",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p281.png",
  category: "utileria fotografia",
},
{
  id: "p282",
  title: "Olympus Trip MD2",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p282.png",
  category: "utileria fotografia",
},
{
  id: "p283",
  title: "Polaroid 350",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p283.png",
  category: "utileria fotografia",
},
{
  id: "p284",
  title: "Prakti",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p284.png",
  category: "utileria fotografia",
},
{
  id: "p285",
  title: "Praktica Super TL",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p285.png",
  category: "utileria fotografia",
},
{
  id: "p286",
  title: "Protax",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p286.png",
  category: "utileria fotografia",
},
{
  id: "p287",
  title: "Regula IID King KG",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p287.png",
  category: "utileria fotografia",
},
{
  id: "p288",
  title: "Regulette 250 SB",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p288.png",
  category: "utileria fotografia",
},
{
  id: "p289",
  title: "Ricoh KR-5",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p289.png",
  category: "utileria fotografia",
},
{
  id: "p290",
  title: "Rokinon Happy S",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p290.png",
  category: "utileria fotografia",
},
{
  id: "p291",
  title: "Rolleiflex SL66",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p291.png",
  category: "utileria fotografia",
},
{
  id: "p292",
  title: "Sakar FF-16",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p292.png",
  category: "utileria fotografia",
},
{
  id: "p293",
  title: "Sanyo S770",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p293.png",
  category: "utileria fotografia",
},
{
  id: "p294",
  title: "Seagul",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p294.png",
  category: "utileria fotografia",
},
{
  id: "p295",
  title: "Sigma SA-7",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p295.png",
  category: "utileria fotografia",
},
{
  id: "p296",
  title: "Sony Cybershot DSC-R1",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p296.png",
  category: "utileria fotografia",
},
{
  id: "p297",
  title: "Sony Cybershot DSC-S700",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p297.png",
  category: "utileria fotografia",
},
{
  id: "p298",
  title: "Sony Cybershot DSC-W55",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p298.png",
  category: "utileria fotografia",
},
{
  id: "p299",
  title: "Vito LS Special",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p299.png",
  category: "utileria fotografia",
},
{
  id: "p300",
  title: "Voigtländer Bessa",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p300.png",
  category: "utileria fotografia",
},
{
  id: "p301",
  title: "Voigtlander Bessamatic Deluxe 2",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p301.png",
  category: "utileria fotografia",
},
{
  id: "p302",
  title: "Voigtlander Tiefenscharfetabelle",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p302.png",
  category: "utileria fotografia",
},
{
  id: "p303",
  title: "Voigtlander Vitessa L",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p303.png",
  category: "utileria fotografia",
},
{
  id: "p304",
  title: "Voigtlander Vito CD Deluxe",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p304.png",
  category: "utileria fotografia",
},
{
  id: "p305",
  title: "Voigtlander Vito CL Standard",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p305.png",
  category: "utileria fotografia",
},
{
  id: "p306",
  title: "Voigtlander Vitoret DR",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p306.png",
  category: "utileria fotografia",
},
{
  id: "p307",
  title: "Werlisa Club Color",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p307.png",
  category: "utileria fotografia",
},
{
  id: "p308",
  title: "Yashica 270 Auto Focus",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p308.png",
  category: "utileria fotografia",
},
{
  id: "p309",
  title: "Yashica 270AF",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p309.png",
  category: "utileria fotografia",
},
{
  id: "p310",
  title: "Yashica 635",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p310.png",
  category: "utileria fotografia",
},
{
  id: "p311",
  title: "Yashica Dental Eye II",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p311.png",
  category: "utileria fotografia",
},
{
  id: "p312",
  title: "Yashica FRI",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p312.png",
  category: "utileria fotografia",
},
{
  id: "p313",
  title: "Yashica M-3",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p313.png",
  category: "utileria fotografia",
},
{
  id: "p314",
  title: "Yashica Minister D",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p314.png",
  category: "utileria fotografia",
},
{
  id: "p315",
  title: "Zehum 3M",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p315.png",
  category: "utileria fotografia",
},
{
  id: "p316",
  title: "Zeiss Ikon Bob 510/2",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p316.png",
  category: "utileria fotografia",
},
{
  id: "p317",
  title: "Zeiss Ikon Colora",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p317.png",
  category: "utileria fotografia",
},
{
  id: "p318",
  title: "Zeiss Ikon Contaflex I",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p318.png",
  category: "utileria fotografia",
},
{
  id: "p319",
  title: "Zeiss Ikon Contaflex III",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p319.png",
  category: "utileria fotografia",
},
{
  id: "p320",
  title: "Zeiss Ikon Contaflex IV",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p320.png",
  category: "utileria fotografia",
},
{
  id: "p321",
  title: "Zeiss Ikon Contaflex Super (Old)",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p321.png",
  category: "utileria fotografia",
},
{
  id: "p322",
  title: "Zeiss Ikon Contaflex Super B",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p322.png",
  category: "utileria fotografia",
},
{
  id: "p323",
  title: "Zeiss Ikon Contax II",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p323.png",
  category: "utileria fotografia",
},
{
  id: "p324",
  title: "Zenit 12XP",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p324.png",
  category: "utileria fotografia",
},
{
  id: "p325",
  title: "Controladora Grass Valley Group",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p325.png",
  category: "utileria television",
},
{
  id: "p326",
  title: "Teclado Avelas",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p326.png",
  category: "utileria television",
},
{
  id: "p327",
  title: "Controladora Sony",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p327.png",
  category: "utileria television",
},
{
  id: "p328",
  title: "Controladora FOR.A",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p328.png",
  category: "utileria television",
},
{
  id: "p329",
  title: "Teclado Sony",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p329.png",
  category: "utileria television",
},
{
  id: "p330",
  title: "Controladora Pelco",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p330.png",
  category: "utileria television",
},
{
  id: "p331",
  title: "Controladora Echolab",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p331.png",
  category: "utileria television",
},
{
  id: "p332",
  title: "Controladora JVC",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p332.png",
  category: "utileria television",
},
{
  id: "p333",
  title: "Controladora Panasonic",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p333.png",
  category: "utileria television",
},
{
  id: "p334",
  title: "Switcher PNL",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p334.png",
  category: "utileria television",
},
{
  id: "p335",
  title: "Switcher Sony",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p335.png",
  category: "utileria television",
},
{
  id: "p336",
  title: "Switcher",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p336.png",
  category: "utileria television",
},
{
  id: "p337",
  title: "Bosch Fernseh",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p337.png",
  category: "utileria television",
},
{
  id: "p338",
  title: "Sony BVP-900P",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p338.png",
  category: "utileria television",
},
{
  id: "p339",
  title: "Tripode y cabezal Manfrotto",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p339.png",
  category: "utileria",
},
{
  id: "p340",
  title: "Tripode y cabezal Daiwa",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p340.png",
  category: "utileria",
},
{
  id: "p341",
  title: "Tripode y cabezal Libec",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p341.png",
  category: "utileria",
},
{
  id: "p342",
  title: "Tripode y cabezal Cartoni",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p342.png",
  category: "utileria",
},
{
  id: "p343",
  title: "Tripode y cabezal ARRI",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p343.png",
  category: "utileria",
},
{
  id: "p344",
  title: "Tripode y cabezal Shotoku",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p344.png",
  category: "utileria",
},
{
  id: "p345",
  title: "Tripode y cabezal ITE",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p345.png",
  category: "utileria",
},
{
  id: "p346",
  title: "Tripode y cabezal Killi Munchen",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p346.png",
  category: "utileria",
},
{
  id: "p347",
  title: "Tripode y cabezal Peter Lisand",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p347.png",
  category: "utileria",
},
{
  id: "p349",
  title: "Tripode y cabezal Hercules",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p349.png",
  category: "utileria",
},
{
  id: "p350",
  title: "Tripode y cabezal Vinten",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p350.png",
  category: "utileria",
},
{
  id: "p351",
  title: "Tripode y cabezal Matthews",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p351.png",
  category: "utileria",
},
{
  id: "p353",
  title: "Arriflex 535B",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p353.png",
  category: "utileria cine",
},
{
  id: "p354",
  title: "Arri BL4S",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p354.png",
  category: "utileria cine",
},
{
  id: "p355",
  title: "Arri BL3",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p355.png",
  category: "utileria cine",
},
{
  id: "p356",
  title: "Arri BL1",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p356.png",
  category: "utileria cine",
},
{
  id: "p357",
  title: "Arri 3",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p357.png",
  category: "utileria cine",
},
{
  id: "p358",
  title: "Arri 2 Evolution",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p358.png",
  category: "utileria cine",
},
{
  id: "p359",
  title: "Arri 2C",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p359.png",
  category: "utileria cine",
},
{
  id: "p360",
  title: "Mitchell NC",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p360.png",
  category: "utileria cine",
},
{
  id: "p361",
  title: "Mitchell NC (Estudio San Miguel - Guerra Gaucha)",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p361.png",
  category: "utileria cine",
},
{
  id: "p362",
  title: "Mitchell NC para animación (ex García Ferré)",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p362.png",
  category: "utileria cine",
},
{
  id: "p363",
  title: "Cabezal Mitchell Geared Head",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p363.png",
  category: "utileria cine",
},
{
  id: "p364",
  title: "Cabezal Arri Head",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p364.png",
  category: "utileria cine",
},
{
  id: "p365",
  title: "Aaton Minima",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p365.png",
  category: "utileria cine",
},
{
  id: "p366",
  title: "Arri SR2 Slow Motion",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p366.png",
  category: "utileria cine",
},
{
  id: "p367",
  title: "Beaulieu R16",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p367.png",
  category: "utileria cine",
},
{
  id: "p368",
  title: "Éclair ACL",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p368.png",
  category: "utileria cine",
},
{
  id: "p369",
  title: "Super 8 Beaulieu",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p369.png",
  category: "utileria cine",
},
{
  id: "p370",
  title: "Super 8 Canon",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p370.png",
  category: "utileria cine",
},
{
  id: "p371",
  title: "Super 8 Fujinon",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p371.png",
  category: "utileria cine",
},
{
  id: "p372",
  title: "Super 8 Chinon",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p372.png",
  category: "utileria cine",
},
{
  id: "p373",
  title: "Super 8 (Genérico - varias unidades)",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p373.png",
  category: "utileria cine",
},
{
  id: "p374",
  title: "Torre operador de sonido y caña Mole Richardson",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p374.png",
  category: "utileria cine",
},
{
  id: "p375",
  title: "Fresnel 10K Mole Richardson",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p375.png",
  category: "utileria cine",
},
{
  id: "p376",
  title: "Fresnel 5K Mole Richardson",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p376.png",
  category: "utileria cine",
},
{
  id: "p377",
  title: "Fresnel 2K Mole Richardson",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p377.png",
  category: "utileria cine",
},
{
  id: "p378",
  title: "Fresnel 1K Mole Richardson",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p378.png",
  category: "utileria cine",
},
{
  id: "p379",
  title: "Luces abiertas",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p379.png",
  category: "utileria cine",
},
{
  id: "p380",
  title: "Trípode antiguo Mole Richardson",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p380.png",
  category: "utileria cine",
},
{
  id: "p381",
  title: "Crank-O Mole Richardson",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p381.png",
  category: "utileria cine",
},
{
  id: "p382",
  title: "Gripería antigua",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p382.png",
  category: "utileria cine",
},
{
  id: "p383",
  title: "Pantalla reflectora antigua",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p383.png",
  category: "utileria cine",
},
{
  id: "p384",
  title: "Ascensores antiguos",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p384.png",
  category: "utileria cine",
},
{
  id: "p385",
  title: "Claquetas antiguas",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p385.png",
  category: "utileria cine",
},
{
  id: "p386",
  title: "Sillas de director",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p386.png",
  category: "utileria cine",
},
{
  id: "p387",
  title: "Anviles antiguos",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p387.png",
  category: "utileria cine",
},
{
  id: "p388",
  title: "Estuches antiguos",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p388.png",
  category: "utileria cine",
},
{
  id: "p389",
  title: "Bolsos antiguos",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p389.png",
  category: "utileria cine",
},
{
  id: "p390",
  title: "Balijas antiguas",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p390.png",
  category: "utileria cine",
},
{
  id: "p391",
  title: "Distribución, cables y tableros antiguos",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p391.png",
  category: "utileria cine",
},
{
  id: "p392",
  title: "Dolly Elemack Spider",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p392.png",
  category: "utileria cine",
},
{
  id: "p393",
  title: "Chasis",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p393.png",
  category: "utileria cine",
},
{
  id: "p394",
  title: "Latas de película",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p394.png",
  category: "utileria cine",
},
{
  id: "p395",
  title: "Proyector 35mm de sala",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p395.png",
  category: "utileria cine",
},
{
  id: "p396",
  title: "Proyector 35mm industrial",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p396.png",
  category: "utileria cine",
},
{
  id: "p397",
  title: "Proyector 35mm hogareño",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p397.png",
  category: "utileria cine",
},
{
  id: "p398",
  title: "Proyector 16mm de sala",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p398.png",
  category: "utileria cine",
},
{
  id: "p399",
  title: "Proyector 16mm industrial",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p399.png",
  category: "utileria cine",
},
{
  id: "p400",
  title: "Proyector 16mm hogareño",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p400.png",
  category: "utileria cine",
},
{
  id: "p401",
  title: "Proyector Super 8 industrial",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p401.png",
  category: "utileria cine",
},
{
  id: "p402",
  title: "Proyector Super 8 hogareño",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p402.png",
  category: "utileria cine",
},
{
  id: "p403",
  title: "Linterna mágica de madera",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p403.png",
  category: "utileria cine",
},
{
  id: "p404",
  title: "Linterna mágica de cobre",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p404.png",
  category: "utileria cine",
},
{
  id: "p405",
  title: "Linterna mágica de latón",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p405.png",
  category: "utileria cine",
},
{
  id: "p406",
  title: "Trípode y caña antigua para sonido",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p406.png",
  category: "utileria cine",
},
{
  id: "p407",
  title: "Equipos de cinta abierta",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p407.png",
  category: "utileria cine",
},
{
  id: "p408",
  title: "Cinta abierta Nagra",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p408.png",
  category: "utileria cine",
},
{
  id: "p409",
  title: "Monitor PVM-14",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p409.png",
  category: "utileria television",
},
{
  id: "p410",
  title: "Monitor PVM-14L2",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p410.png",
  category: "utileria television",
},
{
  id: "p411",
  title: "Monitor PVM-14N5U",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p411.png",
  category: "utileria television",
},
{
  id: "p412",
  title: "Monitor PVM-1450QM",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p412.png",
  category: "utileria television",
},
{
  id: "p413",
  title: "Monitor PVM-1440QM",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p413.png",
  category: "utileria television",
},
{
  id: "p414",
  title: "Monitor PVM-14M4E",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p414.png",
  category: "utileria television",
},
{
  id: "p415",
  title: "Monitor PVM-14M4U",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p415.png",
  category: "utileria television",
},
{
  id: "p416",
  title: "Monitor PVM-14M2E",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p416.png",
  category: "utileria television",
},
{
  id: "p417",
  title: "Monitor PVM-14M2U",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p417.png",
  category: "utileria television",
},
{
  id: "p418",
  title: "Monitor PVM-14N1U",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p418.png",
  category: "utileria television",
},
{
  id: "p419",
  title: "Monitor PVM-1351Q",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p419.png",
  category: "utileria television",
},
{
  id: "p420",
  title: "Monitor PVM-1320",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p420.png",
  category: "utileria television",
},
{
  id: "p421",
  title: "Monitor PVM-1371QM",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p421.png",
  category: "utileria television",
},
{
  id: "p422",
  title: "Monitor BVM-1410",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p422.png",
  category: "utileria television",
},
{
  id: "p423",
  title: "Monitor SSM-125CE",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p423.png",
  category: "utileria television",
},
{
  id: "p424",
  title: "Monitor SSM-145N5U",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p424.png",
  category: "utileria television",
},
{
  id: "p425",
  title: "Monitor Solid State",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p425.png",
  category: "utileria television",
},
{
  id: "p426",
  title: "Monitor WV-BM1410/G",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p426.png",
  category: "utileria television",
},
{
  id: "p427",
  title: "Monitor VT-1502",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p427.png",
  category: "utileria television",
},
{
  id: "p428",
  title: "Monitor SMP-150P",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p428.png",
  category: "utileria television",
},
{
  id: "p429",
  title: "Monitor VM-151",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p429.png",
  category: "utileria television",
},
{
  id: "p433",
  title: "Handie Evadin Transceiver TC-55",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p433.png",
  category: "otros",
},
{
  id: "p434",
  title: "Handie Yaesu 2m FM Transceiver FT-26",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p434.png",
  category: "otros",
},
{
  id: "p435",
  title: "Handie Yaesu 2m FM Transceiver FT-23R",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p435.png",
  category: "otros",
},
{
  id: "p436",
  title: "Handie Kenwood TH-26AT FM Transceiver",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p436.png",
  category: "otros",
},
{
  id: "p437",
  title: "Handie Realistic TRC-215",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p437.png",
  category: "otros",
},
{
  id: "p438",
  title: "Handie Kirisun PT4200 FM Transceiver",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p438.png",
  category: "otros",
},
{
  id: "p439",
  title: "Batería Kirisun Li-Poly 7.4v 1200mAh",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p439.png",
  category: "otros",
},
{
  id: "p440",
  title: "Handie Uniden",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p440.png",
  category: "otros",
},
{
  id: "p441",
  title: "Handie Motorola Talkabout T5500",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p441.png",
  category: "otros",
},
{
  id: "p442",
  title: "Handie Motorola T4502",
  price: "Sin precio disponible",
  image: "/fotos-catalogo/p442.png",
  category: "otros",
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

  // === UTILERÍA GENERAL ===
  "utileria",

  // === SUBCATEGORÍAS DETALLADAS ===
  "utileria television",
  "utileria cine",
  "utileria fotografia",
  "utileria cientifica",

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
  if (it.discount === true || it.onSale === true || it.sale === true)
    return true;
  return false;
}

// Aplica búsqueda / filtros / orden
function applyFiltersAndSort(items, { q, selectedCats, sortKey, onlyDiscounted }) {
  let data = [...items];

  // Búsqueda
  if (q) {
    const nq = normalize(q);
    data = data.filter(
      (it) =>
        normalize(it.title).includes(nq) || normalize(it.category).includes(nq)
    );
  }

  // Categorías
  if (selectedCats.size > 0) {
    data = data.filter((it) => selectedCats.has(it.category));
  }

  // Normalizar precios a number
  data = data.map((it) => ({
    ...it,
    price: toNumberPrice(it.price) || 0,
    compareAtPrice:
      it.compareAtPrice !== undefined
        ? toNumberPrice(it.compareAtPrice)
        : it.compareAtPrice,
    salePrice:
      it.salePrice !== undefined ? toNumberPrice(it.salePrice) : it.salePrice,
  }));

  // Solo con descuento
  if (onlyDiscounted) {
    data = data.filter((it) => isDiscounted(it));
  }

  // Orden
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();

  // Lee ?cat= de la URL y deja tildado el filtro inicial
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

  // ============================================================
  // === PANEL DE FILTROS (CON SUBTÍTULO "ARS MACHINA") =========
  // ============================================================
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

      {/* Categorías principales */}
      <div className="px-4 py-2 space-y-2">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
          Categorías
        </p>

        {CATEGORIES.filter(
          (c) => !c.startsWith("utileria ") && c !== "utileria"
        ).map((cat) => (
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

      {/* Bloque ARS MACHINA (UTILERÍA) */}
      <div className="px-4 py-2 space-y-2 mt-4 border-t border-gray-800 pt-4">
        <p className="text-xs uppercase tracking-wide text-[#B45309] font-semibold mb-1">
          ARS MACHINA (UTILERÍA)
        </p>

        {/* utileria general */}
        <label key="utileria" className="flex items-center gap-2">
          <Checkbox
            checked={selectedCats.has("utileria")}
            onChange={() => toggleCat("utileria")}
            className="rounded border-gray-600"
          />
          <span className="text-sm capitalize">utileria (general)</span>
        </label>

        {/* subcategorías */}
        {[
          "utileria television",
          "utileria cine",
          "utileria fotografia",
          "utileria cientifica",
        ].map((cat) => (
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
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Catálogo de Equipos
            </h1>
            <p className="text-gray-300 mt-2">
              Equipos disponibles • {results.length} resultados
            </p>
          </div>

          {/* Buscador y orden */}
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

        {/* Mobile Controls */}
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
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-[#2A86E2]" />
            </Button>
          </div>

          <p className="text-sm text-gray-400">{results.length} productos</p>
        </div>

        {/* Drawer búsqueda */}
        <Drawer
          open={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          position="top"
        >
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

        {/* Drawer filtros */}
        <Drawer
          open={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          position="left"
        >
          <DrawerItems>
            <div className="pt-20 p-2">{FilterContent}</div>
          </DrawerItems>
        </Drawer>

        {/* Grilla */}
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
