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
  const quitarCarrito = (producto) => {
    const productoExistente = productosCarrito.find(
      (prodPrev) => prodPrev.id === producto.id
    );
    if (productoExistente.cantidad === 1) {
      const actualizado = productosCarrito.filter(
        (prodPrev) => prodPrev.id !== producto.id
      );
      setProductosCarrito(actualizado);
    } else {
      const actualizado = productosCarrito.map((prodPrev) =>
        prodPrev.id === producto.id
          ? { ...prodPrev, cantidad: prodPrev.cantidad - 1 }
          : prodPrev
      );
      setProductosCarrito(actualizado);
    }
  };
  const calcularTotal = () => {
    const total = productosCarrito.reduce((suma, producto) => {
      return suma + producto.unitPrice * producto.cantidad;
    }, 0);
    return total.toFixed(2);
  };
  return (
    <>
      <div className="container contenedor">
        <div className="row">
          <div className="col-6">
            <Productos productos={groceries} agregarCarrito={agregarCarrito} />
          </div>
          <div className="col-6">
            <Carrito
              productosCarrito={productosCarrito}
              quitarCarrito={quitarCarrito}
            />
            <h2 className="total">Total: ${calcularTotal()}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
