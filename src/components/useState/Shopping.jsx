import React, { useState } from "react";
const initial = [
  { id: 1, title: "product", discripcion: "des" },
  { id: 2, title: "product #2", discripcion: "des #2" },
];

const Shopping = () => {
  const [cart, setCart] = useState(initial);

  const deleteProducto = (productId) => {
    const changedCart = cart.filter((product) => product.id !== productId);
    setCart(changedCart);
  };

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();
    const changedCart = [newProduct, ...cart];
    setCart(changedCart);
  };

  const updataProduct = (editProduct) => {
    const changedCart = cart.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setCart(changedCart);
  };
  return (
    <>
      <div style={{ width: "60%", height: "60vh", background: "darksalmon" }}>
        <button
          className="btn btn-secondary"
          onClick={() =>
            addProduct({ title: "nuevo titula", discripcion: "nueva des" })
          }
        >
          Agregar
        </button>

        <button
          className="btn btn-secondary"
          onClick={() =>
            updataProduct({
              id: 1,
              title: "edit titula",
              discripcion: "edit des",
            })
          }
        >
          Auto
        </button>

        {cart.map((product) => (
          <div key={product.id}>
            <h1>
              {product.id}
              {product.title}
            </h1>
            <p>{product.discripcion}</p>
            <button
              className="btn btn-danger m-3"
              onClick={() => deleteProducto(product.id)}
            >
              liminar
            </button>
            <button
              className="btn btn-secondary"
              onClick={() =>
                updataProduct({
                  id: product.id,
                  title: "edit titula",
                  discripcion: "edit des",
                })
              }
            >
              Auto
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export { Shopping };
