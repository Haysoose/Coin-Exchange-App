import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        //Prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.tickerId);
    }

    render(){
        
    if(this.props.showBalance){

        return (
            <tr className="coin-row">
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>{this.props.price}</Td>
                <Td>{this.props.balance}</Td>
                <Td>
                    <form action="#">                    
                        <button onClick={this.props.handleClick}>Refresh</button>
                    </form>
                </Td>
              </tr>
        )
        }
        else{
            return (
                <tr className="coin-row">
                    <Td>{this.props.name}</Td>
                    <Td>{this.props.ticker}</Td>
                    <Td>{this.props.price}</Td>
                    <Td>
                        <form action="#">                    
                            <button onClick={this.props.handleClick}>Refresh</button>
                        </form>
                    </Td>
                  </tr>
            )
        }
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    showBalance: PropTypes.bool.isRequired,
    tickerId: PropTypes.string.isRequired
}
