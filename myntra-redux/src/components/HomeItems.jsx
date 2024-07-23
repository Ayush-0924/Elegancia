import { useDispatch, useSelector } from "react-redux";
import { MdDeleteOutline, MdStar, MdStarBorder } from "react-icons/md";
import { bagAction } from "../store/bagSlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { WishListAction } from "../store/WishList";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleonAdd = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleondelete = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };

  const wishlistItems = useSelector((store) => store.wishlist);
  const itemInWishlist = wishlistItems.indexOf(item.id) >= 0;

  const [isInWishlist, setIsInWishlist] = useState(itemInWishlist);

  useEffect(() => {
    setIsInWishlist(itemInWishlist);
  }, [itemInWishlist]);

  const handleAddToWishlist = () => {
    dispatch(WishListAction.addToWishList(item.id));
  };
  const handleRemoveFromWishlist = () => {
    dispatch(WishListAction.removeFromWishList(item.id));
  };

  const toggleWishlist = () => {
    if (isInWishlist) {
      handleRemoveFromWishlist(item);
    } else {
      handleAddToWishlist(item);
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="item-container">
      <button className="star-button" onClick={toggleWishlist}>
        {isInWishlist ? <MdStar /> : <MdStarBorder />}
      </button>
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleondelete}
        >
          <MdDeleteOutline />
          remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleonAdd}
        >
          <IoMdAddCircleOutline />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItems;
