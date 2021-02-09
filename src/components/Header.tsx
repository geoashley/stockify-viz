import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import Search from "./Search";
import { Context } from '../store'
import Security from "../interfaces/security.interface";
import { aggregateQuery } from "../actions/aggregateActions";
import { companyDetailsQuery } from "../actions/companyActions";
import { relatedCompanyQuery } from "../actions/relatedCompanyActions";
function Header() {

  const { state, dispatch } = useContext(Context);
  const handleSearchSelection = async (e: Security) => {
    e.companyDetails = await companyDetailsQuery(e.symbol);
    dispatch({ type: 'SELECT_SECURITY', payload: e })
    // const ownRel = {
    //   symbol: e.symbol,
    //   securityName: e.securityName,
    //   marketCap: e.marketCap,
    //   lastSale: e.lastSale
    // }

    // dispatch({ type: 'ADD_RELATED', payload: ownRel })
    const results = await aggregateQuery(e.industry, e.sector);
    dispatch({ type: 'SET_AGGREGATE', payload: results })
    const relatedResults = await relatedCompanyQuery(e.industry, e.sector, e.symbol)

    dispatch({ type: 'ADD_RELATED', payload: relatedResults })
  }

  return (
    <div className="app-header">
      <div className="header-contents">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">stockify</div>
        </Link>
        <Search onSelection={(e: Security) => handleSearchSelection(e)} />
        <Link to="/login"><button className="login">login</button></Link>

      </div>

    </div>
  );
}

export default Header;

