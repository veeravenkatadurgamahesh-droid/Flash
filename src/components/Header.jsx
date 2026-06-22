import React, { useEffect, useState } from "react";
import { Zap, ShoppingCart, User } from "lucide-react";

export default function Header({ onLoginClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.querySelector(".page-content");
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 10);
    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`app-header${scrolled ? " scrolled" : ""}`} role="banner">
      <div className="logo-wrap" aria-label="Flash home">
        <div className="logo-icon" aria-hidden="true">
          <Zap size={18} color="white" fill="white" strokeWidth={2.5} />
        </div>
        <span className="logo-text">FL<span>A</span>SH</span>
      </div>

      <p className="header-tagline" aria-label="Save Money in Seconds">
        ⚡ Save Money in Seconds
      </p>

      <button
        className="btn-login"
        onClick={onLoginClick}
        aria-label="Login to your account"
      >
        Login
      </button>
    </header>
  );
}
