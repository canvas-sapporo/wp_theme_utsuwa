import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Company from "./pages/Company";
import News from "./pages/News";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App: React.FC = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      // ここで認証確認・設定取得などの初期化を行う
      // 例: await fetchUser(); await loadConfig();
      await new Promise((resolve) => setTimeout(resolve, 400));
      setIsAppReady(true);
    };
    init();
  }, []);

  if (!isAppReady) {
    return <Loading fullScreen message="Loading..." />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen min-w-0 w-full max-w-full bg-light relative">
        <Header />
        <Background />
        <main className="grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<Art />} />
            <Route path="/company" element={<Company />} />
            <Route path="/news" element={<News />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
