import React from 'react';
import Search from './Search';
import LineChart from './charts/LineChart';
import Card from './Card';
import '../styles/index.scss';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Search />
      <div className="chart-layout">
        <LineChart />
      </div>
      <div className="card-layout">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Layout;