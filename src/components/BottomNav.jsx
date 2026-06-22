import React from "react";
import { Home, Grid, Search, ShoppingCart, User } from "lucide-react";
import { useApp } from "../context/AppContext";

const tabs = [
  { id: "home", label: "Home", Icon: Home },
  { id: "categories", label: "Categories", Icon: Grid },
  { id: "search", label: "Search", Icon: Search },
  { id: "cart", label: "Cart", Icon: ShoppingCart },
  { id: "profile", label: "Profile", Icon: User },
];

export default function BottomNav({ active, onChange }) {
  const { cartCount } = useApp();

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      <div className="bottom-nav-inner">
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`nav-item${active === id ? " active" : ""}`}
            onClick={() => onChange(id)}
            aria-label={label}
            aria-current={active === id ? "page" : undefined}
          >
            <Icon size={20} strokeWidth={active === id ? 2.5 : 2} />
            {label}
            {id === "cart" && cartCount > 0 && (
              <span className="nav-badge" aria-label={`${cartCount} items in cart`}>
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
