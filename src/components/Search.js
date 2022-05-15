import React from "react";

function Search({setSearch}) {
  function search(e){
    setSearch(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={search}
      />
    </div>
  );
}

export default Search;