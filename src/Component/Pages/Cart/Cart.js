import { faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useTitle from "../../Shared File/useTitle/useTitle";
import "./Cart.css";

const Cart = ({ cart, handleRemoveCart }) => {
  useTitle("Cart");
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let tax;
  let grandTotal;
  for (const product of cart) {
    // console.log(product)
    total = total + product.price;
    shipping = shipping + product.shipping;
    tax = parseFloat(10 / (total + shipping)).toFixed(2);
    grandTotal = parseFloat(total + shipping + tax).toFixed(2);
  }
  return (
    <div className="cart">
      <div>
        {cart.map((items) => (
          <div className="cart-container">
            <img src={items.img} alt="" />
            <div>
              <h1 style={{ fontSize: "25px" }}>{items.name}</h1>
              <p style={{ marginTop: "10px" }}>Price: ${items.price}</p>
            </div>

            <button onClick={() => handleRemoveCart(items)}>
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
          </div>
        ))}
      </div>
      <div className="order-summury">
        <h3>Order Summury</h3>
        <hr />
        <p>Total price: ${total}</p>
        <p>Total shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <hr />
        <h6>Grand Total: ${grandTotal}</h6>
      </div>
    </div>
  );
};

export default Cart;
