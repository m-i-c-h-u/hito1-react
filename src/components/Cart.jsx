import { useState } from "react";
import { pizzaCart } from "../assets/pizzas.js";

const Cart = () => {
 const [cart, setCart] = useState(pizzaCart);

const agregarPizza = (id) => {
  setCart(
    cart.map((item) => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    )
  );
};

const quitarPizza = (id) => {
  setCart((prevCart) => {
    const updatedCart = prevCart.map((item) =>
      item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
    )
    .filter((item) => item.count > 0)

    return updatedCart;
  });
};

const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

const vaciarCarrito = () => {
  setCart([]);
};

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
        <button
          className="btn-quitar"
          onClick={() => quitarPizza(item.id)}
        >
          -
        </button>
        <span className="pizza-count">{item.count}</span> 
        <button
          className="btn-agregar"
          onClick={() => agregarPizza(item.id)}
        >
          +
        </button>
      </div>
    </div>
  ))}
  <h3>Total: ${total}</h3>
  <button className="btn-pay">Pagar</button>
  <button className="btn-clear" onClick={vaciarCarrito}>Vaciar Carrito</button>
</div>

);
};

export default Cart;    
