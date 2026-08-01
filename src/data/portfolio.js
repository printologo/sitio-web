// ---------------------------------------------------------------------------
// Portafolio de trabajos. Cada item usa la foto real del trabajo terminado
// (carpeta src/assets). Para reemplazar una imagen, sustituye el archivo en
// src/assets manteniendo el mismo nombre, o actualiza el import de abajo.
// "tone" solo se usa como respaldo si algún item se queda sin imagen (ver
// components/ProductVisual).
// ---------------------------------------------------------------------------
import imgCamisetaFullColor from "../assets/Camiseta a Full color.PNG";
import imgGorraCorporativa from "../assets/Gorra corporativa.PNG";
import imgUniformeOficina from "../assets/Uniforme de oficina.PNG";
import imgTermoEvento from "../assets/Termo para Evento.PNG";
import imgHoodieMarcaPropia from "../assets/Hoodie de marca propia.PNG";
import imgPoloBordadoColegio from "../assets/Polo bordado para colegio.PNG";
import imgJerseyEquipoDeportivo from "../assets/Jersey de equipo deportivo.PNG";
import imgBolsaCampana from "../assets/Bolsa para campaña.PNG";
import imgTazaPersonalizada from "../assets/Taza personalizada.PNG";
import imgCamisetasSemitonos from "../assets/Camisetas en Semitonos.PNG";
import imgDelantalRestaurante from "../assets/Delantal para restaurante.PNG";
import imgKitPromocional from "../assets/Kit promocional de marca.PNG";

export const portfolioCategories = [
  { id: "todos", label: "Todos" },
  { id: "dtf", label: "DTF" },
  { id: "bordado", label: "Bordado" },
  { id: "uniformes", label: "Uniformes" },
  { id: "promocionales", label: "Promocionales" },
  { id: "sublimacion", label: "Sublimación" },
];

export const portfolioItems = [
  { id: 1, title: "Camiseta a full color", category: "dtf", tag: "DTF", icon: "shirt", tone: 1, image: imgCamisetaFullColor },
  { id: 2, title: "Gorra corporativa", category: "bordado", tag: "Bordado", icon: "crown", tone: 2, image: imgGorraCorporativa },
  { id: 3, title: "Uniforme de oficina", category: "uniformes", tag: "Uniformes", icon: "briefcase", tone: 3, image: imgUniformeOficina },
  { id: 4, title: "Termo para evento", category: "sublimacion", tag: "Sublimación", icon: "cup-soda", tone: 4, image: imgTermoEvento },
  { id: 5, title: "Hoodie de marca propia", category: "dtf", tag: "DTF", icon: "shirt", tone: 5, image: imgHoodieMarcaPropia },
  { id: 6, title: "Polo bordado para colegio", category: "bordado", tag: "Bordado", icon: "shirt", tone: 1, image: imgPoloBordadoColegio },
  { id: 7, title: "Jersey de equipo deportivo", category: "sublimacion", tag: "Sublimación", icon: "medal", tone: 2, image: imgJerseyEquipoDeportivo },
  { id: 8, title: "Bolsas para campaña", category: "promocionales", tag: "Promocional", icon: "shopping-bag", tone: 3, image: imgBolsaCampana },
  { id: 9, title: "Taza personalizada", category: "sublimacion", tag: "Sublimación", icon: "coffee", tone: 4, image: imgTazaPersonalizada },
  { id: 10, title: "Camisetas en semitonos", category: "dtf", tag: "DTF", icon: "shirt", tone: 5, image: imgCamisetasSemitonos },
  { id: 11, title: "Delantal para restaurante", category: "bordado", tag: "Bordado", icon: "utensils", tone: 1, image: imgDelantalRestaurante },
  { id: 12, title: "Kit promocional de marca", category: "promocionales", tag: "Promocional", icon: "gift", tone: 2, image: imgKitPromocional },
];
