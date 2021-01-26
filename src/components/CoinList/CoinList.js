import React, { Component } from 'react'
import Coin from '../coin/Coin'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

export default class CoinList extends Component {
  render(){
    return (
      <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.coinData.map( value => 
          <Coin key={value.key}
                handleRefresh={value.handleRefresh} 
                name={value.name}
                ticker={value.ticker}
                price={value.price}
                balance={value.balance}
                showBalance={value.showBalance}
                tickerId={value.key} />
          )
        }
      </tbody>
    </Table>
  )
      }
}
