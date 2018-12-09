import React, {Component} from "react";
import styled from "styled-components";
import anime from 'animejs'

const Div = styled.div `
    display: block;
    margin:0 auto;
    text-align: center;
    fill: red;
    transform: translate(0, +150%);

`

class HeroAnimation extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        anime({
            targets: '#svgAttributes polygon',
            points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
            easing: 'easeInOutCirc',
            opacity: .3,
            autoplay: true,
            loop: true,
            duration: 2000,
            direction: 'alternate',
            /*scale: [.5, .9]*/
          });          
    }

    render() {
        return(
            <Div id="svgAttributes"> 
                <svg width="128" height="128" viewBox="0 0 128 128">
                    <polygon points="64 69.68303557677078 8.574 99.92971458377555 62.481824660233045 67.05305408727794 64 3.929714583775554 65.51817533976696 67.05305408727794 119.426 99.92971458377555 "></polygon>
                </svg> 
            </Div>        
        )
    }
}

export default HeroAnimation;