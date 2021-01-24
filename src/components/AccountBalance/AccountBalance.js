import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    color: rgb(43, 116, 61);
    font-size: 2rem;
`;

export default class AccountBalance extends Component {
    constructor(props){
        super(props);
        this.hideOrShowBalance = this.hideOrShowBalance.bind(this);
    }

    hideOrShowBalance(event){
        //Prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleBalance(this.props.showBalance);
    }

    render(){
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance'
        let content = null;
        if(this.props.showBalance){
            content = <>${this.props.amount}</>;
        }
        return(
            <Section>
            {content}
                <form action="#">
                    <button onClick={this.hideOrShowBalance}>{buttonText}</button>
                </form>
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    accountNum: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    showBalance: PropTypes.bool.isRequired,
}