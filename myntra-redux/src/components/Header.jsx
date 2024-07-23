import { IoMdPerson } from "react-icons/io";
import { FaMoon, FaSmile } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSun } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { setTheme } from "../store/themeslice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const bagCount = useSelector((store) => store.bag);
  const wishlistCount = useSelector((store) => store.wishlist);
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loacation = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() =>{
  //   const urlParams = new URLSearchParams(location.search);
  //   const searchTermFromUrl = urlParams.get('searchTerm')
  //   if(searchTermFromUrl){
  //     setSearchTerm(searchTermFromUrl);
  //   }

  // },[loacation.search])

  const handleOnchange = (e) => {
    const newsearchvalue = e.target.value;
    console.log(newsearchvalue);
    setSearchTerm(newsearchvalue);

    const urlParams = new URLSearchParams(location.search);
    urlParams.set("search", newsearchvalue);
    const searchQuery = urlParams.toString();
    navigate(`/?${searchQuery}`);
  };
  return (
    <header className="header-fix">
        <div className="logo_container">
          <Link to="/">
            <img
              className="Elegancia_home"
              src="./images/LOG.png"
              alt="Elegancia Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <input
            value={searchTerm}
            onChange={handleOnchange}
            type="text"
            className="search-input"
            placeholder="Search for products, brands and more"
          />
          <input type="submit" className="submit-button" value="search" />
        </div>
        <div className="action_bar">
          <div
            className="action_container"
            onClick={() => dispatch(setTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}

            <span className="action_name action">Mode</span>
          </div>

          <div className="action_container">
            <IoMdPerson />
            <span className="action_name action">Profile</span>
          </div>

          <Link className="action_container" to="/wishlist">
            <FaSmile />
            <span className="action_name action">Wishlist</span>
            <span className="wishlist-item-count">{wishlistCount.length}</span>
          </Link>

          <Link className="action_container" to="/bag">
            <IoBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagCount.length}</span>
          </Link>
        </div>
    </header>
  );
};
export default Header;
