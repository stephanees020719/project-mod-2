
import React from "react";

class PokemonDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      selectedPokemon: null,
      limit: 20 // Initial limit for number of Pokemon to fetch
    };
  }

  // Fetches the list of Pokemon data from an API.

  componentDidMount() {
    this.fetchPokemonData();
  }

  fetchPokemonData() {
    const { limit } = this.state;

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        // Fetch additional details for each Pokemon
        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );

        Promise.all(promises)
          .then((pokemonData) => {
            // Combine the original Pokemon data with the additional details
            const pokemonList = data.results.map((pokemon, index) => ({
              ...pokemon,
              abilities: pokemonData[index].abilities,
              types: pokemonData[index].types
            }));

            this.setState({ pokemonList });
          })
          .catch((error) => {
            console.error("Error fetching Pokemon data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching Pokemon list:", error);
      });
  }

  handlePokemonClick(pokemon) {
    this.setState({ selectedPokemon: pokemon });
  }

  handleLoadMore() {
    this.setState(
      (prevState) => ({
        limit: prevState.limit + 20 // Increase the limit by 20 to fetch more Pokemon
      }),
      () => {
        this.fetchPokemonData(); // Fetch more Pokemon data with the updated limit
      }
    );
  }

  render() {
    const { pokemonList, selectedPokemon } = this.state;

    return (
      <div className="pokemon-directory">
        <div className="pokemon-list">
          {pokemonList.map((pokemon) => (
            <div key={pokemon.name} className="pokemon-card">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split("/")[6]
                }.png`}
                alt={pokemon.name}
                onClick={() => this.handlePokemonClick(pokemon)}
              />
              <div className="pokemon-details">
                {selectedPokemon === pokemon && (
                  <>
                    <h2>{selectedPokemon.name}</h2>
                    <ul>
                      {pokemon.abilities.map((ability) => (
                        <li key={ability.ability.name}>
                          abilities: {ability.ability.name}
                        </li>
                      ))}
                    </ul>
                    <p>
                      Types:{" "}
                      {pokemon.types.map((type) => (
                        <span key={type.type.name}>{type.type.name}</span>
                      ))}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => this.handleLoadMore()}>Load More</button>
      </div>
    );
  }
}

export default PokemonDirectory;
