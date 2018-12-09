import React, {Component} from "react";
import styled from "styled-components";

const SvgCore = styled.svg`
    width: 2560px;
    position: absolute;
    left: 0;
`

const PolygonChildOne = styled.polygon`
    fill: #ff4c4c;
`

const PolygonChildTwo = styled.polygon`
    fill: #ff6666;
`
const PolygonChildThree = styled.polygon`
    fill: #ff7f7f;
`

const PolygonChildFour = styled.polygon`
    fill: #ff9999;
`

const PolygonChildFive = styled.polygon`
    fill: #fff;
`

class PolygonOne extends Component {
    render() {
        return(
            <SvgCore viewBox='0 0 2560 230'>
                <PolygonChildOne points='0 0 0 95 437.5 226.1 437.5 38 0 0'></PolygonChildOne>
                <PolygonChildTwo points='99.2 51.3 437.5 226.1 447 229 771 202.1 771 51.3 99.2 51.3'></PolygonChildTwo>
                <PolygonChildThree points='1109.6 171.8 865 171.8 865 57.5 2386.6 57.5 1109.6 171.8'></PolygonChildThree>
                <PolygonChildFour points='771 202.1 432.9 126.2 889.5 126.2 889.5 156.9 1109.6 171.8 771 202.1'></PolygonChildFour>
                <PolygonChildFive points='0 0 99.2 51.3 432.9 126.2 889.5 156.9 2386.6 57.5 2560 42 2560 0 0 0'></PolygonChildFive>
            </SvgCore>
        )
    } 
}

export default PolygonOne;
