import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, clearCart, total } = useCart();
  const { token } = useUser();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  console.log('🔍 Token actual:', token);

  const handleCheckout = async () => {
    console.log("🛒 Botón de pago presionado...");

    if (!token) {
      console.log("🔴 Usuario no autenticado, redirigiendo a login...");
      navigate("/login");
      return;
    }

    console.log("✅ Usuario autenticado, procesando compra...");

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) {
        throw new Error("❌ Error al procesar la compra.");
      }

      setMessage("🎉 ¡Compra realizada con éxito!");
      setMessageType("success");
      clearCart();
    } catch (error) {
      setMessage("⚠ Hubo un problema con la compra. Inténtalo nuevamente.");
      setMessageType("error");
      console.error("🔥 Error en checkout:", error);
    }
  };

  return (
    <div className="cart-container">
      <h2>🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="pizza-info">
              <img src={item.img} alt={item.name} className="pizza-image" />
              <div className="pizza-details">
                <h4>{item.name}</h4>
              </div>
            </div>
            <div className="pizza-actions">
              <span className="pizza-price">${item.price}</span>
              <button className="btn-quitar" onClick={() => updateQuantity(item.id, -1)}>
                -
              </button>
              <span className="pizza-count">{item.count}</span>
              <button className="btn-agregar" onClick={() => updateQuantity(item.id, 1)}>
                +
              </button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && <h3>Total: ${total}</h3>}

      {/* 🔹 Botón de pago ahora redirige si no hay token */}
      {/* <button className="btn-pay" onClick={handleCheckout} disabled={cart.length === 0}>
        {token ? "💳 Pagar" : "🔑 Inicia sesión para pagar"}
      </button> */}

      <button
        className="btn-pay"
        onClick={handleCheckout}
        disabled={cart.length === 0}
        style={{ backgroundColor: cart.length === 0 ? "#ccc" : "#28a745", cursor: cart.length === 0 ? "not-allowed" : "pointer" }}
      >
        {token ? "💳 Pagar" : "🔑 Inicia sesión para pagar"}
      </button>


      <button className="btn-clear" onClick={clearCart}>🗑 Vaciar Carrito</button>

      <div className={`checkout-message ${messageType}`}>{message}</div>
    </div>
  );
};

export default Cart;



