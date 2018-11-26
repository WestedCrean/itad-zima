import React from 'react';
import styled from 'styled-components';

const Sponsrs = styled.div`
    text-align: center;
    img {
        max-width: 15%;
        float: center;
        margin: 15px;
    }

    @media all and (max-width: 800px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        img {
            max-width: 200px;
            margin: 15px auto;
        }
    }
`;

const Main = styled.img`
    max-width: 40%;

    @media all and (max-width: 800px) {
        max-width: 300px;
    }
`;

const Gold = styled.div`
    text-align: center;
    img {
        max-width: 20%;
        float: center;
        margin: 15px;
    }

    @media all and (max-width: 800px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        img {
            max-width: 250px;
            margin: 15px auto;
        }
    }
`;


function Sponsors(props) {
    return(
        <section className="section-sponsors" id="partnerzy">
          <h3 className="dark-line">Sponsor Główny</h3>
              <Main src={props.mainsponsor} alt="Britenet" id="mainsponsor"/>
          <h3 className="dark-line">Sponsorzy Złoci</h3>
              <Gold>
              { Object.keys(props.goldensponsors).map( sponsor => {
                return <img src={props.goldensponsors[sponsor]} alt={sponsor} key={sponsor}/>
              })}</Gold>
          <h3 className="dark-line">Sponsor</h3>
              <Main src={props.sponsor} alt="YouLead"/>
          <h3 className="dark-line">Partnerzy Strategiczni</h3>
            <Sponsrs>
                { Object.keys(props.partners).map( partner => {
                    return <img src={props.partners[partner]} alt={partner} key={partner}/>
                })}
            </Sponsrs>
      </section>
    );
}

export default Sponsors;