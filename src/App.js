import React from "react"; // import  React 
import { Route, Routes } from "react-router-dom"; // import the Route and Routes 
import PokemonDirectory from "./pages/PokemonDirectory"; // import PokemonDirectory 
import Nav from "./components/Nav"; // import the Nav 
import Home from "./pages/Home"; // import the Home 
import About from "./pages/About"; // import the About 

// my app function
function App() {
  return (
    <div>
      {/* render the Nav component */}
      <Nav />
    {/*routes */}
      <Routes>
        {/* define a route for the home , home(props)*/}
        <Route path="/" element={<Home />} />
       {/*define a route for the Pokemon directory page*/}
        <Route path="/pokemondirectory" element={<PokemonDirectory />} />
       {/* define a route for the about page , about (props) from the about page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

// export the App component 
export default App;