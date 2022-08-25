import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import MainScreen from "./pages/MainScreen";
import LoginScreen from "./pages/LoginScreen";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import AddCardScreen from "./pages/AddCardScreen";
import DetailScreen from "./pages/DetailScreen";
// const root = ReactDOM.createRoot(document.getElementById("root"));

const styles = {
  container: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
  },
  footer: {
    display: "flex",
    width: "100%",
    flex: 1,
    flexDirection: "column",
  },
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <div style={styles.container}>
        <Navbars />
        <div style={styles.footer}>
          <Routes>
            <Route path="/add-card" element={<AddCardScreen />} />
            <Route path="/" element={<LoginScreen />} />
            <Route path="/main" element={<MainScreen />} />
            <Route path="/home" element={<MainScreen />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/details" element={<DetailScreen />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
);
