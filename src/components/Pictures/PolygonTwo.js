import React, {Component} from "react";
import styled from "styled-components";

const SvgCore = styled.svg `
    width: 2560px;
    position: absolute;
    left: 50%;
    margin-left: -1280px;
`

const PolyChildOne = styled.polygon `
    fill: #ff4c4c;
`
const PolyChildTwo = styled.polygon `
    fill: #ff7f7f;
`

const PolyChildThree = styled.polygon `
    fill: #ff4c4c;
`

const PolyChildFour = styled.polygon `
    fill: #ff9999;
`

const PolyChildFive = styled.polygon `
    fill: #ff4c4c;
`

const PolyChildSix = styled.polygon `
    fill: #ff6666;
`

const PolyChildSeven = styled.polygon `
    fill: #ff4c4c;
`

const PolyChildEight = styled.polygon `
    fill: url(#a25);
`

class PolygonTwo extends Component {
    render() {
        return(
            <SvgCore viewBox='0 0 2560 1200'>
                <defs>
                    <linearGradient id="a25" gradientUnits="userSpaceOnUse" x1="1280" y1="1200" x2="1280" y2="1">
                        <stop offset="0.1" stopColor="#FFF"/>
                        <stop offset="1" stopColor="#f0f4f7"/>        
                    </linearGradient>
                </defs>
                <PolyChildOne points='373 276 860 220.1 547 340 373 276'></PolyChildOne>
                <PolyChildTwo points='1214 103 570.2 300 1214 362 1214 103'></PolyChildTwo>
                <PolyChildThree points='1214 103 1748.5 91.2 1530.3 167 1214 103'></PolyChildThree>
                <PolyChildFour points='2165 1 1503.7 133.9 2165 172 2165 1'></PolyChildFour>
                <PolyChildFive points='2165 1 2494.7 20 2349.8 58 2165 1'></PolyChildFive>
                <PolyChildSix points='2560 1 2333.8 44.3 2333.8 83.8 2560 83.8 2560 1'></PolyChildSix>
                <PolyChildSeven points='0 338 313 303.3 313 412.5 0 404 0 338'></PolyChildSeven>
                <PolyChildEight points='2560 76 2165 1 1768 137 1214 103 804 300 373 276 0 404 0 1200 2560 1200 2560 76'></PolyChildEight>
            </SvgCore>
        )
    } 
}

export default PolygonTwo;
