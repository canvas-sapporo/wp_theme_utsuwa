import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  CHARACTER_IMAGES,
  INTERVAL_MS,
  FADE_DURATION,
  getRandomIndex,
} from "../data/characterImages";

const FadingImageBox: React.FC = () => {
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

  const opacityVisible = 1;

  useEffect(() => {
    const initLayers = () => {
      const layer0 = layer0Ref.current;
      const layer1 = layer1Ref.current;
      if (!layer0 || !layer1) return;
      const cur = currentIndexRef.current;
      const layer = activeLayerRef.current;
      layer0.style.backgroundImage = `url(${CHARACTER_IMAGES[cur]})`;
      layer1.style.backgroundImage = `url(${CHARACTER_IMAGES[cur]})`;
      gsap.set(layer0, { opacity: 0 });
      gsap.set(layer1, { opacity: 0 });
      const visibleLayer = layer === 0 ? layer0 : layer1;
      gsap.to(visibleLayer, {
        opacity: opacityVisible,
        duration: FADE_DURATION,
        ease: "power2.inOut",
      });
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
          opacity: opacityVisible,
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
  }, []);

  return (
    <div className="w-full aspect-square relative overflow-hidden rounded-lg">
      <div
        ref={layer0Ref}
        className="absolute inset-0 bg-cover bg-center transition-none"
      />
      <div
        ref={layer1Ref}
        className="absolute inset-0 bg-cover bg-center transition-none"
      />
    </div>
  );
};

export default FadingImageBox;
