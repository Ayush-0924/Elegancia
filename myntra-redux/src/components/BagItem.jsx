import { useDispatch } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { RiDeleteBin2Fill } from "react-icons/ri";

const BagItem = ({ item }) => {

  const dispatch = useDispatch();

  const handleOnDelete = () =>{
    dispatch(bagAction.removeFromBag(item.id));
  }
  console.log(item.image)
  
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image}/>
      </div>
      <div className="item-right-part">
        <div className="company-1">{item.company}</div>
        <div className="item-name-1">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price-1">Rs {item.current_price}</span>
          <span className="original-price-1">Rs {item.original_price}</span>
          <span className="discount-percentage-1">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleOnDelete}>
      <RiDeleteBin2Fill />
      </div>
    </div>
  );
};
export default BagItem;
