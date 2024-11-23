import { useState } from "react";
import Carrito from "./components/Carrito";
import Productos from "./components/Productos";
import groceries from "./data/groceries";
import "./App.css";

function App() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const agregarCarrito = (producto) => {
    const productoExistente = productosCarrito.find(
      (prodPrev) => prodPrev.id === producto.id
    );
    if (productoExistente) {
      const actualizado = productosCarrito.map((prodPrev) =>
        prodPrev.id === producto.id
          ? { ...prodPrev, cantidad: prodPrev.cantidad + 1 }
          : prodPrev
      );
      setProductosCarrito(actualizado);
    } else {
      setProductosCarrito([...productosCarrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Productos productos={groceries} agregarCarrito={agregarCarrito} />
          </div>
          <div className="col-6">
            <Carrito productosCarrito={productosCarrito} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
