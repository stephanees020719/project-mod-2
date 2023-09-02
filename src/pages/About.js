

//about component props pass my data to app
export default function About(props) {
 
  return (
      <div className="about"> {/* this is my content to be display in the about*/}
        <h1>About the Pokemon Blog</h1>{/* this is my <h1> to be display in the about*/}
        <p>The code is a React application that creates a Pokemon directory. It fetches data from the PokeAPI to retrieve a list of Pokemon and their details. The fetched data is displayed in a list format, and users can search for specific Pokemon, load more Pokemon, and view additional details for each Pokemon. The code is divided into multiple components, including PokemonDirectory, SearchBar, Home, About, and Nav, and it uses React Router for navigation.</p>{/* this is my<p> content to be display in the about page */}
        <h1>Pokemon Name</h1>{/* this is my <h1>  to be display in the about page*/}

        <p>{/*this is my <p> to be display in the about*/}The contracted term Pokémon derives from a syllabic abbreviation of the franchise's full name, Pocket Monsters (ポケットモンスター, Poketto Monsutā). When the franchise began to be released internationally, the short form of the title was used, with an acute accent (´) for pronunciation.

Pokémon refers both to the franchise itself and the creatures within its fictional universe. As a noun, it is identical in both the singular and plural, as is every individual species name; it is grammatically correct to say "one Pokémon" and "many Pokémon", as well as "one Pikachu" and "many Pikachu". In English, Pokémon may be pronounced either /'powkɛmon/ (poe-keh-mon) or /'powkɪmon/ (poe-key-mon).

</p>{/*close p tag */}
        <h1>General concept of Pokemon</h1> {/* this is my <h1> to be display in the about*/}
       <p>The Pokémon franchise is set in a world in which humans coexist with creatures known as Pokémon. Pokémon Red and Blue introduced 151 Pokémon species, with new Pokémon being introduced in subsequent games; as of February 2023, 1,015 Pokémon species have been introduced. Many Pokémon are designed to resemble real-world animals; for example, Pikachu is a yellow mouse-like Pokémon with a lightning bolt-shaped tail, and possesses electrical abilities.</p> {/* closing paragraph */} 
      
      
       <h1>Origins of Pokemon</h1>
       <p>{/*  paragraph */} {/* this is my <p> to be display in the about*/}
The main idea behind Pokémon was conceived by Satoshi Tajiri. Tajiri grew up in Machida, a suburb of Tokyo. In his youth, he enjoyed discovering and catching insects and other small creatures in the various ponds and fields that surrounded his town. As Japan's economic miracle occurred, many cities, including Machida, were significantly expanded. As a consequence, Machida's nature was largely destroyed. In his second year of junior high school, an arcade hall opened in Tajiri's neighborhood, introducing him to video games. While studying electrical engineering at Tokyo College of Technology [ja], Tajiri began publishing a doujinshi magazine titled Game Freak. The title was inspired by the 1932 film Freaks, which Tajiri was fascinated with at the time. He self-published the first issue of the magazine in March 1983, at the age of 17.At the time, magazines specializing in video games did not yet exist in Japan, allowing Game Freak to fill a gap in the market. Concurrently, Tajiri was contacted by aspiring manga artist Ken Sugimori, who became Game Freak's illustrator. Game Freak folded in the late 1980s, by which point Tajiri had become a respected game journalist in Japan's fledgling video game industry.

</p>{/* closing paragraph */} 
      
      </div> //close div 
    );
  }
  