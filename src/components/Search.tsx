import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import '../styles/search.scss';
import { searchQuery } from '../actions/searchActions';

const Search = () => {
  
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<string>>([]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const results = await searchQuery(query);
    setSearchResults(results);
    console.log(results);
  };

  const handleClearText = () => {
    setQuery('');
    setSearchResults([]);
  }

  return (
    <div className="search-container">
      <div className="search-box">
        <SearchIcon color="action" />
        <input className="search-input" type="text"
          name="search" placeholder="Search..." autoComplete="off"
          onChange={handleInputChange} value={query} />
        {query !== '' &&
          <ClearIcon onClick={handleClearText} />
        }
      </div>
      {searchResults.length > 0 &&
        <div className="autocomplete">
          <ul className="search-list">
            {searchResults.map(item => (
              <li className="list-results">
                <span>{item}</span></li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

export default Search;