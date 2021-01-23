import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AccountBalance.css';

export default class AccountBalance extends Component {
    render(){
        return(
            <section className = "balance">
            ${this.props.amount}
            </section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}