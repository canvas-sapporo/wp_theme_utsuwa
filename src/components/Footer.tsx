import React from "react";
import { useLocation } from "react-router-dom";
import { snsData } from "../data/snsData";

const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full min-w-0 bg-light text-dark z-20">
      {isHome ? (
        // ホームページ用フッター（中央寄せ）
        <div className="h-20 flex items-center justify-center">
          <div className="text-center">
            <p className="text-small">
              Copyright © {currentYear} Utsuwa　All Rights Reserved
            </p>
            <p className="text-small">
              <a href="/terms" className="hover:underline">
                Terms and Conditions
              </a>
              {" | "}
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      ) : (
        // その他ページ用フッター
        <div className="my-6">
          <div className="text-center mb-4">
            <p className="text-hero-title mb-4">境界を超え、物語を彩る。</p>
            <div className="flex gap-4 justify-center">
              {snsData.map((sns) => (
                <a
                  key={sns.name}
                  href={sns.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sns.name}
                >
                  <img
                    src={sns.icon}
                    alt={sns.name}
                    className="w-12 h-12"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-small">
              Copyright © {currentYear} Utsuwa　All Rights Reserved
            </p>
            <p className="text-small">
              <a href="/terms-and-conditions" className="hover:underline">
                Terms and Conditions
              </a>
              {" | "}
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
