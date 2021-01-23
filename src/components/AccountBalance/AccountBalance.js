import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    color: rgb(43, 116, 61);
    font-size: 2rem;
`;

export default class AccountBalance extends Component {
    render(){
        return(
            <Section>
            ${this.props.amount}
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}