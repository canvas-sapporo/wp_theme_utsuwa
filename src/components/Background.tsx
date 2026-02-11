import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

import c00 from "../assets/character_00.webp";
import c01 from "../assets/character_01.webp";
import c02 from "../assets/character_02.webp";
import c03 from "../assets/character_03.webp";
import c04 from "../assets/character_04.webp";
import c05 from "../assets/character_05.webp";
import c06 from "../assets/character_06.webp";
import c07 from "../assets/character_07.webp";
import c08 from "../assets/character_08.webp";
import c09 from "../assets/character_09.webp";
import c10 from "../assets/character_10.webp";
import c11 from "../assets/character_11.webp";
import c12 from "../assets/character_12.webp";
import c13 from "../assets/character_13.webp";
import c14 from "../assets/character_14.webp";
import c15 from "../assets/character_15.webp";
import c16 from "../assets/character_16.webp";
import c17 from "../assets/character_17.webp";
import c19 from "../assets/character_19.webp";
import c20 from "../assets/character_20.webp";
import c21 from "../assets/character_21.webp";
import c22 from "../assets/character_22.webp";
import c23 from "../assets/character_23.webp";
import c24 from "../assets/character_24.webp";
import c25 from "../assets/character_25.webp";
import c26 from "../assets/character_26.webp";
import c27 from "../assets/character_27.webp";
import c28 from "../assets/character_28.webp";
import c29 from "../assets/character_29.webp";
import c30 from "../assets/character_30.webp";
import c31 from "../assets/character_31.webp";
import c32 from "../assets/character_32.webp";
import c33 from "../assets/character_33.webp";

const CHARACTER_IMAGES = [
  c00,
  c01,
  c02,
  c03,
  c04,
  c05,
  c06,
  c07,
  c08,
  c09,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c19,
  c20,
  c21,
  c22,
  c23,
  c24,
  c25,
  c26,
  c27,
  c28,
  c29,
  c30,
  c31,
  c32,
  c33,
];

const INTERVAL_MS = 6000;
const FADE_DURATION = 3;

const getRandomIndex = (current: number): number => {
  if (CHARACTER_IMAGES.length <= 1) return 0;
  let next = Math.floor(Math.random() * CHARACTER_IMAGES.length);
  while (next === current) {
    next = Math.floor(Math.random() * CHARACTER_IMAGES.length);
  }
  return next;
};

const Background: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const showCharacter = path !== "/" && path !== "/art";

  const initialIndex = useRef(
    Math.floor(Math.random() * CHARACTER_IMAGES.length),
  ).current;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const layer0Ref = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentIndexRef = useRef(currentIndex);
  const activeLayerRef = useRef<0 | 1>(activeLayer);
  currentIndexRef.current = currentIndex;
  activeLayerRef.current = activeLayer;

  useEffect(() => {
    if (!showCharacter) return;

    const initLayers = () => {
      const layer0 = layer0Ref.current;
      const layer1 = layer1Ref.current;
      if (!layer0 || !layer1) return;
      const cur = currentIndexRef.current;
      const layer = activeLayerRef.current;
      layer0.style.backgroundImage = `url(${CHARACTER_IMAGES[cur]})`;
      layer1.style.backgroundImage = `url(${CHARACTER_IMAGES[cur]})`;
      gsap.set(layer0, { opacity: layer === 0 ? 0.7 : 0 });
      gsap.set(layer1, { opacity: layer === 1 ? 0.7 : 0 });
    };

    requestAnimationFrame(initLayers);

    const runTransition = () => {
      const cur = currentIndexRef.current;
      const layer = activeLayerRef.current;
      const next = getRandomIndex(cur);

      const outgoing = layer === 0 ? layer0Ref.current : layer1Ref.current;
      const incoming = layer === 0 ? layer1Ref.current : layer0Ref.current;

      if (!outgoing || !incoming) return;

      incoming.style.backgroundImage = `url(${CHARACTER_IMAGES[next]})`;

      gsap.killTweensOf([outgoing, incoming]);

      gsap.to(outgoing, {
        opacity: 0,
        duration: FADE_DURATION,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        incoming,
        { opacity: 0 },
        {
          opacity: 0.7,
          duration: FADE_DURATION,
          ease: "power2.inOut",
          onComplete: () => {
            setCurrentIndex(next);
            setActiveLayer((prev) => (prev === 0 ? 1 : 0));
          },
        },
      );
    };

    intervalRef.current = setInterval(runTransition, INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [showCharacter]);

  if (!showCharacter) return null;

  return (
    <div
      className="fixed left-0 right-0 md:left-auto top-20 bottom-0 w-full md:w-[50%] md:right-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={layer0Ref}
        className="absolute inset-0 bg-cover bg-center md:bg-right transition-none"
      />
      <div
        ref={layer1Ref}
        className="absolute inset-0 bg-cover bg-center md:bg-right transition-none"
      />
    </div>
  );
};

export default Background;
