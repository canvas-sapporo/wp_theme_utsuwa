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

export const CHARACTER_IMAGES = [
  c00, c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14,
  c15, c16, c17, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30,
  c31, c32, c33,
];

export const INTERVAL_MS = 6000;
export const FADE_DURATION = 3;

export const getRandomIndex = (current: number): number => {
  if (CHARACTER_IMAGES.length <= 1) return 0;
  let next = Math.floor(Math.random() * CHARACTER_IMAGES.length);
  while (next === current) {
    next = Math.floor(Math.random() * CHARACTER_IMAGES.length);
  }
  return next;
};
