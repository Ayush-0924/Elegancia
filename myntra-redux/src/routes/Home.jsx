import React, { useState } from "react";
import HomeItems from "../components/HomeItems";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const items = useSelector((store) => store.item);
  const urlparams = new URLSearchParams(location.search);
  const searchValue = urlparams.get('search');
  const initialVisibleCount = 12; // Initial count of visible items
  const [visibleItemsCount, setVisibleItemsCount] = useState(initialVisibleCount);

  const filteredItems = items.filter((item) => {
    if (searchValue) {
      const searchTerm = searchValue.toLowerCase();
      return item.item_name.toLowerCase().includes(searchTerm) || item.company.toLowerCase().includes(searchTerm);
    }
    return true;
  });

  const visibleItems = filteredItems.slice(0, visibleItemsCount);

  const handleShowMore = () => {
    setVisibleItemsCount((prevCount) => prevCount + initialVisibleCount);
  };

  const handleShowLess = () => {
    setVisibleItemsCount((prevCount) => Math.max(prevCount - initialVisibleCount, initialVisibleCount));
  };

  return (
    <main>
      {searchValue ? (
        <div className="items-container">
          {filteredItems.length > 0 ? (
            visibleItems.map((item) => (
              <HomeItems key={item.id} item={item} />
            ))
          ) : (
            <h2 className="no-results">No results found!</h2>
          )}
          <div className="show-more-container">
            {filteredItems.length > visibleItemsCount && (
              <button onClick={handleShowMore} className="show-more-button">
                Show More
              </button>
            )}
            {visibleItemsCount > initialVisibleCount && (
              <button onClick={handleShowLess} className="show-more-button">
                Show Less
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* <div className={styles.carousal}>
            <CarosalSlide />
          </div> */}
          <div className="items-container">
            {visibleItems.map((item) => (
              <HomeItems key={item.id} item={item} />
            ))}
            <div className="show-container">
              <div className="show-more-container">
              {items.length > visibleItemsCount && (
                <button onClick={handleShowMore} className="show-more-button">
                  Show More
                </button>
              )}
              </div>
              <div className="show-more-container">
              {visibleItemsCount > initialVisibleCount && (
                <button onClick={handleShowLess} className="show-more-button">
                  Show Less
                </button>
              )}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
