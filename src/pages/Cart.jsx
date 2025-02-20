import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, updateQuantity, clearCart, total } = useCart();
  const { token } = useUser();

  console.log("🛒 Estado actual del carrito:", cart); // Verificar si el carrito tiene productos

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>

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

      <button className="btn-pay" disabled={!token}>
        {token ? "Pagar" : "Inicia sesión para pagar"}
      </button>

      <button className="btn-clear" onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
