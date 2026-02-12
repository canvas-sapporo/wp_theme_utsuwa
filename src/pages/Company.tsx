import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mapImage from '../assets/map.png';

gsap.registerPlugin(ScrollTrigger);

const CardTab: React.FC<{
  icon: React.ReactNode;
  title: string;
}> = ({ icon, title }) => (
  <div className="flex items-center gap-2 bg-gray-700 text-white px-4 py-3 rounded-t-xl">
    <span className="w-5 h-5 flex items-center justify-center shrink-0">{icon}</span>
    <span className="font-semibold">{title}</span>
  </div>
);

const Company: React.FC = () => {
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
      <h1 className="text-section-title font-serif mb-12 text-center text-text">Company</h1>

      <div ref={cardsRef} className="flex flex-col gap-8 max-w-3xl mx-auto">
        {/* Message */}
        <article className="rounded-xl overflow-hidden shadow-custom bg-light">
          <CardTab
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            }
            title="Message"
          />
          <div className="p-6 md:p-8">
            <h2 className="text-sub-title font-serif text-text mb-4">境界を超え、物語を彩る。</h2>
            <p className="text-body text-text mb-4">
              私たちUtsuwaは、特定のスタイルに固執することはありません。描くのは、単なる外見の創作ではなく、そのキャラクターが歩んできた背景、そしてこれから始まる物語を創りだすための「器」です。
            </p>
            <p className="text-body text-text">
              ファンタジーの世界観の奥深さから、日常的なリアリティまで、作り手の想いを大切にし、最高の体験を届けるデザインを通して、忘れられない「あのシーン」を創り出します。
            </p>
          </div>
        </article>

        {/* History */}
        <article className="rounded-xl overflow-hidden shadow-custom bg-light">
          <CardTab
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            }
            title="History"
          />
          <div className="p-6 md:p-8">
            <ul className="space-y-3 text-body text-text">
              <li><strong>2020年04月</strong> クリエイティブユニット「Utsuwa」として活動を開始。</li>
              <li><strong>2021年10月</strong> インディーゲームタイトルのメインキャラクターデザインを担当。</li>
              <li><strong>2022年01月</strong> 株式会社Utsuwaを設立。最高の「器」としてのデザイン体制を確立。</li>
              <li><strong>2025年06月</strong> 国内主要ゲームメーカー、アニメ制作会社とのパートナーシップを締結。</li>
              <li><strong>現在</strong> ジャンルの境界を超え、年間50体を超える実写感のあるキャラクターを創出中。</li>
            </ul>
            <p className="text-body text-text mt-4">
              ジャンルや個人の境界を超え、多様なキャラクターを創り続けています。
            </p>
          </div>
        </article>

        {/* Overview */}
        <article className="rounded-xl overflow-hidden shadow-custom bg-light">
          <CardTab
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            }
            title="Overview"
          />
          <div className="p-6 md:p-8">
            <dl className="space-y-2 text-body text-text">
              <div><dt className="font-bold inline">商号</dt><dd className="inline"> 株式会社Utsuwa</dd></div>
              <div><dt className="font-bold inline">設立</dt><dd className="inline"> 2022年1月1日</dd></div>
              <div><dt className="font-bold inline">代表取締役</dt><dd className="inline"> 宇津輪 圭一</dd></div>
              <div><dt className="font-bold inline">所在地</dt><dd className="inline"> 〒150-0001 東京都渋谷区神宮前5-32-10 Creative Arch 4F</dd></div>
              <div><dt className="font-bold inline">事業内容</dt><dd className="inline"> キャラクターデザイン</dd></div>
            </dl>
          </div>
        </article>

        {/* Access */}
        <article className="rounded-xl overflow-hidden shadow-custom bg-light">
          <CardTab
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
            title="Access"
          />
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="font-bold text-text mb-1">所在地</h3>
              <p className="text-body text-text">〒150-0001 東京都渋谷区神宮前5-32-10 Creative Arch 4F</p>
            </div>
            <div>
              <h3 className="font-bold text-text mb-2">最寄り駅からのアクセス</h3>
              <ul className="list-disc list-inside space-y-1 text-body text-text">
                <li>JR山手線・埼京線「渋谷駅」01出口より徒歩約7分</li>
                <li>東京メトロ千代田線・副都心線「明治神宮前〈原宿〉駅」7番出口より徒歩約5分</li>
                <li>JR山手線「原宿駅」東口より徒歩約10分</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img src={mapImage} alt="アクセスマップ" className="w-full h-auto" />
            </div>
            <div>
              <h3 className="font-bold text-text mb-1">周辺のご案内</h3>
              <p className="text-body text-text">
                明治通りと旧渋谷川の間に位置し、通称「キャットストリート」にほど近いエリアです。1階にアパレルショップやカフェが入る「Creative Arch」ビルの4階が私たちのスタジオです。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-text mb-1">備考</h3>
              <p className="text-body text-text">
                お問い合わせは完全予約制となっております。ご来社の際は、お問い合わせフォーム（Contact）よりご連絡ください。
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Company;
