import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './logo.svg';


const Img = styled.img`
    height: 8rem;
    point-events: none;
`;

const Head = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: white;
`;

export default class Header extends Component {
    render() {
        return (
        <Head>
            <Img src ={logo} alt="React Logo" />
            {this.props.title}
        </Head>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

