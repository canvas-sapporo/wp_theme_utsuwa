import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/logo.svg';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    title: '新作スマートフォン向けRPG「アルカディアの器」キャラクターデザインを担当いたしました。',
    date: '2023.03.01',
    description: 'スマートフォン向けRPG『アルカディアの器』のメインキャラクターデザインを担当いたしました。世界観に合わせたキャラクター造形にご好評をいただいております。',
  },
  {
    title: 'キャラクターの「実在感」を深掘りする。デザインコラム第1回を公開しました。',
    date: '2023.01.28',
    description: 'キャラクターに「実在感」を持たせるための考え方や制作の裏側をお伝えするデザインコラムを立ち上げました。第1回ではコンセプトの立て方について触れています。',
  },
  {
    title: '新年あけましておめでとうございます。',
    date: '2022.12.28',
    description: '本年もUtsuwaをどうぞよろしくお願いいたします。Creative Archスタジオにて、新たな一年もキャラクターと物語の「器」として活動してまいります。',
  },
  {
    title: '国内最大級のクリエイティブカンファレンス「Design Bridge 2026」への登壇が決定いたしました。',
    date: '2022.11.19',
    description: 'デジタルとキャラクター表現をテーマに、国内最大級のクリエイティブカンファレンス「Design Bridge 2026」に登壇することが決まりました。詳細は追ってお知らせいたします。',
  },
  {
    title: '次世代の物語を共に創る、コンセプトアーティストおよびレタッチャーを募集します。',
    date: '2022.04.01',
    description: 'キャラクターに「命」を吹き込む仕事に共感し、共に挑戦してくださるコンセプトアーティスト・レタッチャーを募集しています。ご応募をお待ちしております。',
  },
];

const News: React.FC = () => {
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
      <h1 className="text-section-title font-serif mb-12 text-center text-text">News</h1>

      <div ref={cardsRef} className="flex flex-col gap-8 max-w-3xl mx-auto">
        {newsItems.map((item, i) => (
          <article
            key={i}
            className="rounded-xl border border-white shadow-custom bg-light/75 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6 mb-4">
                <img
                  src={logo}
                  alt=""
                  className="w-12 h-auto shrink-0"
                  width={48}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
                    <h2 className="text-sub-title font-serif text-text mb-1 md:mb-0">
                      {item.title}
                    </h2>
                    <time
                      dateTime={item.date.replace(/\./g, '-')}
                      className="text-small-text text-text shrink-0 md:text-right"
                    >
                      {item.date}
                    </time>
                  </div>
                  <p className="text-body text-text mt-3">{item.description}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
