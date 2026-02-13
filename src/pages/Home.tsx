import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import FadingImageBox from "../components/FadingImageBox";
import logo from "../assets/logo.svg";
import { snsData } from "../data/snsData";
import { FADE_DURATION } from "../data/characterImages";

const Home: React.FC = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = heroTitleRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: FADE_DURATION,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div className="container mx-auto my-6 md:my-12 px-4 md:px-0">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6 md:gap-y-8">
        {/* スマホ: 画面幅の正方形内で中央寄せ / PC: テキストと画像を横並び */}
        <div className="col-span-12 md:col-span-6 w-full aspect-square md:aspect-auto flex items-center justify-center md:min-h-0">
          <h1
            ref={heroTitleRef}
            className="text-hero-title text-center px-4"
            style={{ opacity: 0 }}
          >
            境界を越え、
            <br />
            物語を彩る。
          </h1>
        </div>
        <div className="col-span-12 md:col-span-6">
          <FadingImageBox />
        </div>

        {/* スマホ: フル幅で縦に / PC: News と SNS を横並び */}
        <section className="col-span-12 md:col-span-6">
          <h2 className="text-section-title font-serif mb-4 md:mb-2 mx-4">
            News
          </h2>

          <div className="flex flex-col gap-4 md:gap-6">
            {/* カード 1 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 p-5 md:p-8 border border-gray-200 rounded-xl shadow-custom bg-light">
              <img
                src={logo}
                alt="Utsuwa Logo"
                className="w-12 h-auto shrink-0 md:w-16"
              />
              <div className="flex flex-col grow min-w-0">
                <div className="text-sub-title text-text mb-2 md:mb-4">
                  新作スマートフォン向けRPG『アルカディアの器』キャラクターデザインを担当いたしました。
                </div>
                <div className="text-small-text text-right mt-auto">
                  2026.02.05
                </div>
              </div>
            </div>

            {/* カード 2 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 p-5 md:p-8 border border-gray-200 rounded-xl shadow-custom bg-light">
              <img
                src={logo}
                alt="Utsuwa Logo"
                className="w-12 h-auto shrink-0 md:w-16"
              />
              <div className="flex flex-col grow min-w-0">
                <div className="text-sub-title text-text mb-2 md:mb-4">
                  キャラクターの「実在感」を深掘りする。デザインコラム第1回を公開しました。
                </div>
                <div className="text-small-text text-right mt-auto">
                  2026.01.20
                </div>
              </div>
            </div>

            {/* カード 3 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 p-5 md:p-8 border border-gray-200 rounded-xl shadow-custom bg-light">
              <img
                src={logo}
                alt="Utsuwa Logo"
                className="w-12 h-auto shrink-0 md:w-16"
              />
              <div className="flex flex-col grow min-w-0">
                <div className="text-sub-title text-text mb-2 md:mb-4">
                  新年あけましておめでとうございます。
                </div>
                <div className="text-small-text text-right mt-auto">
                  2026.01.01
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="col-span-12 md:col-span-6">
          <h2 className="text-section-title font-serif mb-4 md:mb-2 mx-4">
            SNS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {snsData.map((sns) => (
              <a
                key={sns.name}
                href={sns.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 md:p-6 border border-gray-200 rounded-xl shadow-custom bg-light"
              >
                <img src={sns.icon} alt={sns.name} className="w-10 h-10 mb-3" />
                <span className="text-small-text font-bold text-text">
                  {sns.name}
                </span>
                <span className="text-[10px] text-gray-400">{sns.id}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
