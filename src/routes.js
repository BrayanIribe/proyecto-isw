import Home from "./views/Home";
import Contact from "./views/Contact";
import PrototypesIndex from "./views/Prototypes/Index";
import PrototypesWhatIs from "./views/Prototypes/WhatIs";
import PrototypesImages from "./views/Prototypes/Images";
import PrototypesVideos from "./views/Prototypes/Videos";
import PrototypesBibliography from "./views/Prototypes/Bibliography";

import SpiralIndex from "./views/Spiral/Index";
import SpiralWhatIs from "./views/Spiral/WhatIs";
import SpiralImages from "./views/Spiral/Images";
import SpiralVideos from "./views/Spiral/Videos";
import SpiralBibliography from "./views/Spiral/Bibliography";

import ScrumIndex from "./views/Scrum/Index";
import ScrumWhatIs from "./views/Scrum/WhatIs";
import ScrumImages from "./views/Scrum/Images";
import ScrumVideos from "./views/Scrum/Videos";
import ScrumBibliography from "./views/Scrum/Bibliography";

export default [
  { path: "/", component: Home, name: "Inicio" },
  { path: "/contact", component: Contact, name: "Contacto" },
  {
    path: "/prototypes",
    component: PrototypesIndex,
    name: "Inicio"
  },
  {
    path: "/prototypes/what-is",
    component: PrototypesWhatIs,
    name: "¿Qué es?"
  },
  {
    path: "/prototypes/images",
    component: PrototypesImages,
    name: "Imágenes"
  },
  {
    path: "/prototypes/videos",
    component: PrototypesVideos,
    name: "Vídeos"
  },
  {
    path: "/prototypes/bibliography",
    component: PrototypesBibliography,
    name: "Biografías"
  },
  {
    path: "/spiral",
    component: SpiralIndex,
    name: "Inicio"
  },
  {
    path: "/spiral/what-is",
    component: SpiralWhatIs,
    name: "¿Qué es?"
  },
  {
    path: "/spiral/images",
    component: SpiralImages,
    name: "Imágenes"
  },
  {
    path: "/spiral/videos",
    component: SpiralVideos,
    name: "Vídeos"
  },
  {
    path: "/spiral/bibliography",
    component: SpiralBibliography,
    name: "Biografías"
  },
  {
    path: "/scrum",
    component: ScrumIndex,
    name: "Inicio"
  },
  {
    path: "/scrum/what-is",
    component: ScrumWhatIs,
    name: "¿Qué es?"
  },
  {
    path: "/scrum/images",
    component: ScrumImages,
    name: "Imágenes"
  },
  {
    path: "/scrum/videos",
    component: ScrumVideos,
    name: "Vídeos"
  },
  {
    path: "/scrum/bibliography",
    component: ScrumBibliography,
    name: "Biografías"
  },
  { path: "*", component: Home }
];
