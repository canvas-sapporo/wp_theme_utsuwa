import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import barsIcon from "../assets/bars-solid-full.svg";
import xmarkIcon from "../assets/xmark-solid-full.svg";

const Header: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/art", label: "Art" },
    { to: "/company", label: "Company" },
    { to: "/news", label: "News" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="w-full min-w-0 bg-light h-[58px] md:h-20 z-20 border-dark">
        <nav className="container mx-auto h-full md:my-5 md:h-auto flex items-center justify-between gap-4 md:gap-8 px-4">
          <button
            type="button"
            className="md:hidden flex items-center justify-center p-2 -ml-2 shrink-0"
            aria-label="メニューを開く"
            onClick={() => setIsSidebarOpen(true)}
          >
            <img src={barsIcon} alt="" className="h-12 w-12" />
          </button>
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Utsuwa Logo" className="h-8 md:h-10" />
          <span className="text-logo font-bold text-2xl md:text-4xl">
            Utsuwa
          </span>
        </Link>
        <div className="hidden md:flex gap-8 text-cta shrink-0">
          <Link to="/" className={isActive("/") ? "underline" : ""}>
            Home
          </Link>
          <Link to="/art" className={isActive("/art") ? "underline" : ""}>
            Art
          </Link>
          <Link
            to="/company"
            className={isActive("/company") ? "underline" : ""}
          >
            Company
          </Link>
          <Link to="/news" className={isActive("/news") ? "underline" : ""}>
            News
          </Link>
          <Link
            to="/pricing"
            className={isActive("/pricing") ? "underline" : ""}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className={isActive("/contact") ? "underline" : ""}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>

      {/* モバイル用オーバーレイ */}
      <div
        className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
        style={{
          opacity: isSidebarOpen ? 1 : 0,
          pointerEvents: isSidebarOpen ? "auto" : "none",
        }}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* モバイル用サイドバー */}
      <aside
        className="md:hidden fixed left-0 top-0 bottom-0 w-64 bg-light border-r border-dark z-40 flex flex-col transition-transform duration-300 ease-out"
        style={{
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
        }}
        aria-hidden={!isSidebarOpen}
        aria-label="メニュー"
      >
        <button
          type="button"
          className="flex items-center justify-center p-4 self-start"
          aria-label="メニューを閉じる"
          onClick={closeSidebar}
        >
          <img src={xmarkIcon} alt="" className="h-6 w-6" />
        </button>
        <nav className="flex flex-col px-6 pb-8 gap-6 text-cta">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeSidebar}
              className={isActive(to) ? "underline" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Header;
