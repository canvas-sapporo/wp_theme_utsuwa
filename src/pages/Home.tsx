import React from "react";
import FadingImageBox from "../components/FadingImageBox";
import logo from "../assets/logo.svg";
import xTwitter from "../assets/x-twitter-brands-solid-full.svg";
import instagram from "../assets/instagram-brands-solid-full.svg";
import youtube from "../assets/square-youtube-brands-solid-full.svg";
import pixiv from "../assets/pixiv-brands-solid-full.svg";
import facebook from "../assets/facebook-brands-solid-full.svg";

const snsData = [
  {
    name: "X",
    id: "@utsuwa_staff",
    icon: xTwitter,
    url: "https://twitter.com/utsuwa_staff",
  },
  {
    name: "Instagram",
    id: "@utsuwa_staff",
    icon: instagram,
    url: "https://instagram.com/utsuwa_staff",
  },
  {
    name: "YouTube",
    id: "@utsuwa_staff",
    icon: youtube,
    url: "https://youtube.com/utsuwa_staff",
  },
  {
    name: "pixiv",
    id: "@utsuwa_staff",
    icon: pixiv,
    url: "https://pixiv.net/utsuwa_staff",
  },
  {
    name: "Facebook",
    id: "@utsuwa_staff",
    icon: facebook,
    url: "https://facebook.com/utsuwa_staff",
  },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-12 gap-x-4 gap-y-8">
        <h1 className="text-hero-title col-span-6 flex items-center justify-center text-center">
          境界を越え、
          <br />
          物語を彩る。
        </h1>
        <FadingImageBox />

        <section className="col-span-6">
          <h2 className="text-section-title font-serif mb-2 mx-4">News</h2>

          <div className="flex flex-col gap-6">
            {/* カード 1 */}
            <div className="flex items-start gap-6 p-8 border border-gray-200 rounded-xl shadow-custom">
              <img
                src={logo}
                alt="Utsuwa Logo"
                className="w-16 h-auto flex-shrink-0"
              />

              <div className="flex flex-col flex-grow">
                <div className="text-sub-title text-text mb-4">
                  新作スマートフォン向けRPG『アルカディアの器』キャラクターデザインを担当いたしました。
                </div>
                <div className="text-small-text text-right">2026.02.05</div>
              </div>
            </div>

            {/* カード 2 */}
            <div className="flex items-start gap-6 p-8 border border-gray-200 rounded-xl shadow-custom">
              <img
                src={logo}
                alt="Utsuwa Logo"
                className="w-16 h-auto flex-shrink-0"
              />
              <div className="flex flex-col flex-grow">
                <div className="text-sub-title text-text mb-4">
                  キャラクターの「実在感」を深掘りする。デザインコラム第1回を公開しました。
                </div>
                <div className="text-small-text text-right">2026.01.20</div>
              </div>
            </div>

            {/* カード 3 */}
            <div className="flex items-start gap-6 p-8 border border-gray-200 rounded-xl shadow-custom">
              <img
                src={logo}
                alt="Utsuwa Logo"
                className="w-16 h-auto flex-shrink-0"
              />
              <div className="flex flex-col flex-grow">
                <div className="text-sub-title text-text mb-4">
                  新年あけましておめでとうございます。
                </div>
                <div className="text-small-text text-right">2026.01.01</div>
              </div>
            </div>
          </div>
        </section>

        <section className="col-span-6">
          <h2 className="text-section-title font-serif mb-2 mx-4">SNS</h2>

          {/* 2列のグリッド。gap-4（16px）で隙間を作る */}
          <div className="grid grid-cols-2 gap-4">
            {snsData.map((sns) => (
              <a
                key={sns.name}
                href={sns.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl shadow-custom"
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
