import React from 'react';
import '../styles/search.scss';

const Search = () => {
  return (
    <div className="searchBar">
      <input type="search" className="searchInput" name="q"
        placeholder="Search..."
        autoComplete="off"
      />
      <span className="searchIcon"></span>
    </div>
  );
}

export default Search;