import React from 'react';
import styled from 'styled-components';
import Logo from '../logo.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;

  & img {
    position: relative;
    bottom: 15px;
  }

  & ul {
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 13px;
  }

  & ul a {
    text-decoration: none;
    color: inherit;
    list-style: none;
    padding-left: 26px;
    ${'' /* padding: 0 13px; */}
  }
`;

const Header = () => (
  <StyledHeader>
    <img src={Logo} alt="logo" />
    <ul>
      <a href="/">
        <li>Search</li>
      </a>
      <a href="/">
        <li>How it works</li>
      </a>

      <a href="/">
        <li>About</li>
      </a>
    </ul>
  </StyledHeader>
);

export default Header;
