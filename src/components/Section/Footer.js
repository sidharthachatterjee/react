import React, {Component} from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import '../../layout/index.css';

const Footer = styled.footer `
    background: radial-gradient(ellipse farthest-side at 100% 100%, #fcfdfd 20%, #F4F7F9 50%, #c2d3de 110%);
    padding-top: 228px;
    position: relative;
    line-height: 1.6;
    color: #2d424d;
    font-size: 1rem;
`

const DivCentral = styled.div `
    top: -2px;
    height: 230px;
    position: absolute;
    width: 100%;
    overflow: hidden;
`

const SvgCentral = styled.svg `
    width: 2560px;
    position: absolute;
    right: 0;
`
const PolygonOne = styled.polygon `
    fill: #fff;
`

const PolygonTwo = styled.polygon `
    fill: #c8d7de;
`

const PolygonThree = styled.polygon `
    fill: #d6e1e6;
`

const PolygonFour = styled.polygon `
    fill: #e4eaed;
`

const DivText = styled.div `
    position: relative;
    z-index: 1;
    margin: 0 auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1920px;
    @media (min-width: 600px) {
        padding-left: 30px;
        padding-right: 30px;
    }
    @media (min-width: 1250px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 5rem 5%;
        padding-left: 60px;
        padding-right: 60px;;
    }
`

const IconLink = styled(Link) `
    display: block;
    width: 100px;
    margin: -10px 15% 0 auto;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    @media (min-width: 600px) {
        margin: 1.5rem 10% 0 auto;
    }
    @media (min-width: 900px) {
        margin: 2rem 10% 0 auto;
    }
    @media (min-width: 1250px) {
        margin: 0;
    }
`

const SvgIconFooter = styled.svg `
    fill: url(#ab);
    display: block;
`

const UlFooter = styled.ul `
    padding: 4rem 0 4rem 5%;
    @media (min-width: 600px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        padding: 5rem 0;
    }
    @media (min-width: 900px) {
        max-width: 75%;
        padding: 2rem 0 5rem;
    }
    @media (min-width: 1250px) {
        width: 70%;
        padding: 0;
    }
`
const LiOne = styled.li `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    @media (min-width: 600px) {
        margin-bottom: unset;
    }
`

const SpanOne = styled.span `
    font-weight: 600;
    margin-bottom: 0.5em;
    display: block;
    font-size: .895rem;
`

const DivLi = styled.div `
`

const LinkOne = styled(Link) `
    line-height: 1.6;
    color: #2d424d;
    font-size: 1rem;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
`

