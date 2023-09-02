import { Link } from "react-router-dom";


	//  component navigation bar
export default function Nav(props) {
  return (
    <div className="nav">
      
      {/* link to the home page */}
      <Link to="/">
        <div>Home</div> 
        </Link>

        {/* link to the Pokemon directory page */}
      <Link to="/pokemondirectory">
        <div>PokemonDirectory</div>
      </Link>
      
     {/* link to the about page */}
      <Link to="/about">
        <div>About</div>
      </Link>
    </div> //close div tag
  );
}
