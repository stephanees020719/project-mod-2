import React from "react";
import { Route, Routes } from "react-router-dom";
import PokemonDirectory from "./pages/PokemonDirectory";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemondirectory" element={<PokemonDirectory />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
