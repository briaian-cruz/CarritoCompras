function Carrito({ productosCarrito }) {
  return (
    <div>
      <h2>Carrito</h2>
      {productosCarrito.map((producto) => (
        <p key={producto.id}>
          {producto.name} - ${producto.unitPrice} - Cantidad:
          {producto.cantidad}
        </p>
      ))}
    </div>
  );
}
export default Carrito;
