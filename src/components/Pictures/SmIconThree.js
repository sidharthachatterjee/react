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

// https://reactjs.org/docs/faq-functions.html

class SmIconThree extends Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this) // linking function to the object
    }
    
    handleMouseEnter() {
        this.componentDidMount()
    }

    componentDidMount() {
        anime({
            targets: "circle",
            strokeDashoffset: [anime.setDashoffset, 0], 
            easing: 'easeInOutSine',
            duration: 2000,
            delay: function(el, i) {
                return i * 250
              },
            direction: 'alternate', 
            loop: 3
        })
    }
    
    render() {
        return(
            <Svg viewBox="0 0 100 100">
                <circle id="circle" width="100%" height="100%" cx="50" cy="50" r="30" fill="#091D42" stroke="white" strokeWidth="5" strokeDasharray="400" strokeDashoffset="400"
                onMouseEnter={this.handleMouseEnter}></circle>
            </Svg>
        );
    }
}

export default SmIconThree;