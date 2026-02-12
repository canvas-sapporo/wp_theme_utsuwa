import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import checkIcon from '../assets/circle-check-regular-full.svg';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
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

const Pricing: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

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
      <h1 className="text-section-title font-serif mb-12 text-center text-text">Pricing</h1>

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
                to="/contact"
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
