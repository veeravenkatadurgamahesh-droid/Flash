import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, emoji: "🍚", name: "Premium Rice", qty: "5 kg", price: 320 },
    { id: 2, emoji: "🥛", name: "Fresh Milk", qty: "1 litre", price: 60 },
    { id: 3, emoji: "🍎", name: "Fresh Apples", qty: "1 kg", price: 150 },
    { id: 4, emoji: "🥚", name: "Farm Eggs", qty: "12 pieces", price: 90 }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", paddingBottom: "80px" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          background: "#ffffff",
          borderBottom: "1px solid #eeeeee"
        }}
      >
        <h1 style={{ margin: 0, color: "#ff5a1f" }}>⚡ Flash</h1>

        <span style={{ color: "#555" }}>Best deals in seconds</span>

        <button
          style={{
            background: "#ff5a1f",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 16px"
          }}
        >
          Login
        </button>
      </header>

      <main style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
        <input
          type="text"
          placeholder="Search groceries..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #cccccc",
            fontSize: "16px"
          }}
        />

        <section
          style={{
            marginTop: "20px",
            padding: "24px",
            borderRadius: "16px",
            background: "#fff1e8"
          }}
        >
          <h2 style={{ marginTop: 0 }}>Save more on daily groceries</h2>
          <p>Find the lowest prices and best offers near you.</p>
          <button
            style={{
              background: "#ff5a1f",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "12px 18px"
            }}
          >
            Explore Deals
          </button>
        </section>

        <h2 style={{ marginTop: "30px" }}>🔥 Lowest Prices</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "16px"
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #eeeeee",
                borderRadius: "14px",
                padding: "16px",
                background: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
              }}
            >
              <div style={{ fontSize: "42px" }}>{product.emoji}</div>

              <h3 style={{ marginBottom: "5px" }}>{product.name}</h3>

              <p style={{ color: "#777", marginTop: 0 }}>{product.qty}</p>

              <strong style={{ fontSize: "20px" }}>₹{product.price}</strong>

              <button
                onClick={() => setCartCount((count) => count + 1)}
                style={{
                  width: "100%",
                  marginTop: "14px",
                  background: "#ff5a1f",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px"
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "30px" }}>
            No products found.
          </p>
        )}

        <h2 style={{ marginTop: "35px" }}>🛍️ Categories</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px"
          }}
        >
          <div style={{ textAlign: "center", padding: "14px", background: "#f7f7f7", borderRadius: "12px" }}>🍎<br />Fruits</div>
          <div style={{ textAlign: "center", padding: "14px", background: "#f7f7f7", borderRadius: "12px" }}>🥬<br />Vegetables</div>
          <div style={{ textAlign: "center", padding: "14px", background: "#f7f7f7", borderRadius: "12px" }}>🥛<br />Dairy</div>
          <div style={{ textAlign: "center", padding: "14px", background: "#f7f7f7", borderRadius: "12px" }}>🍪<br />Snacks</div>
        </div>
      </main>

      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-around",
          padding: "14px",
          background: "white",
          borderTop: "1px solid #eeeeee"
        }}
      >
        <span>🏠 Home</span>
        <span>📂 Categories</span>
        <span>🔍 Search</span>
        <span>🛒 Cart ({cartCount})</span>
        <span>👤 Profile</span>
      </footer>
    </div>
  );
}

export default App;
