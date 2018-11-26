import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

const SectionWelcome = styled.section`
    height: 100vh;
    max-width: 100%;
    background: #f2f2f2;
`;
const H = styled.span`
    color: #263c5b;
    display: flex;
    flex: row;
    justify-content: space-between;
    font-size: 1.2em;
    &::after,
    &::before {
    content: '';
    display: block;
    width: 10%;
    margin: 15px auto;
    border-bottom: 1px solid #263c5b; 
  }
`;

const Btn = styled.button`
    text-decoration: none;
    margin-top: 20px;
    background-color: #29599b;
    color: #e3e3e3;
    border: 1px solid #29599b;
    border-radius: 50px;
    padding: 15px 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 0 3px 3px #617796;
    }
`;

const ParticlesParamsBig = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#263c5b"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#263c5b"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 144.30708547789706,
        "color": "#263c5b",
        "opacity": 1,
        "width": 0.4810236182596568
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 4168.87135825036,
          "rotateY": 641.3648243462092
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 158.35505639876231,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

const ParticlesParamsMobile = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#263c5b"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#263c5b"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 50.0,
      "color": "#263c5b",
      "opacity": 1,
      "width": 0.48
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 4168.87135825036,
        "rotateY": 641.3648243462092
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 158.35505639876231,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


function Header(props) {
    return(
        <SectionWelcome>
        <MediaQuery query="(max-device-width: 1224px)">
        <Particles
            height='599px'
            params={ParticlesParamsMobile}
                style={{
                    zIndex: '4',
                    pointerEvents: 'none'
                }}
              />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1225px)">
        <Particles
            height='599px'
            params={ParticlesParamsBig}
                style={{
                    zIndex: '4',
                    pointerEvents: 'none'
                }}
              />
        </MediaQuery>
       
          <div className="welcome-container">
                <H>IT Academic Day XII `18</H>
                <h2>11 grudnia 2018<br/>
                Politechnika Lubelska</h2>
                <Btn><a href="https://itad-pollub.evenea.pl/">Zarejestruj się</a></Btn>
          </div>
          <div className="swipe-down">
              <a href="#itad">
                  <i className="ion-chevron-down" id="welcome-arrow-down"></i>
              </a>
          </div>
      </SectionWelcome>
    );
}

export default Header;