import React, { useMemo, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CHARACTER_IMAGES,
  getIllustratorName,
} from '../data/characterImages';
import xmarkIcon from '../assets/xmark-solid-full.svg';

gsap.registerPlugin(ScrollTrigger);

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

type ModalState = { src: string; illustratorName: string } | null;
type ModalPhase = 'entering' | 'visible' | 'exiting';

const MODAL_FADE_MS = 300;
const TITLE = "Art";

const Art: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const shuffledItems = useMemo(
    () =>
      shuffle(
        CHARACTER_IMAGES.map((src, index) => ({ src, index }))
      ),
    []
  );
  const gridRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = React.useState<ModalState>(null);
  const [modalPhase, setModalPhase] = React.useState<ModalPhase>('entering');

  const closeModal = React.useCallback(() => {
    setModalPhase('exiting');
  }, []);

  useEffect(() => {
    if (modal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  useEffect(() => {
    const title = titleRef.current;
    const underline = underlineRef.current;
    if (!title) return;
    const chars = gsap.utils.toArray<HTMLElement>(title.querySelectorAll('span[data-char]'));
    gsap.set(chars, { opacity: 0, y: 16 });
    gsap.set(underline, { scaleX: 0 });
    const tl = gsap.timeline();
    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.06,
      ease: 'power2.out',
    }).to(
      underline,
      { scaleX: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'left' },
      '-=0.15'
    );
  }, []);

  useEffect(() => {
    if (!modal) return;
    if (modalPhase === 'entering') {
      const id = requestAnimationFrame(() => setModalPhase('visible'));
      return () => cancelAnimationFrame(id);
    }
    return undefined;
  }, [modal, modalPhase]);

  useEffect(() => {
    if (modalPhase !== 'exiting') return;
    const id = setTimeout(() => {
      setModal(null);
      setModalPhase('entering');
    }, MODAL_FADE_MS);
    return () => clearTimeout(id);
  }, [modalPhase]);

  useEffect(() => {
    if (!modal) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [modal, closeModal]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = gsap.utils.toArray<HTMLElement>(grid.children);
    if (items.length === 0) return;

    const staggerMax = items.length * 0.1;
    const randomDelays = items.map(() => Math.random() * staggerMax);

    gsap.set(items, { opacity: 0, scale: 0.95 });

    const anim = gsap.to(items, {
      opacity: 1,
      scale: 1,
      duration: 4,
      stagger: (i) => randomDelays[i],
      ease: 'power2.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
      },
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === grid) t.kill();
      });
    };
  }, []);

  return (
    <div className="container mx-auto my-12 px-4 md:px-0">
      <div className="mb-9 flex justify-center">
        <div className="inline-block text-center">
          <h1
            ref={titleRef}
            className="text-section-title font-serif text-text"
          >
            {TITLE.split('').map((char, i) => (
              <span key={i} data-char className="inline-block">
                {char}
              </span>
            ))}
          </h1>
          <span
            ref={underlineRef}
            className="mt-2 block h-0.5 w-full bg-dark origin-left"
            style={{ transform: 'scaleX(0)' }}
            aria-hidden
          />
        </div>
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 w-fit mx-auto"
      >
        {shuffledItems.map((item, i) => (
          <button
            type="button"
            key={i}
            className="group overflow-hidden rounded-lg shadow-custom block p-0 border-0 cursor-pointer text-left transition-shadow duration-300 hover:shadow-lg"
            onClick={() => {
              setModal({
                src: item.src,
                illustratorName: getIllustratorName(item.index),
              });
              setModalPhase('entering');
            }}
          >
            <img
              src={item.src}
              alt={`Character ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {modal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300 ${
            modalPhase === 'visible' ? 'opacity-100' : 'opacity-0'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <button
            type="button"
            className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            onClick={closeModal}
            aria-label="閉じる"
          >
            <img src={xmarkIcon} alt="" className="w-6 h-6" />
          </button>
          <div
            className={`relative bg-light rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden transition-opacity duration-300 ${
              modalPhase === 'visible' ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 min-h-0 flex items-center justify-center p-6">
              <img
                src={modal.src}
                alt=""
                className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
              />
            </div>
            <p
              id="modal-title"
              className="text-center text-text/80 font-serif py-4 px-6 border-t border-gray-200"
            >
              Illustrated by {modal.illustratorName}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Art;