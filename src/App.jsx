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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Home />
      <Range />
      <Products />
      <Inner />
      <Footer />
    </>
  );
}

export default App;
