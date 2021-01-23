import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import AccountBalance from "./components/AccountBalance/AccountBalance";
import CoinList from './components/CoinList/CoinList';

const Div = styled.div`
  text-align: center;
  background-color: rgb(20,56,97);
  color: #cccccc;
`;

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Coin Exchange",
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.99
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.00
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.20
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 289.99
        }
      ]
    }
  }

  render(){
    return (
      <Div className="App">
        <Header title={this.state.title} />
          <h2>Account Balance</h2>
          <AccountBalance amount={this.state.balance}/>
          <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
  
}

export default App;
