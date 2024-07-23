import { useSelector } from "react-redux";
import Empty from "../components/Empty";
import BagItem from "../components/BagItem";
import WishLIST from "../components/WishListItem";
import WishlistEmpty from "../components/WishlistEmpty";


const wishList = () => {
  const wishListItems = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.item);
  
  const finalItems = items.filter((item) => {
    const itemIndex = wishListItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main className="dark">
      {finalItems.length === 0 ? (
        <WishlistEmpty />
      ) : (
        <div className="wishlist-page ">  
          <div className="wishlist-items-container">
            {finalItems.map((item) => (
              < WishLIST item={item} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};
export default wishList;
