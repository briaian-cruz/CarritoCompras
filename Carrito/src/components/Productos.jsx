function Productos({ productos, agregarCarrito }) {
  return (
    <div>
      <h2>Productos</h2>
      {productos.map((producto) => (
        <p key={producto.id} onClick={() => agregarCarrito(producto)}>
          {producto.name} - ${producto.unitPrice}
        </p>
      ))}
    </div>
  );
}
export default Productos;
