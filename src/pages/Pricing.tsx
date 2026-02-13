import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import checkIcon from '../assets/circle-check-regular-full.svg';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    planId: 'standard' as const,
    price: '¥50,000~',
    name: 'スタンダードプラン',
    features: [
      'キャラクター基本設計（全身立ち絵1枚）',
      '表情差分（3種：喜・怒・哀）',
      '簡易三面図',
      '個人活動、SNS用アイコン、物語のサブキャラクターなど。',
    ],
  },
  {
    planId: 'business' as const,
    price: '¥120,000~',
    name: 'ビジネスプラン',
    features: [
      '高精細キャラクターデザイン（全身立ち絵）',
      '詳細な設定資料（三面図、衣装細部、持ち物デザイン）',
      '表情差分（5種）',
      '著作権譲渡（または商用利用ライセンス）',
      'ゲームメインキャラクター、VTuberモデル原画、出版物など。',
    ],
  },
  {
    planId: 'full-order' as const,
    price: '都度お見積り',
    name: 'フルオーダープラン',
    features: [
      'メインキャラクター（複数体）',
      '世界観設定に基づいたキービジュアル制作',
      'ロゴデザイン または背景設定の提案',
      '専任担当によるディレクション',
      '新規IP開発、アニメーションプロジェクト、企業ブランディングなど。',
    ],
  },
];

const TITLE = "Pricing";

const Pricing: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const underline = underlineRef.current;
    if (!title) return;
    const chars = gsap.utils.toArray<HTMLElement>(title.querySelectorAll("span[data-char]"));
    gsap.set(chars, { opacity: 0, y: 16 });
    gsap.set(underline, { scaleX: 0 });
    const tl = gsap.timeline();
    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.06,
      ease: "power2.out",
    }).to(
      underline,
      { scaleX: 1, duration: 0.5, ease: "power2.out", transformOrigin: "left" },
      "-=0.15"
    );
  }, []);

  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = gsap.utils.toArray<HTMLElement>(container.children);
    if (cards.length === 0) return;

    const triggers: ScrollTrigger[] = [];
    cards.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 24 });
      const anim = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
      if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="container mx-auto my-12 px-4 md:px-0">
      <div className="mb-12 flex justify-center">
        <div className="inline-block text-center">
          <h1
            ref={titleRef}
            className="text-section-title font-serif text-text"
          >
            {TITLE.split("").map((char, i) => (
              <span key={i} data-char className="inline-block">
                {char}
              </span>
            ))}
          </h1>
          <span
            ref={underlineRef}
            className="mt-2 block h-0.5 w-full bg-dark origin-left"
            style={{ transform: "scaleX(0)" }}
            aria-hidden
          />
        </div>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {plans.map((plan, i) => (
          <article
            key={i}
            className="rounded-xl border border-white shadow-custom overflow-hidden flex flex-col backdrop-blur-lg"
          >
            <div className="p-6 md:p-8 bg-light/75 backdrop-blur-lg">
              <p className="text-section-title font-serif text-text mb-1 text-center">
                {plan.price}
              </p>
              <p className="text-sub-title font-serif text-text mb-6 text-center">{plan.name}</p>
              <Link
                to={`/contact?plan=${plan.planId}`}
                className="inline-flex items-center justify-center w-full bg-dark text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Contact
              </Link>
            </div>
            <div className="border-t border-gray-200" />
            <div className="p-6 md:p-8 bg-white/75 backdrop-blur-lg flex-1 min-h-0">
              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-body text-text">
                    <img
                      src={checkIcon}
                      alt=""
                      className="w-4 h-4 shrink-0 mt-0.5"
                      width={16}
                      height={16}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
