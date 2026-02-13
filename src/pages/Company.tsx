import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mapImage from "../assets/map.png";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CardHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-3 mb-4">
    <img src={logo} alt="" className="w-12 h-auto shrink-0" width={48} />
    <h2 className="text-sub-title font-serif text-text">{title}</h2>
  </div>
);

const TITLE = "Company";

const Company: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const underline = underlineRef.current;
    if (!title) return;

    const chars = gsap.utils.toArray<HTMLElement>(
      title.querySelectorAll("span[data-char]"),
    );
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
      {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.out",
        transformOrigin: "left",
      },
      "-=0.15",
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
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
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

      <div ref={cardsRef} className="flex flex-col gap-8 max-w-3xl mx-auto">
        {/* Message */}
        <article className="rounded-xl border border-white shadow-custom bg-light/75 backdrop-blur-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <CardHeader title="Message" />
            <h3 className="text-sub-title font-serif text-text mb-4">
              境界を超え、物語を彩る。
            </h3>
            <p className="text-body text-text mb-4">
              私たちUtsuwaは、特定のスタイルに固執することはありません。描くのは、単なる外見の創作ではなく、そのキャラクターが歩んできた背景、そしてこれから始まる物語を創りだすための「器」です。
            </p>
            <p className="text-body text-text">
              ファンタジーの世界観の奥深さから、日常的なリアリティまで、作り手の想いを大切にし、最高の体験を届けるデザインを通して、忘れられない「あのシーン」を創り出します。
            </p>
          </div>
        </article>

        {/* History */}
        <article className="rounded-xl border border-white shadow-custom bg-light/75 backdrop-blur-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <CardHeader title="History" />
            <ul className="space-y-3 text-body text-text">
              <li>
                <strong>2020年04月</strong>{" "}
                クリエイティブユニット「Utsuwa」として活動を開始。
              </li>
              <li>
                <strong>2021年10月</strong>{" "}
                インディーゲームタイトルのメインキャラクターデザインを担当。
              </li>
              <li>
                <strong>2022年01月</strong>{" "}
                株式会社Utsuwaを設立。最高の「器」としてのデザイン体制を確立。
              </li>
              <li>
                <strong>2025年06月</strong>{" "}
                国内主要ゲームメーカー、アニメ制作会社とのパートナーシップを締結。
              </li>
              <li>
                <strong>現在</strong>{" "}
                ジャンルの境界を超え、年間50体を超える実写感のあるキャラクターを創出中。
              </li>
            </ul>
            <p className="text-body text-text mt-4">
              ジャンルや個人の境界を超え、多様なキャラクターを創り続けています。
            </p>
          </div>
        </article>

        {/* Overview */}
        <article className="rounded-xl border border-white shadow-custom bg-light/75 backdrop-blur-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <CardHeader title="Overview" />
            <dl className="space-y-2 text-body text-text">
              <div>
                <dt className="font-bold inline">商号</dt>
                <dd className="inline"> 株式会社Utsuwa</dd>
              </div>
              <div>
                <dt className="font-bold inline">設立</dt>
                <dd className="inline"> 2022年1月1日</dd>
              </div>
              <div>
                <dt className="font-bold inline">代表取締役</dt>
                <dd className="inline"> 宇津輪 圭一</dd>
              </div>
              <div>
                <dt className="font-bold inline">所在地</dt>
                <dd className="inline">
                  {" "}
                  〒150-0001 東京都渋谷区神宮前5-32-10 Creative Arch 4F
                </dd>
              </div>
              <div>
                <dt className="font-bold inline">事業内容</dt>
                <dd className="inline"> キャラクターデザイン</dd>
              </div>
            </dl>
          </div>
        </article>

        {/* Access */}
        <article className="rounded-xl border border-white shadow-custom bg-light/75 backdrop-blur-lg overflow-hidden">
          <div className="p-6 md:p-8 space-y-6">
            <CardHeader title="Access" />
            <div>
              <h3 className="font-bold text-text mb-1">所在地</h3>
              <p className="text-body text-text">
                〒150-0001 東京都渋谷区神宮前5-32-10 Creative Arch 4F
              </p>
            </div>
            <div>
              <h3 className="font-bold text-text mb-2">
                最寄り駅からのアクセス
              </h3>
              <ul className="list-disc list-inside space-y-1 text-body text-text">
                <li>JR山手線・埼京線「渋谷駅」01出口より徒歩約7分</li>
                <li>
                  東京メトロ千代田線・副都心線「明治神宮前〈原宿〉駅」7番出口より徒歩約5分
                </li>
                <li>JR山手線「原宿駅」東口より徒歩約10分</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img
                src={mapImage}
                alt="アクセスマップ"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="font-bold text-text mb-1">周辺のご案内</h3>
              <p className="text-body text-text">
                明治通りと旧渋谷川の間に位置し、通称「キャットストリート」にほど近いエリアです。1階にアパレルショップやカフェが入る「Creative
                Arch」ビルの4階が私たちのスタジオです。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-text mb-1">備考</h3>
              <p className="text-body text-text">
                お問い合わせは完全予約制となっております。ご来社の際は、お問い合わせフォーム（
                <Link to="/contact" className="underline hover:opacity-80">
                  Contact
                </Link>
                ）よりご連絡ください。
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Company;
