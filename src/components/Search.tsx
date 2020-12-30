import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import '../styles/search.scss';
import { searchQuery } from '../actions/searchActions';
import SearchResult from '../interfaces/search.interface'

function Search({ onSelection }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<SearchResult>>([]);

  const handleInputChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    if (ev.target.value === '') {
      setQuery('');
      setSearchResults([]);
      return;
    }
    setQuery(ev.target.value);
    const results = await searchQuery(ev.target.value);
    setSearchResults(results);
  };

  const handleClearText = () => {
    setQuery('');
    setSearchResults([]);
  }

  return (
    <div className="search-container">
      <div className="search-box">
        <SearchIcon color="action" />
        <label htmlFor="search"></label>
        <input className="search-input" type="text" id="search"
          name="search" placeholder="Search..." autoComplete="off" aria-label="Search" value={query} onChange={handleInputChange} />
        {query !== '' &&
          <ClearIcon onClick={handleClearText} />
        }
      </div>
      {searchResults.length > 0 &&
        <div className="autocomplete">
          <ul className="search-list">
            {searchResults.map(item => (
              <li key={item.symbol} className="list-results">
                <button key={item.symbol} onClick={() => {
                  onSelection(item);
                  handleClearText();
                }}>{item.symbol + " " + item.securityName}</button>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

export default Search;