class FooterCentral extends Component{
    render() {
        return (
            <Footer>
            <DivCentral>
                <SvgCentral viewBox="0 0 2560 230">
                    <PolygonOne points='2560 62.6 1967.1 203.6 0 76 0 0 2560 0 2560 62.6'></PolygonOne>
                    <PolygonTwo points='1358 178 2187.9 122.1 1791 208 1358 178'></PolygonTwo>
                    <PolygonThree points='1772.7 205.7 2495.7 43.4 2122.5 226.1 2113 229 2054.3 225.8 1772.7 205.7'></PolygonThree>
                    <PolygonFour points='2560 0 2122.5 226.1 2560 95 2560 0'></PolygonFour>
                </SvgCentral>
            </DivCentral>
            <DivText>
                <IconLink To='https://lobstr.io'>
                <SvgIconFooter xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="ab" gradientUnits="userSpaceOnUse" x1="0%" y1="50%" x2="100%" y2="0%">
                            <stop offset="0.56" stopColor='#7D94A1'/>
                            <stop offset="1" stopColor='#7D94A1' stop-opacity="0.4"/>        
                        </linearGradient>
                    </defs>
                    <path d="M94.3,77c-4.4-4.4-10.4-6.9-16.6-6.9c-1.2,0-2.4,0.1-3.6,0.3c0.5-3.1,0.3-6.3-0.5-9.3l7.1,0.4c0,0,0.1,0,0.1,0   c0.9,0,1.6-0.7,1.6-1.5c0.1-0.9-0.6-1.7-1.5-1.7l-8.4-0.5c-0.3-0.8-0.7-1.5-1.1-2.2l8.5-3.3c0.8-0.3,1.3-1.3,0.9-2.1   c-0.3-0.8-1.3-1.3-2.1-0.9l-9.1,3.5c-0.3-0.5-0.7-0.9-1.1-1.3l7-7.1c0.6-0.6,0.6-1.7,0-2.3c-0.6-0.6-1.7-0.6-2.3,0l-7,7.1   c-0.4-0.3-0.8-0.7-1.2-1l3.7-9.1c0.3-0.8-0.1-1.8-0.9-2.1c-0.8-0.3-1.8,0.1-2.1,0.9l-3.4,8.5c-0.8-0.5-1.7-0.9-2.6-1.2   c1.5-4.2,1.7-8.8,0.8-13.1c6.9-2.1,14.7-0.4,20.2,5.1c2.9,2.9,4.9,6.6,5.6,10.7c0.2,0.9,1,1.5,1.9,1.3c0.9-0.2,1.5-1,1.3-1.9   c-0.9-4.7-3.1-9-6.5-12.4c-6.3-6.3-15.4-8.3-23.4-5.9c-0.2-0.7-0.5-1.3-0.8-1.9c1.4-6.1-0.4-12.5-4.8-16.9c-3.4-3.4-8-5.3-12.8-5.3   c-1.6,0-3.2,0.2-4.7,0.6c-0.6,0.2-1,0.6-1.2,1.2C33.6,12.7,35.4,19.4,40,24c3.4,3.4,8,5.3,12.8,5.3c1.1,0,2.3-0.1,3.4-0.3   c0.2,0.3,0.3,0.7,0.4,1c-2.5,1.1-4.8,2.7-6.8,4.8c-2.7,2.7-4.7,6-5.8,9.6c-3.6,1.1-6.9,3.1-9.6,5.8c-1.7,1.7-3.1,3.6-4.2,5.7   c-0.2-0.1-0.4-0.2-0.6-0.3c1.1-5.9-0.7-12-5-16.2c-3.4-3.4-8-5.3-12.8-5.3c-1.6,0-3.2,0.2-4.7,0.6c-0.6,0.2-1,0.6-1.2,1.2   c-1.7,6.2,0.1,12.9,4.7,17.5c3.4,3.4,8,5.3,12.8,5.3c1.3,0,2.7-0.2,4-0.4c0.5,0.2,0.9,0.4,1.4,0.6c-0.9,2.5-1.4,5.2-1.4,7.9   c0,6.3,2.4,12.2,6.9,16.6c3.5,3.5,7.8,5.7,12.6,6.6c0.1,0,0.2,0,0.3,0c0.8,0,1.5-0.6,1.6-1.4c0.2-0.9-0.4-1.7-1.3-1.9   c-4.1-0.7-7.9-2.7-10.9-5.6c-3.8-3.8-5.9-8.9-5.9-14.3c0-2.4,0.4-4.7,1.2-6.9c1.9,0.5,3.8,0.7,5.8,0.7c2.3,0,4.5-0.3,6.7-1   c0.3,0.8,0.7,1.7,1.1,2.5L38.2,65c-0.8,0.3-1.3,1.3-0.9,2.1c0.3,0.6,0.9,1,1.5,1c0.2,0,0.4,0,0.6-0.1l7.8-3   c0.4,0.6,0.9,1.2,1.4,1.8l-6.1,6.1c-0.6,0.6-0.6,1.7,0,2.3c0.3,0.3,0.7,0.5,1.2,0.5s0.8-0.2,1.2-0.5l6.1-6.1   c0.5,0.5,1.1,0.9,1.6,1.3l-3.2,7.8C49,79,49.4,80,50.3,80.3c0.2,0.1,0.4,0.1,0.6,0.1c0.6,0,1.3-0.4,1.5-1l2.9-7.3   c0.8,0.4,1.7,0.8,2.5,1.2l0.2,7.1c0,0.9,0.8,1.6,1.6,1.6c0,0,0,0,0,0c0.9,0,1.6-0.8,1.6-1.7l-0.2-6c1.7,0.4,3.5,0.6,5.2,0.6   c1.2,0,2.4-0.1,3.5-0.3c-1.1,7.3,1.3,14.9,6.6,20.2l0,0c0.3,0.3,0.7,0.5,1.2,0.5c0.1,0,0.3,0,0.4-0.1c4-1.1,7.6-3.2,10.6-6.1   c2.9-2.9,5-6.6,6.1-10.5C94.9,78.1,94.7,77.5,94.3,77z M42.3,21.6c-3.5-3.5-5-8.6-4.1-13.4C39.2,8,40.1,8,41.1,8   c4,0,7.7,1.5,10.5,4.3c3.5,3.5,5,8.6,4.1,13.4c-1,0.2-1.9,0.3-2.9,0.3C48.8,26,45.1,24.4,42.3,21.6z M12.8,51.1   c-3.5-3.5-5-8.6-4.1-13.4c1-0.2,1.9-0.3,2.9-0.3c4,0,7.7,1.5,10.5,4.3c3.5,3.5,5,8.6,4.1,13.4c-1,0.2-1.9,0.3-2.9,0.3   C19.3,55.5,15.6,53.9,12.8,51.1z M52,37c1.6-1.6,3.5-2.9,5.4-3.9c0.7,3.6,0.4,7.4-0.8,10.9c-1.9-0.5-3.8-0.7-5.8-0.7   c-1.1,0-2.2,0.1-3.2,0.2C48.6,41.1,50.1,38.9,52,37z M33.2,56.9c0.9-1.6,2-3.1,3.3-4.4c1.9-1.9,4.1-3.4,6.5-4.4   c-0.1,1.1-0.2,2.1-0.2,3.2c0,1.8,0.2,3.5,0.6,5.2C40.1,57.5,36.5,57.6,33.2,56.9z M52,65.7c-3.8-3.8-5.9-8.9-5.9-14.3   c0-1.5,0.2-2.9,0.5-4.3c1.4-0.3,2.8-0.5,4.3-0.5c2.1,0,4.1,0.3,6,0.9c0,0,0,0,0.1,0c0.1,0.1,0.3,0.1,0.4,0.1   c1.7,0.6,3.3,1.4,4.8,2.4c0,0,0,0,0,0c1.1,0.7,2.1,1.5,3,2.5c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c4.9,4.9,6.9,11.9,5.5,18.6   C64,72.6,56.9,70.6,52,65.7z M86.4,86.9c-2.3,2.3-5.1,4-8.2,5c-4.4-4.8-6.2-11.6-4.8-18c1.4-0.3,2.9-0.5,4.3-0.5   c5.1,0,9.9,1.9,13.6,5.3C90.4,81.8,88.6,84.6,86.4,86.9z" />
                    <circle cx={50.2} cy={55.9} r={1.8} />
                    <circle cx={55.4} cy={50.7} r={1.8} />
                </SvgIconFooter>
                </IconLink>
                <UlFooter>
                    <LiOne>
                        <SpanOne>Desk</SpanOne>
                        <DivLi>6 avenue de Corinthe<br />13006 Marseille, France</DivLi>
                    </LiOne>
                    <LiOne>
                        <SpanOne>Contact</SpanOne>
                        <LinkOne To='tel:+33760090005'>+33760090005</LinkOne>
                        <LinkOne To="mailto:contact@lobstr.io">contact@lobstr.io</LinkOne>
                    </LiOne>
                </UlFooter>
            </DivText>
            </Footer>
        )
    }
};

export default FooterCentral;
