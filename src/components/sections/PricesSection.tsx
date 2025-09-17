import { useState } from "react";
import "./Prices.css";

type AirportKey = "faro" | "lisbon" | "seville";

interface DestinationRow {
  destination: string;
  oneWay4: string;
  return4: string;
  oneWay8: string;
  return8: string;
  distance: string;
  time: string;
}

const data: Record<AirportKey, DestinationRow[]> = {
  faro: [
    { destination: "Albufeira", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "45 km", time: "30 min" },
    { destination: "Albufeira-Açoteias", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "35 km", time: "35 min" },
    { destination: "Albufeira-Galé", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "46 km", time: "56 min" },
    { destination: "Albufeira-Guia", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "44 km", time: "35 min" },
    { destination: "Albufeira-Olhos de Água", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "35 km", time: "39 min" },
    { destination: "Albufeira-Salgados", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "44 km", time: "50 min" },
    { destination: "Albufeira-São Rafael", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "46 km", time: "50 min" },
    { destination: "Albufeira-Sesmarias", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "40 km", time: "40 min" },
    { destination: "Albufeira-Vale da Parra", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "44 km", time: "50 min" },
    { destination: "Alcoutim", oneWay4: "105€", return4: "210€", oneWay8: "135€", return8: "270€", distance: "97 km", time: "1h 30m" },
    { destination: "Algoz", oneWay4: "50€", return4: "100€", oneWay8: "60€", return8: "120€", distance: "45 km", time: "55 min" },
    { destination: "Aljezur", oneWay4: "110€", return4: "220€", oneWay8: "140€", return8: "280€", distance: "100 km", time: "1h 30m" },
    { destination: "Almancil", oneWay4: "35€", return4: "70€", oneWay8: "45€", return8: "90€", distance: "19 km", time: "25 min" },
    { destination: "Alte", oneWay4: "60€", return4: "120€", oneWay8: "70€", return8: "140€", distance: "56 km", time: "45 min" },
    { destination: "Altura", oneWay4: "60€", return4: "120€", oneWay8: "70€", return8: "140€", distance: "58 km", time: "1h 00m" },
    { destination: "Alvor", oneWay4: "75€", return4: "150€", oneWay8: "85€", return8: "170€", distance: "75 km", time: "1h 05m" },
    { destination: "Armação de Pêra", oneWay4: "55€", return4: "110€", oneWay8: "65€", return8: "130€", distance: "48 km", time: "55 min" },
    { destination: "Ayamonte (Spain)", oneWay4: "75€", return4: "150€", oneWay8: "85€", return8: "170€", distance: "75 km", time: "1h 10m" },
    { destination: "Beja", oneWay4: "150€", return4: "300€", oneWay8: "200€", return8: "400€", distance: "150 km", time: "2h 00m" },
    { destination: "Boliqueime", oneWay4: "40€", return4: "80€", oneWay8: "50€", return8: "100€", distance: "30 km", time: "35 min" },
    { destination: "Budens", oneWay4: "105€", return4: "210€", oneWay8: "135€", return8: "270€", distance: "102 km", time: "1h 25m" },
    { destination: "Burgau", oneWay4: "110€", return4: "220€", oneWay8: "140€", return8: "280€", distance: "100 km", time: "1h 15m" },
    { destination: "Cabanas de Tavira", oneWay4: "50€", return4: "100€", oneWay8: "60€", return8: "120€", distance: "51 km", time: "45 min" },
    { destination: "Cacela Velha", oneWay4: "55€", return4: "110€", oneWay8: "65€", return8: "130€", distance: "61 km", time: "55 min" },
    { destination: "Cádiz (Spain)", oneWay4: "350€", return4: "700€", oneWay8: "420€", return8: "840€", distance: "321 km", time: "3h 10m" },
    { destination: "Carvoeiro", oneWay4: "65€", return4: "130€", oneWay8: "75€", return8: "150€", distance: "68 km", time: "1h 00m" },
    { destination: "Castro Marim", oneWay4: "60€", return4: "120€", oneWay8: "70€", return8: "140€", distance: "62 km", time: "55 min" },
    { destination: "Conceição de Tavira", oneWay4: "48€", return4: "96€", oneWay8: "58€", return8: "116€", distance: "46 km", time: "45 min" },
    { destination: "El Rompido (Spain)", oneWay4: "105€", return4: "210€", oneWay8: "130€", return8: "260€", distance: "104 km", time: "1h 20m" },
    { destination: "Estoi", oneWay4: "25€", return4: "50€", oneWay8: "35€", return8: "70€", distance: "20 km", time: "25 min" },
    { destination: "Faro (City)", oneWay4: "25€", return4: "50€", oneWay8: "35€", return8: "70€", distance: "9 km", time: "15 min" },
    { destination: "Ferragudo", oneWay4: "65€", return4: "130€", oneWay8: "75€", return8: "150€", distance: "67 km", time: "55 min" },
    { destination: "Fuzeta", oneWay4: "30€", return4: "60€", oneWay8: "40€", return8: "80€", distance: "29 km", time: "35 min" },
    { destination: "Gibraltar (Spain)", oneWay4: "450€", return4: "900€", oneWay8: "550€", return8: "1100€", distance: "393 km", time: "4h 15m" },
    { destination: "Granada (Spain)", oneWay4: "455€", return4: "910€", oneWay8: "580€", return8: "1160€", distance: "457 km", time: "4h 45m" },
    { destination: "Guia", oneWay4: "50€", return4: "100€", oneWay8: "60€", return8: "120€", distance: "44 km", time: "40 min" },
    { destination: "Huelva (Spain)", oneWay4: "120€", return4: "240€", oneWay8: "140€", return8: "280€", distance: "125 km", time: "1h 30m" },
    { destination: "Isla Canela (Spain)", oneWay4: "75€", return4: "150€", oneWay8: "85€", return8: "170€", distance: "80 km", time: "1h 15m" },
    { destination: "Isla Cristina (Spain)", oneWay4: "80€", return4: "160€", oneWay8: "90€", return8: "180€", distance: "87 km", time: "1h 20m" },
    { destination: "Islantilla (Spain)", oneWay4: "90€", return4: "180€", oneWay8: "105€", return8: "210€", distance: "92 km", time: "1h 30m" },
    { destination: "Jerez de la Frontera (Spain)", oneWay4: "300€", return4: "600€", oneWay8: "350€", return8: "700€", distance: "289 km", time: "3h 15m" },
    { destination: "Lagoa", oneWay4: "60€", return4: "120€", oneWay8: "70€", return8: "140€", distance: "62 km", time: "55 min" },
    { destination: "Lagos", oneWay4: "90€", return4: "180€", oneWay8: "105€", return8: "210€", distance: "92 km", time: "1h 10m" },
    { destination: "Lepe (Spain)", oneWay4: "90€", return4: "180€", oneWay8: "110€", return8: "220€", distance: "98 km", time: "1h 05m" },
    { destination: "Lisboa", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "279 km", time: "3h 00m" },
    { destination: "Loulé", oneWay4: "30€", return4: "60€", oneWay8: "40€", return8: "80€", distance: "20 km", time: "25 min" },
    { destination: "Luz Tavira", oneWay4: "40€", return4: "80€", oneWay8: "50€", return8: "100€", distance: "32 km", time: "45 min" },
    { destination: "Madrid (Spain)", oneWay4: "750€", return4: "1500€", oneWay8: "890€", return8: "1780€", distance: "722 km", time: "7h 00m" },
    { destination: "Málaga (Spain)", oneWay4: "475€", return4: "950€", oneWay8: "585€", return8: "1170€", distance: "417 km", time: "4h 30m" },
    { destination: "Manta Rota", oneWay4: "55€", return4: "110€", oneWay8: "65€", return8: "130€", distance: "61 km", time: "55 min" },
    { destination: "Marbella (Spain)", oneWay4: "475€", return4: "950€", oneWay8: "590€", return8: "1180€", distance: "454 km", time: "4h 45m" },
    { destination: "Moncarapacho", oneWay4: "30€", return4: "60€", oneWay8: "40€", return8: "80€", distance: "27 km", time: "25 min" },
    { destination: "Monchique", oneWay4: "85€", return4: "170€", oneWay8: "95€", return8: "190€", distance: "86 km", time: "1h 00m" },
    { destination: "Monte Gordo", oneWay4: "65€", return4: "130€", oneWay8: "75€", return8: "150€", distance: "61 km", time: "55 min" },
    { destination: "Monte Rei Golf & Country Club", oneWay4: "65€", return4: "130€", oneWay8: "75€", return8: "150€", distance: "62 km", time: "55 min" },
    { destination: "Olhão", oneWay4: "25€", return4: "50€", oneWay8: "35€", return8: "70€", distance: "15 km", time: "25 min" },
    { destination: "Pedras del Rei", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "43 km", time: "45 min" },
    { destination: "Porches", oneWay4: "55€", return4: "110€", oneWay8: "65€", return8: "130€", distance: "55 km", time: "55 min" },
    { destination: "Portimão", oneWay4: "70€", return4: "140€", oneWay8: "80€", return8: "160€", distance: "74 km", time: "1h 00m" },
    { destination: "Porto", oneWay4: "600€", return4: "1200€", oneWay8: "750€", return8: "1500€", distance: "547 km", time: "6h 00m" },
    { destination: "Praia da Luz (Lagos)", oneWay4: "95€", return4: "190€", oneWay8: "110€", return8: "220€", distance: "93 km", time: "1h 20m" },
    { destination: "Praia da Rocha (Portimão)", oneWay4: "70€", return4: "140€", oneWay8: "80€", return8: "160€", distance: "75 km", time: "1h 00m" },
    { destination: "Praia Verde", oneWay4: "60€", return4: "120€", oneWay8: "70€", return8: "140€", distance: "62 km", time: "1h 05m" },
    { destination: "Punta Umbria (Spain)", oneWay4: "110€", return4: "220€", oneWay8: "130€", return8: "260€", distance: "120 km", time: "1h 30m" },
    { destination: "Quarteira", oneWay4: "35€", return4: "70€", oneWay8: "45€", return8: "90€", distance: "27 km", time: "30 min" },
    { destination: "Quinta do Lago", oneWay4: "35€", return4: "70€", oneWay8: "45€", return8: "90€", distance: "21 km", time: "25 min" },
    { destination: "Robinson Club (Quinta da Ria)", oneWay4: "55€", return4: "110€", oneWay8: "65€", return8: "130€", distance: "55 km", time: "44 min" },
    { destination: "Sagres", oneWay4: "130€", return4: "260€", oneWay8: "170€", return8: "340€", distance: "119 km", time: "1h 35m" },
    { destination: "Salema", oneWay4: "120€", return4: "240€", oneWay8: "150€", return8: "300€", distance: "105 km", time: "1h 20m" },
    { destination: "Santa Bárbara de Nexe (Faro)", oneWay4: "25€", return4: "50€", oneWay8: "35€", return8: "70€", distance: "15 km", time: "30 min" },
    { destination: "Santa Catarina Fonte do Bispo", oneWay4: "35€", return4: "70€", oneWay8: "45€", return8: "90€", distance: "33 km", time: "30 min" },
    { destination: "Santa Luzia (Tavira)", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "40 km", time: "35 min" },
    { destination: "Santo Estevão (Tavira)", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "43 km", time: "40 min" },
    { destination: "São Brás de Alportel", oneWay4: "35€", return4: "70€", oneWay8: "40€", return8: "80€", distance: "22 km", time: "30 min" },
{ destination: "Seville (Spain)", oneWay4: "235€", return4: "470€", oneWay8: "275€", return8: "550€", distance: "203 km", time: "2h 00m" },
{ destination: "Silves", oneWay4: "60€", return4: "120€", oneWay8: "70€", return8: "140€", distance: "63 km", time: "50 min" },
{ destination: "Tavira", oneWay4: "45€", return4: "90€", oneWay8: "55€", return8: "110€", distance: "43 km", time: "40 min" },
{ destination: "Vale do Lobo", oneWay4: "35€", return4: "70€", oneWay8: "45€", return8: "90€", distance: "22 km", time: "25 min" },
{ destination: "Vila do Bispo", oneWay4: "125€", return4: "250€", oneWay8: "160€", return8: "320€", distance: "110 km", time: "1h 30m" },
{ destination: "Vila Real de Sto António", oneWay4: "70€", return4: "140€", oneWay8: "80€", return8: "160€", distance: "68 km", time: "50 min" },
{ destination: "Vilamoura", oneWay4: "40€", return4: "80€", oneWay8: "45€", return8: "90€", distance: "29 km", time: "30 min" },
{ destination: "Vilanova de Cacela", oneWay4: "55€", return4: "110€", oneWay8: "65€", return8: "130€", distance: "60 km", time: "45 min" },
  ],
  lisbon: [
    { destination: "Albufeira", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "254 km", time: "2h 15m" },
{ destination: "Almancil", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "264 km", time: "2h 20m" },
{ destination: "Altura", oneWay4: "365€", return4: "730€", oneWay8: "415€", return8: "830€", distance: "318 km", time: "2h 45m" },
{ destination: "Alvor", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "284 km", time: "2h 32m" },
{ destination: "Armação de Pêra", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "261 km", time: "2h 15m" },
{ destination: "Boliqueime", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "254 km", time: "2h 10m" },
{ destination: "Cabanas de Tavira", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "305 km", time: "3h 05m" },
{ destination: "Cacela Velha", oneWay4: "360€", return4: "720€", oneWay8: "410€", return8: "820€", distance: "319 km", time: "2h 45m" },
{ destination: "Carvoeiro", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "272 km", time: "2h 24m" },
{ destination: "Castro Marim", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "321 km", time: "2h 45m" },
{ destination: "Conceição de Tavira", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "303 km", time: "3h 05m" },
{ destination: "Estoi", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "274 km", time: "2h 21m" },
{ destination: "Faro (City)", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "275 km", time: "2h 27m" },
{ destination: "Ferragudo", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "277 km", time: "2h 29m" },
{ destination: "Fuzeta", oneWay4: "345€", return4: "690€", oneWay8: "395€", return8: "790€", distance: "291 km", time: "2h 35m" },
{ destination: "Huelva (Spain)", oneWay4: "500€", return4: "1000€", oneWay8: "600€", return8: "1200€", distance: "373 km", time: "3h 22m" },
{ destination: "Isla Canela (Spain)", oneWay4: "400€", return4: "800€", oneWay8: "475€", return8: "950€", distance: "334 km", time: "3h 11m" },
{ destination: "Isla Cristina (Spain)", oneWay4: "360€", return4: "720€", oneWay8: "450€", return8: "900€", distance: "338 km", time: "3h 05m" },
{ destination: "Islantilla (Spain)", oneWay4: "375€", return4: "750€", oneWay8: "450€", return8: "900€", distance: "348 km", time: "3h 07m" },
{ destination: "Lagoa", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "267 km", time: "2h 17m" },
{ destination: "Lagos", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "298 km", time: "2h 40m" },
{ destination: "Lepe (Spain)", oneWay4: "350€", return4: "700€", oneWay8: "450€", return8: "900€", distance: "344 km", time: "3h 10m" },
{ destination: "Loulé", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "262 km", time: "2h 20m" },
{ destination: "Luz Tavira", oneWay4: "345€", return4: "690€", oneWay8: "395€", return8: "790€", distance: "296 km", time: "2h 40m" },
{ destination: "Manta Rota", oneWay4: "335€", return4: "670€", oneWay8: "385€", return8: "770€", distance: "319 km", time: "2h 49m" },
{ destination: "Moncarapacho", oneWay4: "345€", return4: "690€", oneWay8: "395€", return8: "790€", distance: "286 km", time: "2h 30m" },
{ destination: "Monchique", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "255 km", time: "2h 37m" },
{ destination: "Monte Gordo", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "319 km", time: "2h 49m" },
{ destination: "Olhão", oneWay4: "330€", return4: "660€", oneWay8: "390€", return8: "780€", distance: "283 km", time: "2h 34m" },
{ destination: "Porches", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "260 km", time: "2h 14m" },
{ destination: "Portimão", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "279 km", time: "2h 32m" },
{ destination: "Praia da Luz (Lagos)", oneWay4: "360€", return4: "720€", oneWay8: "475€", return8: "950€", distance: "303 km", time: "2h 40m" },
{ destination: "Praia Verde", oneWay4: "345€", return4: "690€", oneWay8: "395€", return8: "790€", distance: "318 km", time: "2h 45m" },
{ destination: "Quarteira", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "267 km", time: "2h 24m" },
{ destination: "Quinta do Lago", oneWay4: "330€", return4: "660€", oneWay8: "390€", return8: "780€", distance: "267 km", time: "2h 24m" },
{ destination: "Santa Luzia (Tavira)", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "302 km", time: "3h 00m" },
{ destination: "São Brás de Alportel", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "281 km", time: "2h 30m" },
{ destination: "Seville (Spain)", oneWay4: "600€", return4: "1200€", oneWay8: "750€", return8: "1500€", distance: "464 km", time: "4h 27m" },
{ destination: "Silves", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "250 km", time: "2h 20m" },
{ destination: "Tavira", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "300 km", time: "3h 00m" },
{ destination: "Vale do Lobo", oneWay4: "330€", return4: "660€", oneWay8: "390€", return8: "780€", distance: "268 km", time: "2h 27m" },
{ destination: "Vila Real de Sto António", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "324 km", time: "2h 49m" },
{ destination: "Vilamoura", oneWay4: "325€", return4: "650€", oneWay8: "375€", return8: "750€", distance: "261 km", time: "2h 19m" },
 ],
  seville: [
   { destination: "Albufeira", oneWay4: "260€", return4: "520€", oneWay8: "300€", return8: "600€", distance: "242 km", time: "2h 34m" },
{ destination: "Almancil", oneWay4: "250€", return4: "500€", oneWay8: "300€", return8: "600€", distance: "217 km", time: "2h 15m" },
{ destination: "Altura", oneWay4: "185€", return4: "370€", oneWay8: "225€", return8: "450€", distance: "152 km", time: "1h 58m" },
{ destination: "Alvor", oneWay4: "225€", return4: "450€", oneWay8: "295€", return8: "590€", distance: "271 km", time: "2h 48m" },
{ destination: "Armação de Pêra", oneWay4: "275€", return4: "550€", oneWay8: "325€", return8: "650€", distance: "249 km", time: "2h 34m" },
{ destination: "Boliqueime", oneWay4: "255€", return4: "510€", oneWay8: "275€", return8: "550€", distance: "225 km", time: "2h 19m" },
{ destination: "Budens", oneWay4: "320€", return4: "640€", oneWay8: "360€", return8: "720€", distance: "297 km", time: "3h 00m" },
{ destination: "Cabanas de Tavira", oneWay4: "180€", return4: "360€", oneWay8: "220€", return8: "440€", distance: "181 km", time: "1h 49m" },
{ destination: "Cacela Velha", oneWay4: "180€", return4: "360€", oneWay8: "220€", return8: "440€", distance: "165 km", time: "1h 46m" },
{ destination: "Carvoeiro", oneWay4: "270€", return4: "540€", oneWay8: "320€", return8: "640€", distance: "261 km", time: "2h 39m" },
{ destination: "Castro Marim", oneWay4: "185€", return4: "370€", oneWay8: "225€", return8: "450€", distance: "156 km", time: "1h 40m" },
{ destination: "Conceição de Tavira", oneWay4: "185€", return4: "370€", oneWay8: "225€", return8: "450€", distance: "179 km", time: "1h 46m" },
{ destination: "Estoi", oneWay4: "225€", return4: "450€", oneWay8: "275€", return8: "550€", distance: "205 km", time: "2h 06m" },
{ destination: "Faro (City)", oneWay4: "235€", return4: "470€", oneWay8: "275€", return8: "550€", distance: "211 km", time: "2h 14m" },
{ destination: "Ferragudo", oneWay4: "265€", return4: "530€", oneWay8: "305€", return8: "610€", distance: "265 km", time: "2h 44m" },
{ destination: "Fuzeta", oneWay4: "180€", return4: "360€", oneWay8: "240€", return8: "480€", distance: "199 km", time: "2h 09m" },
{ destination: "Guia", oneWay4: "260€", return4: "520€", oneWay8: "300€", return8: "600€", distance: "241 km", time: "2h 26m" },
{ destination: "Lagoa", oneWay4: "270€", return4: "540€", oneWay8: "330€", return8: "660€", distance: "256 km", time: "2h 34m" },
{ destination: "Lagos", oneWay4: "300€", return4: "600€", oneWay8: "350€", return8: "700€", distance: "287 km", time: "2h 56m" },
{ destination: "Lisboa", oneWay4: "600€", return4: "1200€", oneWay8: "750€", return8: "1500€", distance: "475 km", time: "4h 28m" },
{ destination: "Loulé", oneWay4: "240€", return4: "480€", oneWay8: "285€", return8: "570€", distance: "217 km", time: "2h 14m" },
{ destination: "Luz Tavira", oneWay4: "190€", return4: "380€", oneWay8: "230€", return8: "460€", distance: "191 km", time: "2h 04m" },
{ destination: "Manta Rota", oneWay4: "185€", return4: "370€", oneWay8: "235€", return8: "470€", distance: "165 km", time: "1h 46m" },
{ destination: "Moncarapacho", oneWay4: "190€", return4: "380€", oneWay8: "230€", return8: "460€", distance: "193 km", time: "2h 00m" },
{ destination: "Monchique", oneWay4: "270€", return4: "540€", oneWay8: "340€", return8: "680€", distance: "282 km", time: "2h 58m" },
{ destination: "Monte Gordo", oneWay4: "175€", return4: "350€", oneWay8: "230€", return8: "460€", distance: "162 km", time: "1h 48m" },
{ destination: "Olhão", oneWay4: "200€", return4: "400€", oneWay8: "270€", return8: "540€", distance: "201 km", time: "2h 10m" },
{ destination: "Porches", oneWay4: "280€", return4: "560€", oneWay8: "320€", return8: "640€", distance: "249 km", time: "2h 32m" },
{ destination: "Portimão", oneWay4: "295€", return4: "590€", oneWay8: "335€", return8: "670€", distance: "268 km", time: "2h 46m" },
{ destination: "Praia da Luz (Lagos)", oneWay4: "350€", return4: "700€", oneWay8: "400€", return8: "800€", distance: "292 km", time: "3h 00m" },
{ destination: "Praia Verde", oneWay4: "185€", return4: "370€", oneWay8: "225€", return8: "450€", distance: "163 km", time: "1h 46m" },
{ destination: "Quarteira", oneWay4: "210€", return4: "420€", oneWay8: "280€", return8: "560€", distance: "222 km", time: "2h 20m" },
{ destination: "Quinta do Lago", oneWay4: "250€", return4: "500€", oneWay8: "290€", return8: "580€", distance: "217 km", time: "2h 19m" },
{ destination: "Robinson Club (Quinta da Ria)", oneWay4: "185€", return4: "370€", oneWay8: "230€", return8: "460€", distance: "170 km", time: "1h 51m" },
{ destination: "Sagres", oneWay4: "350€", return4: "700€", oneWay8: "430€", return8: "860€", distance: "312 km", time: "3h 16m" },
{ destination: "Salema", oneWay4: "265€", return4: "530€", oneWay8: "325€", return8: "650€", distance: "300 km", time: "3h 08m" },
{ destination: "Santa Catarina Fonte Do Bispo", oneWay4: "195€", return4: "390€", oneWay8: "245€", return8: "490€", distance: "189 km", time: "2h 01m" },
{ destination: "Santa Luzia (Tavira)", oneWay4: "185€", return4: "370€", oneWay8: "225€", return8: "450€", distance: "187 km", time: "2h 02m" },
{ destination: "Sao Bras de Alportel", oneWay4: "215€", return4: "430€", oneWay8: "235€", return8: "470€", distance: "199 km", time: "2h 12m" },
{ destination: "Seville (Spain)", oneWay4: "169€", return4: "338€", oneWay8: "209€", return8: "418€", distance: "203 km", time: "2h 00m" },
{ destination: "Silves", oneWay4: "260€", return4: "520€", oneWay8: "330€", return8: "660€", distance: "259 km", time: "2h 41m" },
{ destination: "Tavira", oneWay4: "185€", return4: "370€", oneWay8: "220€", return8: "440€", distance: "186 km", time: "1h 57m" },
{ destination: "Vale do Lobo", oneWay4: "250€", return4: "500€", oneWay8: "290€", return8: "580€", distance: "223 km", time: "2h 26m" },
{ destination: "Vila do Bispo", oneWay4: "265€", return4: "530€", oneWay8: "335€", return8: "670€", distance: "305 km", time: "3h 11m" },
{ destination: "Vila Real de Sto António", oneWay4: "175€", return4: "350€", oneWay8: "225€", return8: "450€", distance: "159 km", time: "1h 44m" },
{ destination: "Vilamoura", oneWay4: "255€", return4: "510€", oneWay8: "295€", return8: "590€", distance: "225 km", time: "2h 24m" },
{ destination: "Vilanova de Cacela", oneWay4: "180€", return4: "360€", oneWay8: "210€", return8: "420€", distance: "170 km", time: "1h 40m" },
 ]
};

export function PricesTable() {
  const [airport, setAirport] = useState<AirportKey>("faro");

  return (
    <section className="prices-table-section">
      <h2 className="section-title">Transfer Prices</h2>

      {/* Airport Selector */}
      <div className="airport-tabs">
        <button
          className={airport === "faro" ? "active" : ""}
          onClick={() => setAirport("faro")}
        >
          Faro Airport
        </button>
        <button
          className={airport === "lisbon" ? "active" : ""}
          onClick={() => setAirport("lisbon")}
        >
          Lisbon Airport
        </button>
        <button
          className={airport === "seville" ? "active" : ""}
          onClick={() => setAirport("seville")}
        >
          Seville Airport
        </button>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="prices-table">
          <thead>
            <tr>
              <th>Destination</th>
              <th>1–4 pax (One way)</th>
              <th>1–4 pax (Return)</th>
              <th>5–8 pax (One way)</th>
              <th>5–8 pax (Return)</th>
              <th>Distance</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data[airport].map((row, i) => (
              <tr key={i}>
                <td>{row.destination}</td>
                <td>{row.oneWay4}</td>
                <td>{row.return4}</td>
                <td>{row.oneWay8}</td>
                <td>{row.return8}</td>
                <td>{row.distance}</td>
                <td>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
