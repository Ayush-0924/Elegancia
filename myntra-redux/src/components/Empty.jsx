import React from "react";
import { useNavigate } from "react-router-dom";

export default function Empty() {
  const navigate = useNavigate();

  const handleonclick = () => {
    navigate(`/`);
  };

  return (
    <div className="cart-container">
      <div className="cart-containers">
        <img className="cart-image" src="images/cart.webp" alt="empty cart" />
        <div>Your cart is empty</div>
        <input
          type="submit"
          className="submit-button-1"
          onClick={handleonclick}
          value="continue shopping"
        />
      </div>
    </div>
  );
}
