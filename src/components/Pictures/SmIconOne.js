import React, {Component} from "react";
import styled from "styled-components";
import anime from 'animejs';


const SvgLarge = styled.svg `
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

const Svg = styled.svg `
    width: 64px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
    overflow: visible;
    position: relative;
`

const PolyLine = styled.g `
        height: 100%;
        width: 100%;
        fill: none;
        stroke: #ffffff;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 5px;
        transform-origin: center;
        transform-box: fill-box;
        position: relative;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        float: none;
`

class SmIconOnePoly extends Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseEnter () {
        this.componentDidMount()
    }

    componentDidMount () {
        anime({
            targets: '.af',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            loop: 3,
            delay: function(el, i) {
                return i * 250
              },
            direction: 'alternate'
        })
    }


    render() {
        return(
            <SvgLarge viewBox="0 0 100 100" onMouseEnter={this.handleMouseEnter}>
                <g stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" fill="none">
                    <polyline className="af" points="10,90 10,10 90,10 90,90 10,90" strokeDasharray="500" strokeDashoffset="500"></polyline>
                    <polyline className="af" points="20,80 20,20 80,20 80,80 20,80" strokeDasharray="300" strokeDashoffset="300"></polyline>
                    <polyline className="ag" points="40,60 40,40 60,40 60,60 40,60" fill="#091D42" strokeDasharray="300" strokeDashoffset="300"></polyline>
                </g>
            </SvgLarge>
        
        );
    }
}

class SmIconOne extends Component {
    constructor(props) {
        super(props);
        this.fill = this.props.fill;
        this.startColor = this.props.startColor;
        this.endColor = this.props.endColor;    
    }

    componentDidMount () {
        anime({
            targets: '#rotation',
            rotate: '0.25turn',
            loop: true,
            duration: 1000, 
            delay: 2000
          });          
    }

    render() {
        return(
                
                <Svg id="smallOne" fill={this.fill} viewBox="0 0 64 64">
                    <PolyLine id="rotation">
                        <polyline width="100%" height="100%" points="50 5 59 5 59 14"></polyline>
                        <polyline width="100%" height="100%" points="59 50 59 59 50 59"></polyline>
                        <polyline width="100%" height="100%" points="5 50 5 59 14 59"></polyline>
                        <polyline width="100%" height="100%" points="5 14 5 5 14 5"></polyline>
                    </PolyLine>
                </Svg>
        );
    }
}

export {
    SmIconOne, 
    SmIconOnePoly
} ;