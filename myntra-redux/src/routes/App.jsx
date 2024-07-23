import Footer from "../components/Footer"
import Header from "../components/Header"
import {Outlet} from "react-router-dom";
import Fetchitem from "../components/Fetchitem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
function App() {


const fetchStatus = useSelector((store) => store.fetchStatus);
 
 
  return (
    <>
      <div>
      <Header/>
      <Fetchitem/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
      <Footer/>
      </div>
    </>
  )
}

export default App
