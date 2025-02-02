import { useState, useEffect } from "react";

const Pizza = () => {
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/pizzas/p001");
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error('Error fetching pizzas:', error);
            }
        };

        fetchPizza();
    }, []);

    if (!pizza) {
        return <p>Cargando pizza...</p>;
    }

    return (
        <div className="container mt-4 mb-4 w-50 p-4 border shadow">
      <h2 className="text-center">{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} className="img-fluid" />
      <p>
        <strong>Ingredientes:</strong> {pizza.ingredients ? pizza.ingredients.join(", ") : "Sin ingredientes"}
      </p>
      <p>
        <strong>Precio:</strong> ${pizza.price}
      </p>
      <p>
        <strong>Descripción:</strong> {pizza.description}
      </p>
      <button className="btn btn-dark">Añadir al carrito</button>
    </div>
    );
};

export default Pizza;