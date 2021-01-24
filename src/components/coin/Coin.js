import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default function Coin (props) {

    const handleClick = (event) => {
        //Prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.tickerId);
    }
        if(props.showBalance){

        return (
            <tr className="coin-row">
                <Td>{props.name}</Td>
                <Td>{props.ticker}</Td>
                <Td>{props.price}</Td>
                <Td>{props.balance}</Td>
                <Td>
                    <form action="#">                    
                        <button onClick={handleClick}>Refresh</button>
                    </form>
                </Td>
              </tr>
        )
        }
        else{
            return (
                <tr className="coin-row">
                    <Td>{props.name}</Td>
                    <Td>{props.ticker}</Td>
                    <Td>{props.price}</Td>
                    <Td>
                        <form action="#">                    
                            <button onClick={handleClick}>Refresh</button>
                        </form>
                    </Td>
                  </tr>
            )
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
