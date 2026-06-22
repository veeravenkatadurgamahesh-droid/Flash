import React, { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [toast, setToast] = useState(null);
  const [alerts, setAlerts] = useState({});

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const addToCart = useCallback((product, storeId) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      const storePrice = product.prices.find(p => p.store === storeId) || product.prices[0];
      return [...prev, { product, storeId, priceInfo: storePrice, qty: 1 }];
    });
    showToast("Added to cart ✓");
  }, [showToast]);

  const removeFromCart = useCallback((productId) => {
    setCart(prev => prev.filter(i => i.product.id !== productId));
    showToast("Removed from cart");
  }, [showToast]);

  const toggleWishlist = useCallback((product) => {
    setWishlist(prev => {
      const has = prev.find(p => p.id === product.id);
      if (has) { showToast("Removed from wishlist"); return prev.filter(p => p.id !== product.id); }
      showToast("Added to wishlist ♥");
      return [...prev, product];
    });
  }, [showToast]);

  const addRecentlyViewed = useCallback((product) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      return [product, ...filtered].slice(0, 8);
    });
  }, []);

  const toggleAlert = useCallback((productId) => {
    setAlerts(prev => {
      const has = prev[productId];
      showToast(has ? "Price alert removed" : "Price alert set! 🔔");
      return { ...prev, [productId]: !has };
    });
  }, [showToast]);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.priceInfo.price * i.qty, 0);
  const cartSavings = cart.reduce((sum, i) => sum + (i.priceInfo.original - i.priceInfo.price) * i.qty, 0);

  return (
    <AppContext.Provider value={{
      cart, cartCount, cartTotal, cartSavings,
      wishlist, recentlyViewed, alerts, toast,
      addToCart, removeFromCart, toggleWishlist,
      addRecentlyViewed, toggleAlert, showToast
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
