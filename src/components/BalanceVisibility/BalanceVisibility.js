import React, { Component } from 'react'
import AccountBalance from '../AccountBalance/AccountBalance'
import styled from 'styled-components';

const Section = styled.section`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

export default class balanceVisibility extends Component {
    render() {
        return (
            <Section>
            {
                this.props.accountData.map( value => <AccountBalance key={value.accountNum} handleBalance={this.props.handleBalance} accountNum={value.accountNum} amount={value.amount} showBalance={value.showBalance} />)
            }
            </Section>
        );
    }
}
