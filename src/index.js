import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import App from "./App";
import MainScreen from "./pages/MainScreen";
import LoginScreen from "./pages/LoginScreen";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import AddCartScreen from "./pages/AddCartScreen";

// const root = ReactDOM.createRoot(document.getElementById("root"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <div
        style={{
          flex: 1,
          display: "flex",
          width: "100%",
          height: "100vh",
          backgroundColor: "red",
          flexDirection: "column",
        }}
      >
        <Navbars />
        <div
          style={{
            display: "flex",
            width: "100%",
            flex: 1,
            backgroundColor: "yellow",
            flexDirection: "column",
          }}
        >
          <Routes>
            <Route path="/add-cart" element={<AddCartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/main" element={<MainScreen />} />
            <Route path="/" element={<LoginScreen />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
);
