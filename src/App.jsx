import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const Nav = lazy(() => import("./Components/Nav/Nav"));
const Home = lazy(() => import("./Components/Home/Home"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
import { Route, Routes } from "react-router-dom";
const Shop = lazy(() => import("./Components/Shop/Shop"));
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Blog = lazy(() => import("./Components/Blog/Blog"));
const Checkout = lazy(() => import("./Components/Checkout/Checkout"));
const Comparison = lazy(() => import("./Components/Comparison/Comparison"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
const Error = lazy(() => import("./Components/Error/Error"));

function App() {
  return (
    <>
      <Nav />
      {/* <Home /> */}
      {/* <Nav />
      <Background />
      <Range />
      <Products />
      <Inner /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Comparison" element={<Comparison />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
