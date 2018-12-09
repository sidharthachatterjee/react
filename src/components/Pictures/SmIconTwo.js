import React, {Component} from "react";
import styled from "styled-components";
import anime from 'animejs';

const Svg = styled.svg `
    @media (min-width: 600px) {
            margin-bottom: 0;
            display: block;
        }
    @media (min-width: 900px) {
            margin: 0 auto 1.5rem;
            width: 70px;
            display: block;
        }
        @media (min-width: 1500px) {
            width: 77px;
            display: block;
        }   
    width: 64px;
    margin-bottom: 1rem;
    overflow: visible;
    
`

class SmIconTwo extends Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
    }  
    
    componentDidMount() {
        anime({
            targets: "#ae",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function(el, i) {
                return i * 250
              },
            direction: 'alternate', 
            loop: 3
        })
    }

    handleMouseEnter() {
        this.componentDidMount()
    }


    render() {
        return(
            <Svg viewBox="0 0 100 100" onMouseEnter={this.handleMouseEnter}>
                <g width="100%" height="100%" fill="#091D42" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="300" strokeDashoffset="300">
                    <polyline id="ae" points="0,100 50,25 50,75 100,0"></polyline>
                </g>
            </Svg>
        );
    }
}

export default SmIconTwo;