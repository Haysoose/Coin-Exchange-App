import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import BalanceVisibility from './components/BalanceVisibility/BalanceVisibility'
import CoinList from './components/CoinList/CoinList';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: rgb(20,56,97);
  color: #cccccc;
`;

const COIN_COUNT = 10;

class App extends React.Component {
  state = {
    accountData: [
      {
        accountNum: 1,
        amount: 10000,
        showBalance: true
      }
    ],
    title: "Coin Exchange",
    coinData: [

      /*
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99,
        showBalance: true
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32,
        price: 299.99,
        showBalance: true
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1.00,
        showBalance: true
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 0,
        price: 0.20,
        showBalance: true
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 289.99,
        showBalance: true
      }
      */
    ]
  }

  componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(key => axios.get(tickerUrl + key));
    const newCoinData = await Promise.all(promises);
    const coinPriceData = newCoinData.map(function(response){
      const coin = response.data;
      return{
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        price: coin.quotes.USD.price,
        balance: 0,
        showBalance: true
      };
    });
    this.setState( {coinData : coinPriceData} );
    }

  handleBalance = (balanceVisible) => {
    const newAccountData = this.state.accountData.map(function({accountNum, amount, showBalance}){
      let newShowBalance = showBalance;
      if(balanceVisible){
        newShowBalance = false;
        return{
          accountNum,
          amount,
          showBalance: newShowBalance
        }
      }
      else{
        newShowBalance = true;
        return{
          accountNum,
          amount,
          showBalance: newShowBalance
        }
      }
    });

    const newCoinData = this.state.coinData.map(function({ticker, name, price, balance, showBalance}){
      let newShowBalance = showBalance;
      if(balanceVisible) {
        newShowBalance = false;
        return{
          ticker,
          name,
          price,
          balance,
          showBalance: newShowBalance
        }
      }
      else{
        newShowBalance = true;
        return{
          ticker,
          name,
          price,
          balance,
          showBalance: newShowBalance
        }
      }
    });

      this.setState({ coinData: newCoinData });
      this.setState({ accountData: newAccountData });
    }


  handleRefresh = async (valueChangeId) => {

    console.log(valueChangeId);

    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = response.data.quotes.USD.price;
    const coinPriceData = this.state.coinData.map(function(values){
      let newValues = {...values};
      if(valueChangeId === values.key){
        newValues.price = newPrice;
      }
      return newValues;
    });
    this.setState( {coinData : coinPriceData} );
  }


  render(){
    return (
      <Div className="App">
        <Header title={this.state.title} />
          <h2>Account Balance</h2>
          <Div>
          <BalanceVisibility accountData={this.state.accountData} handleBalance={this.handleBalance} />
          </Div>
          <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}

export default App;
