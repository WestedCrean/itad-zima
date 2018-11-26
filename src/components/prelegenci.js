import React from 'react';
import styled from 'styled-components';

const Ftr = styled.footer`
    margin-top: 30px;
    img {
        width: 20%;
    }
    p {
        font-size: 10px;
        color: #3557b8;
        text-align: center;
    }
    @media all and (max-width: 800px) {
        max-height: 100px;
    }
`;

function Prelegenci(props) {
    return(
        <Ftr>
            <img src={props.logo} alt="pollub.net logo"/>
            <p>pollub.net</p>
        </Ftr>
    );
}

export default Prelegenci;