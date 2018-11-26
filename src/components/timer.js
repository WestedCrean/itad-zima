import React, {Component} from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
width: 100%;
font-size: 4em;
margin: 50px auto 0 auto;
color: white;
text-align: center;

    @media (max-width: 1000px) {
        font-size: 3em;
    }
`;

const Subaragraph = styled.p`
    width: 50%;
    margin: 20px auto;
    color: white;
    display: flex;
    justify-content: space-evenly;
`;
class Timer extends Component {
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.recalculateTime(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    constructor(props) {
        super(props);
        let today = new Date()
        let itad = new Date(2018,12,11,8,0,0);
        let dayDelta = Math.abs(today.getDate() - itad.getDate());
        let hrsDelta = Math.abs(today.getHours() - itad.getHours());
        let minDelta = Math.abs(today.getMinutes() - itad.getMinutes())
        let secDelta = Math.abs(today.getSeconds() - itad.getSeconds())
        this.state = {
            dayDelta: dayDelta,
            hrsDelta: hrsDelta,
            minDelta: minDelta,
            secDelta: secDelta
        }
    }

    recalculateTime = () => {
        let today = new Date()
        let itad = new Date(2018,12,11,8,0,0);
        let dayDelta = Math.abs(today.getDate() - itad.getDate());
        let hrsDelta = Math.abs(today.getHours() - itad.getHours());
        let minDelta = Math.abs(today.getMinutes() - itad.getMinutes());
        let secDelta = Math.abs(today.getSeconds() - itad.getSeconds());
        
        this.setState({
            dayDelta: dayDelta,
            hrsDelta: hrsDelta,
            minDelta: minDelta,
            secDelta: secDelta
        })
    }

    render() {
      return (
          <div>
                <Paragraph>{this.state.dayDelta}:{this.state.hrsDelta}:{this.state.minDelta}:{this.state.secDelta}</Paragraph>
                <Subaragraph><span>Dni</span> <span>Godzin</span> <span>Minut</span> <span>Sekund</span></Subaragraph>
          </div>
      );
    }
}

export default Timer;