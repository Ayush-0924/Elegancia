import React from "react";
import { useNavigate } from "react-router-dom";

export default function WishlistEmpty() {
  const navigate = useNavigate();

  const handleonclick = () => {
    navigate(`/`);
  };

  return (
    <div className="wishlist-cont">
      <div className="wishlist-container">
        <img className="wishlist-image" src="images/w2.webp" alt="empty wishlist" />
        <div>Your wishlist is empty</div>
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
