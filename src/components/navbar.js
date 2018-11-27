import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: block;
  width: 100%;
  margin: 0;
  background: #29599b;
  line-height: 25px;
  height: 50px;
  @media all and (max-width: 600px) {
    height: 200px;
    display: flex;
    flex-direction: column;
  }
`;
const Link = styled.a`
    padding: 20px 40px;
    text-decoration: none;
    &:link,
    &:visited {
    padding: 16px 40px;
    text-decoration: none;
    font-size: 70%;
    font-weight: 300;
    line-height: 51px;
    color: #fafafa;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.15s ease-out;
    }
    &:hover {
        background-color: #263c5b;
    }
    @media all and (max-width: 800px) {
        &:link {
            padding: 0 20px;
        }
  }
`;
function Navbar(props) {
    return(
          <Nav class="navbar" id="navbar">
              <Link href="#itad">ITAD '18</Link>
              <Link href="#mapa">Jak dojechać?</Link>            
              <Link href="#agenda">Agenda</Link>
              <Link href="#partnerzy">Partnerzy</Link>
          </Nav>
    );
}

export default Navbar;