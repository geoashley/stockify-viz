import React, { useState } from 'react';
import Search from './Search';
// import LineChart from './charts/LineChart';
import Card from './Card';
import '../styles/index.scss';
import SearchResult from '../interfaces/search.interface';
import Title from './Title';

function Layout() {

  const [selectedSecurity, setSelectedSecurity] = useState<SearchResult>();

  return (
    <div className="layout-wrapper">
      <Search onSelection={(e: SearchResult) => setSelectedSecurity(e)} />
      <div className="chart-layout">
        {/* <LineChart data={data} width={400} height={300} /> */}
      </div>
      {selectedSecurity != null &&
        <div className="chart-layout">
          <Title selectedSecurity={selectedSecurity}></Title>
        </div>
      }
      <div className="card-layout">
        <Card name="Card1" />
        <Card name="Card2" />
        <Card name="Card3" />
        <Card name="Card4" />
        <Card name="Card5" />
      </div>
    </div>
  );
}

export default Layout;