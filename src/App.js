import React, { Component } from 'react';
import './App.css';
import './components/header.js';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import Timer from './components/timer.js';
import Sponsors from './components/sponsors.js';
import Footer from './components/footer.js';
import Agenda from './components/agenda.js';
// loga sponsorow
import Britenet from './img/britenet.png';
import Pollub from './img/pollubnet.png';

import Sollers from './img/sollers.png';
import Asseco from './img/asseco.jpg';
import Billennium from './img/billennium.jpg';
import Codete from './img/codete.png';
import EleaderFinanteq from './img/eleaderfinanteq.jpg';
import Fundacja from './img/fundacjarozwojupl.png';
import Ms from './img/microsoft.png';
import Sii from './img/sii.jpg';
import WIT from './img/wyzynaIT.png';
import xPlus from './img/xplus.png';
import YouLead from './img/youlead.png';

const goldenSponsors = {
    "Asseco":  Asseco,
    "Sollers": Sollers,
    "EleaderFinanteq": EleaderFinanteq,
    "xPlus":  xPlus 
}

const partners = {
    "Billennium":  Billennium,
    "Codete":  Codete,
    "Sii":  Sii,
    "WIT":  WIT,
    "Ms":  Ms,
    "Fundacja":  Fundacja
};


class App extends Component {

  render() {
    return (
      <div>
      <Header/>
      <Navbar/>

      <section className="section-about" id="itad">
          <h3 className="light light-line">O wydarzeniu</h3>
          <div className="about-description">
              <p className="light">IT Academic Day to największa, coroczna konferencja technologiczna organizowana przez studentów Politechniki
                  Lubelskiej z Grupy pollub.NET.
                  <br/>Spotykamy się 11 grudnia na auli Wydziału Elektrotechniki i Informatyki. Udział w wydarzeniu
                  pozwoli uczestnikom na zdobycie wiedzy dotyczącej nowoczesnej technologii oraz zapoznanie się z możliwościami
                  rozwoju kariery w branży informatycznej. Zapewni to cykl prelekcji poprowadzonych przez specjalistów z lubelskiej
                  branży IT, które mają na celu zainspirować słuchaczy do zgłębiania swojej wiedzy i podjęcia wysiłku rozwijania
                  siebie i swoich umiejętności. Ponadto, oferujemy liczne atrakcje, konkursy z nagrodami oraz okazję do zobaczenia
                  nowoczesnego sprzętu i porozmawiania z przedstawicielami firm informatycznych.
                  <br/> Więcej informacji o agendzie, firmach, konkursach czy aktualnościach możecie znaleźć na Facebooku.
                </p>
          </div>
          <div className="about-timer">
              <h3 className="in-section light">IT Academic Day 2018 odbędzie się już za</h3>
                <Timer/>
          </div>
      </section>
      <section id="galeria">

      </section>
      <Agenda/>
      <section className="section-map" id="mapa">
          <h3 className="dark-line">Jak dojechać?</h3>
          <div className="map">

              <iframe title="google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.0392576202753!2d22.546557816174982!3d51.2367718795915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225770b90ed75f%3A0x1b6d4cc1142112fa!2sWydzia%C5%82+Elektrotechniki+i+Informatyki+Politechniki+Lubelskiej!5e0!3m2!1spl!2spl!4v1520804126436"
                  width="100%" height="400px" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="buses">
              <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76.3 76.3">
                  <path d="M2.4 21.5h2.4v14.3H2.4C1.1 35.8 0 34.7 0 33.4v-9.5C0 22.5 1.1 21.5 2.4 21.5zM73.9 21.5h-2.4v14.3h2.4c1.3 0 2.4-1.1 2.4-2.4v-9.5C76.3 22.5 75.3 21.5 73.9 21.5zM66.8 16.7v42.9c0 2.6-2.1 4.8-4.8 4.8v4.8c0 2.6-2.1 4.8-4.8 4.8h-4.8c-2.6 0-4.8-2.1-4.8-4.8v-4.8H28.6v4.8c0 2.6-2.1 4.8-4.8 4.8h-4.8c-2.6 0-4.8-2.1-4.8-4.8v-4.8c-2.6 0-4.8-2.1-4.8-4.8V16.7C9.5 8.8 16 2.4 23.9 2.4H52.5C60.4 2.4 66.8 8.8 66.8 16.7zM28.6 11.9h19.1V7.2H28.6V11.9zM23.9 54.9c0-2.6-2.1-4.8-4.8-4.8 -2.6 0-4.8 2.1-4.8 4.8 0 2.6 2.1 4.8 4.8 4.8C21.7 59.6 23.9 57.5 23.9 54.9zM62 54.9c0-2.6-2.1-4.8-4.8-4.8s-4.8 2.1-4.8 4.8c0 2.6 2.1 4.8 4.8 4.8C59.9 59.6 62 57.5 62 54.9zM62 16.7H14.3v28.6h47.7V16.7L62 16.7z"
                  />
              </svg>
              <h3 className="in-section">Dojedziesz autobusami linii</h3>
              <ul className="bus-lines">
                  <li>8</li>
                  <li>14</li>
                  <li>15</li>
                  <li>32</li>
                  <li>39</li>
                  <li>40</li>
                  <li>44</li>
                  <li>152</li>
              </ul>
          </div>
      </section>

      <Sponsors mainsponsor={Britenet} goldensponsors={goldenSponsors} sponsor={YouLead} partners={partners}/>

      <Footer logo={Pollub} />
    </div>
    );
  }
}

export default App;
