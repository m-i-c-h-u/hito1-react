import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, clearCart, total } = useCart();

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
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
      ))}
      <h3>Total: ${total}</h3>
      <button className="btn-pay">Pagar</button>
      <button className="btn-clear" onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
