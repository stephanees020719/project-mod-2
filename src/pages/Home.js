import pokemonImage from "../components/images/pokemon.png";

export default function Home(props) {
  return (
    <div>
      <h1>Welcome to my Pokemon Blog</h1>
      <img className="img" src={pokemonImage} alt="Pokemon" />
    </div>
  );
}
