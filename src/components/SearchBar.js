// searchBar.js
import React, { useState } from "react";

	// component for the search bar
export default function SearchBar({ onSearch }) {
   // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // event handler for input change
  const handleInputChange = (event) => {
    // update the search term state with the input value
    setSearchTerm(event.target.value);
  };

  // event handler for search button click
  const handleSearch = () => {
   // call the onSearch function with the search term 
    onSearch(searchTerm);
  };

  // render the search bar component
  return (
    <div className="search-bar">  {/* create a div element with the class name "search-bar"*/}
      <input  // create an input element
        type="text"  //  input type to "text"
        placeholder="Search Pokemon by Name"  // placeholder text for the input
        value={searchTerm}  // set value of the input to the value of the searchTerm varible
        onChange={handleInputChange}  // set the onChange event handler to the handleInputChange function
      />
      <button onClick={handleSearch}>Search</button>  {/* Create a button element with the text "Search" and set the onClick event handler to the handleSearch function */}
    </div> // close div 
  );
}
