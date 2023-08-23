import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

const PokemonDirectory = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [limit, setLimit] = useState(20);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPokemonData = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        .then((response) => response.json())
        .then((data) => {
          const promises = data.results.map((pokemon) =>
            fetch(pokemon.url).then((response) => response.json())
          );

          Promise.all(promises)
            .then((pokemonData) => {
              const updatedPokemonList = data.results.map((pokemon, index) => ({
                ...pokemon,
                abilities: pokemonData[index].abilities,
                types: pokemonData[index].types
              }));

              setPokemonList(updatedPokemonList);
            })
            .catch((error) => {
              console.error("Error fetching Pokemon data:", error);
            });
        })
        .catch((error) => {
          console.error("Error fetching Pokemon list:", error);
        });
    };

    fetchPokemonData();
  }, [limit]);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 20);
  };

  const handleSearch = (searchTerm) => {
    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredPokemonList);
  };

  const displayList = searchResults.length > 0 ? searchResults : pokemonList;

  return (
    <div className="pokemon-directory">
      <SearchBar onSearch={handleSearch} />
      <div className="pokemon-list">
        {displayList.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.split("/")[6]
              }.png`}
              alt={pokemon.name}
              onClick={() => handlePokemonClick(pokemon)}
            />
            <div className="pokemon-details">
              {selectedPokemon === pokemon && (
                <>
                  <h2>{selectedPokemon.name}</h2>
                  <ul>
                    {pokemon.abilities.map((ability) => (
                      <li key={ability.ability.name}>
                        Abilities: {ability.ability.name}
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
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default PokemonDirectory;
