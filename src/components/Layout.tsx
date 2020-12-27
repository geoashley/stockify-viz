import React from 'react';
import Search from './Search';
// import LineChart from './charts/LineChart';
import Card from './Card';
import '../styles/index.scss';

function Layout() {
  return (
    <div className="layout-wrapper">
      <Search />
      <div className="chart-layout">
        {/* <LineChart data={data} width={400} height={300} /> */}
      </div>
      <div className="card-layout">
        <Card name="Card1"/>
        <Card name="Card2"/>
        <Card name="Card3"/>
        <Card name="Card4" />
        <Card name="Card5" />
      </div>
    </div>
  );
}

export default Layout;