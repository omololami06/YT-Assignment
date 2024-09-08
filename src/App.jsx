import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Range from "./Components/Range/Range";
import Products from "./Components/Products/Products";
import Inner from "./Components/Inner/Inner";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Background from "./Components/Background/Background";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      {/* <Home /> */}
      {/* <Nav />
      <Background />
      <Range />
      <Products />
      <Inner /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
