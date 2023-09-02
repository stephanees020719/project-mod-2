import pokemonImage from "../components/images/pokemon.png";  // import the my img  for the Pokemon

export default function Home(props) {  // export Home component  props to pss my data to app
  return (
    <div> {/*open div tag*/}
      <h1>Welcome to my Pokemon Blog</h1>  {/*  heading for the Pokemon Blog*/}
      <img className="img" src={pokemonImage} alt="Pokemon" />  {/* display the Pokemon img ,give it  class name and alt text */}
    </div>//close div 
  );
}