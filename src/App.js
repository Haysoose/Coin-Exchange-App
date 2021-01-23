import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/coin/Coin';
import AccountBalance from "./components/AccountBalance/AccountBalance";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt = "React Logo" className="App-logo"></img>
        <h1 className="App-title">
          Coin Exchange
        </h1>
      </header>
      <section>
        <h2>Account Balance</h2>
        <AccountBalance amount={10000}/>
      </section>
      <table className="coin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <Coin name = "Bitcoin" ticker ="BTC" price = {9999.99} />
        <Coin name = "Ethereum" ticker ="ETH" price = {299.99} />
        <Coin name = "Tether" ticker = "USDT" price = {1.00}/>
        <Coin name = "Ripple" ticker = "XRP" price = {0.20}/>
      </tbody>
    </table>
    </div>
  );
}

export default App;
