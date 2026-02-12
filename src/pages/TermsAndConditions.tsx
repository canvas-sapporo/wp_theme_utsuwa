import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto my-12 px-4 md:px-0">
      <h1 className="text-section-title font-serif mb-10 text-center text-text">
        Terms and Conditions
      </h1>

      <div className="max-w-3xl mx-auto rounded-xl border border-white shadow-custom bg-light/75 backdrop-blur-lg overflow-hidden p-6 md:p-10">
        <article className="space-y-8 text-text">
          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">第1条（適用）</h2>
            <p className="text-body">
              本規約は、株式会社Utsuwaが運営する本ウェブサイトの利用条件を定めるものです。
            </p>
          </section>

          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">第2条（知的財産権）</h2>
            <p className="text-body">
              本ウェブサイトに掲載されている全てのコンテンツ（画像、テキスト、ロゴ、デザイン等）に関する著作権その他の知的財産権は、当社または正当な権利を有する第三者に帰属します。許可なく複製、転用、販売等の二次利用をすることを固く禁じます。
            </p>
          </section>

          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">第3条（禁止事項）</h2>
            <p className="text-body mb-3">
              ユーザーは、本ウェブサイトの利用にあたり、以下の行為を行ってはなりません。
            </p>
            <ul className="list-disc list-inside space-y-2 text-body">
              <li>法令または公序良俗に違反する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービス運営を妨害するおそれのある行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">第4条（免責事項）</h2>
            <p className="text-body">
              当社は、本ウェブサイトの内容の正確性について万全を期しておりますが、利用者が本ウェブサイトの情報を用いて行う一切の行為について、何ら責任を負うものではありません。
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsAndConditions;
