import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

const Autumn = styled.span`
    color: orange;
    display: flex;
    flex: row;
    justify-content: space-between;
    &::after,
    &::before {
    content: '';
    display: block;
    width: 20%;
    margin: 25px auto;
    border-bottom: 1px solid orange; 
  }
`;

const ParticlesParamsBig = {
    "particles": {
        "number": {
        "value": 180,
        "density": {
            "enable": true,
            "value_area": 800
        }
        },
        "color": {
        "value": "#96502d"
        },
        "shape": {
        "type": "triangle",
        "stroke": {
            "width": 0,
            "color": "#000000"
        },
        "polygon": {
            "nb_sides": 7
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
        },
        "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
        },
        "size": {
        "value": 4,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
        },
        "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 3,
        "direction": "bottom-left",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": true,
            "rotateX": 3687.8477399907024,
            "rotateY": 8932.624625202434
        }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": false,
            "mode": "repulse"
        },
        "onclick": {
            "enable": false,
            "mode": "push"
        },
        "resize": false
        },
        "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 1,
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
            "value": "#96502d"
            },
            "shape": {
            "type": "triangle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 7
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
            },
            "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
            },
            "size": {
            "value": 8,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
            },
            "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
            },
            "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom-left",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 3687.8477399907024,
                "rotateY": 8932.624625202434
            }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": false
            },
            "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 1,
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
        <section className="section-welcome">
        <MediaQuery query="(max-device-width: 1224px)">
        <Particles
              height='1000px'
              params={ParticlesParamsMobile}
                style={{
                    zIndex: '4',
                    pointerEvents: 'none'
                }}
              />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1225px)">
        <Particles
              height='1000px'
              params={ParticlesParamsBig}
                style={{
                    zIndex: '4',
                    pointerEvents: 'none'
                }}
              />
        </MediaQuery>
       
          <div className="welcome-container">
                <h1>IT Academic Day <Autumn>Jesień/Zima</Autumn></h1>
                <h2>11 grudnia 2018
                Politechnika Lubelska</h2>
                <button className="button"><a href="https://itad-pollub.evenea.pl/">Zarejestruj się już dziś!</a></button>
          </div>
          <div className="swipe-down">
              <a href="#itad">
                  <i className="ion-chevron-down" id="welcome-arrow-down"></i>
              </a>
          </div>
      </section>
    );
}

export default Header;