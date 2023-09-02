
//comment on every single line of the code 
import React, { useState, useEffect } from "react";//import my nesessary modules 
import SearchBar from "../components/SearchBar";//import my searchbar

//  function component  PokemonDirectory
const PokemonDirectory = () => {
   // define my state variable named pokemonList and initialize it as an empty array
  const [pokemonList, setPokemonList] = useState([]);
   // define my state variable named selectedPokemon and initialize it as null
  const [selectedPokemon, setSelectedPokemon] = useState(null);
     // define my state variable named limit and initialize it as 20
  const [limit, setLimit] = useState(20);
  // dfine  state variable named searchResults and initialize it as an empty array
  const [searchResults, setSearchResults] = useState([]);
  // define state variable named isSearching and initialize it as false
  const [isSearching, setIsSearching] = useState(false);
   //start my useffect hook 
  useEffect(() =>{
    //  fetch my Pokemon data
    const fetchPokemonData = () => {
       // fetch the list of Pokemon from the API
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      //  response is received, convert it to JSON format
        .then((response) => response.json())
        //once my data is received 
        .then((data) => {
          // creates an array of promises by map over the results in the data
          const promises = data.results.map((pokemon) =>
          // fetch data for each pokemon using its URL, convert response to json
            fetch(pokemon.url).then((response) => response.json())
          );
         // executes all promises in the array and returns a new promise that is fulfilled with an array of the results of the input promises
         //await,asycn can be used instead of promises,.then
          Promise.all(promises)
            .then((pokemonData) => {
               // updatepokemonlist variable to store the updated list of Pokemon
              const updatedPokemonList = data.results.map((pokemon, index) => ({
              
                ...pokemon,//i used spread operator to copy all properties of the original pokemon object
                
                //  assign the abilities from the fetched Pokemon data to the corresponding pokemon in the list
                abilities: pokemonData[index].abilities,
                
                // assign the types from the fetched Pokemon data to the corresponding p3okemon in the list
                types: pokemonData[index].types
              }));
   // set  pookemon list with the updated list
              setPokemonList(updatedPokemonList);
            })
            // console log my errors to catch any problem fetching my pokemon data
            .catch((error) => {
              console.error("Error fetching Pokemon data:", error);
            });
        })
        .catch((error) => { 
          console.error("Error fetching Pokemon list:", error);// console log error if i have any error fetching my pokemon list
        });
    };


    //fetching my  Pokemon data
    fetchPokemonData();
  }, [limit]);//usestate limit

 // define  function handlePokemonClick  takes pokemon as parameter
  const handlePokemonClick = (pokemon) => {
    // i set the value of my selectedPokemon variable to the value of the pokemon parameter
    setSelectedPokemon(pokemon);
  };

  	// handleLoadmore funtion to load more data 
  const handleLoadMore = () => {
     // update the limit by incrementing the previous limit by 20
    setLimit((prevLimit) => prevLimit + 20);
  };

  	// function  handleSearch that takes a searchTerm parameter
  const handleSearch = (searchTerm) => {
    //set the value to true
    setIsSearching(true);
    
    // filter the Pokemon list based on the search term
    const filteredPokemonList = pokemonList.filter((pokemon) =>
    // check if the lowercase name of each pokemon includes the lowercase
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    	// set search results to the filtered pokemon list
    setSearchResults(filteredPokemonList);
  };
	// declare a variable displayList
// if the length of searchResults is greater than 0, assign searchResults to displayList,otherwise, assign pokemonList to displayList
  const displayList = searchResults.length > 0 ? searchResults : pokemonList;

  return (
    <div className="pokemon-directory">
      {/*  render the searchbar component and pass the handleSearch function as a prop */}
      <SearchBar onSearch={handleSearch} />
 
      <div className="pokemon-list"> 
      {/*  map over the displayList array and render a div for each pokemon */}
       {displayList.map((pokemon) => (
          <div
            key={pokemon.name} //take name as parameter
            className="pokemon-card"
             // attach an onClick event listener to each pokemon card and call the handlepokemonClick function
            onClick={() => handlePokemonClick(pokemon)}
          >
            {/* source of my pokemon image pokeApi/sprites */}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.split("/")[6]
              }.png`}
              // set the alt text for theimage
              alt={pokemon.name}
            />
            <div className="pokemon-details">
            {/*  Check if the selectedPokemon is equal to the current pokemon */}
              {selectedPokemon === pokemon &&(
                <>
             {/*  the  name of the selectedpokemon would be display in a h2*/}
                  <h2>{selectedPokemon.name}</h2> 
                  <ul>
                  {/* Iterate ,mapping through the abilities of the pokemon */}
                    {pokemon.abilities.map((ability) => (
                      // Set a key for each ability
                      <li key={ability.ability.name}>
                        {/*  display the name of the ability */}
                        Abilities: {ability.ability.name}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Type:{" "}
                    {/* iterate over each item in the pokemon.types array */}
                    {pokemon.types.map((type) => (	  
                      // list item for each type,  display the type name
          <span key={type.type.name}>{type.type.name}</span>
                    ))}

                    {/* close tags */}
                  </p>    
                </>
              )}
            </div>
          </div>
        ))}
      </div>
     
 

      {/*  if isSearching is false, with an onClick event handler call  the handleLoadMore function , //so im working on display a message like the 'pokemon doesn't exist' or if the input is numbers but for until is graded it ,i'll leave it */}
 {!isSearching && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};
//export my component
export default PokemonDirectory;
