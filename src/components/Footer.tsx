import { useLocation } from 'react-router-dom';
import xTwitter from '../assets/x-twitter-brands-solid-full.svg';
import instagram from '../assets/instagram-brands-solid-full.svg';
import pixiv from '../assets/pixiv-brands-solid-full.svg';
import youtube from '../assets/square-youtube-brands-solid-full.svg';
import facebook from '../assets/facebook-brands-solid-full.svg';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-light text-dark">
      {isHome ? (
        // ホームページ用フッター（中央寄せ）
        <div className="h-20 flex items-center justify-center">
          <div className="text-center">
            <p className="text-small">
              Copyright © 2026 Utsuwa　All Rights Reserved
            </p>
            <p className="text-small">
              <a href="/terms" className="hover:underline">Terms and Conditions</a>
              {' | '}
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      ) : (
        // その他ページ用フッター
        <div className="my-6">
          <div className="text-center mb-4">
            <p className="text-hero-title mb-4">境界を超え、物語を彩る。</p>
            <div className="flex gap-4 justify-center">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={xTwitter} alt="X" className="w-12 h-12" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="w-12 h-12" />
              </a>
              <a href="https://pixiv.net" target="_blank" rel="noopener noreferrer">
                <img src={pixiv} alt="Pixiv" className="w-12 h-12" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube" className="w-12 h-12" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="w-12 h-12" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-small">
              Copyright © 2026 Utsuwa　All Rights Reserved
            </p>
            <p className="text-small">
              <a href="/terms" className="hover:underline">Terms and Conditions</a>
              {' | '}
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;