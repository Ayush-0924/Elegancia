import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import {ElengenciaStore, persistor} from "./store/index.js";
import {PersistGate} from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import ThemeProvider from "./components/themeprovider.jsx";
import Search from "./routes/Search.jsx";
import WishList from "./routes/WishList.jsx";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: postLoader,
      },
      {
        path: "/bag",
        element: <Bag />,
        // action: createPostAction,
      },
      {
        path: "/search",
        element: <Search />,
        // action: createPostAction,
      },
      {
        path: "/wishlist",
        element: <WishList />,
        // action: createPostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
  <React.StrictMode>
    <Provider store={ElengenciaStore}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
  </PersistGate>
);
