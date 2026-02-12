import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto my-12 px-4 md:px-0">
      <h1 className="text-section-title font-serif mb-10 text-center text-text">
        Privacy Policy
      </h1>

      <div className="max-w-3xl mx-auto rounded-xl border border-white shadow-custom bg-light/75 backdrop-blur-lg overflow-hidden p-6 md:p-10">
        <article className="space-y-8 text-text">
          <header className="pb-4 border-b border-gray-200">
            <h2 className="text-sub-title font-serif text-text mb-3">
              プライバシーポリシー（個人情報保護方針）
            </h2>
            <p className="text-body">
              株式会社Utsuwa（以下「当社」）は、当社が運営するウェブサイトおよびサービスにおいて、ユーザーの個人情報の取扱いについて、本ポリシーを定めます。
            </p>
          </header>

          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">第1条（個人情報）</h2>
            <p className="text-body">
              「個人情報」とは、個人情報の保護に関する法律に定める個人情報を指し、氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別することができる情報をいいます。
            </p>
          </section>

          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">
              第2条（個人情報の収集方法）
            </h2>
            <p className="text-body">
              当社は、ユーザーがお問い合わせフォームをご利用になる際などに、氏名、メールアドレス、電話番号等の個人情報をご登録いただく場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">
              第3条（個人情報を収集・利用する目的）
            </h2>
            <p className="text-body mb-3">
              当社が個人情報を収集・利用する目的は、以下のとおりです。
            </p>
            <ul className="list-disc list-inside space-y-2 text-body">
              <li>当社サービスの提供・運営のため</li>
              <li>ユーザーからのお問い合わせに回答するため（本人確認を含む）</li>
              <li>当社が提供する他のサービスに関する情報を送付するため</li>
              <li>メンテナンス、重要なお知らせなど必要に応じた連絡のため</li>
              <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーを特定し、ご利用をお断りするため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">
              第4条（個人情報の第三者提供）
            </h2>
            <p className="text-body mb-3">
              当社は、ユーザーの同意を得ることなく、個人情報を第三者に提供することはありません。ただし、個人情報の保護に関する法律その他の法令で認められる場合を除きます。次の場合には、当該情報提供先においてユーザーの同意が難しいと認められるときに限り、第三者に提供することがあります。
            </p>
            <ul className="list-disc list-inside space-y-2 text-body">
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">
              第5条（個人情報の開示・訂正・削除）
            </h2>
            <p className="text-body">
              当社が保有するユーザーの個人情報について、ご本人から開示、訂正、追加、削除の請求があった場合、当社所定の手続に従い、速やかに対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-sub-title font-serif text-text mb-3">第6条（お問い合わせ窓口）</h2>
            <p className="text-body">
              本ポリシーに関するお問い合わせは、下記の窓口までご連絡ください。
            </p>
            <dl className="mt-4 space-y-1 text-body">
              <div>
                <dt className="font-semibold inline">所在地：</dt>
                <dd className="inline"> 〒150-0001 東京都渋谷区神宮前5-32-10 Creative Arch 4F</dd>
              </div>
              <div>
                <dt className="font-semibold inline">会社名：</dt>
                <dd className="inline"> 株式会社Utsuwa</dd>
              </div>
              <div>
                <dt className="font-semibold inline">担当：</dt>
                <dd className="inline"> 個人情報保護担当</dd>
              </div>
              <div>
                <dt className="font-semibold inline">メールアドレス：</dt>
                <dd className="inline"> info@utsuwa.jp</dd>
              </div>
            </dl>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
