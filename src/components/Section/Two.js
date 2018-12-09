import React, {Component} from "react";
import styled from "styled-components";
import '/Users/sashabouloudnine/dev/react/lobstr.io/gatsby-starter-hello-world/src/layout/index.css'

const SectionCentral = styled.section `
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
    @media(min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
        margin-top: -190px;
    }
    @media(min-width: 1250px) {
        padding-left: 97px;
        padding-right: 97px;
        margin-top: -50px;
    }
`

const DivCentral = styled.div `
    padding: 5rem 0;
    border-bottom: 2px solid #e4edf1;
`

const DivBg = styled.div `
    @media (min-width: 600px) {
        text-align: center;
    }
    @media (min-width: 1250px) {
        text-align: left;
    }
    padding: 0 5%;
`

const Title = styled.h1 `
    @media (min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 1250px) {
    margin-left: 0;
    margin-right: 0;
    }
    font-size: 1.953rem;
    color: #091E42;
    margin-bottom: 0.3em;
    font-weight: 700;
    line-height: 1.3;
    max-width: 710px;
`

const SubTitle = styled.p `
    @media (min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 1250px) {
        margin-left: 0;
        margin-right: 0;
    }
    max-width: 800px;
    line-height: 1.6;
    color: #2d424d;
    font-size: 1rem;
`

const DivIn = styled.div `
    @media (min-width: 600px){
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 1250px) {
        margin-left: 0;
        margin-right: 0;
    }
    height: 3px;
    width: 100px;
    background: red;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

const UlGlobal = styled.ul `
    @media (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        margin-top: 4rem;
        padding: 0;
        max-width: 700px;
    }
    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 900px;
    }
    @media (min-width: 1250px) {
        max-width: 1060px;
        padding: 0 5%;
        margin-right: 0;
        grid-template-columns: 1fr 1fr 1fr;
    }
    display: grid;
    grid-gap: 2rem;
    margin: 2.5rem auto 0;
    padding: 0 5%;
    list-style: none;
`

const LiBigOne = styled.li`
    @media (min-width: 600px) {
        width: 225px;
    }
    @media (min-width: 900px) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
`
const LiBigTwo = styled.li`
    @media (min-width: 600px) {
        width: 225px;
    }
    @media (min-width: 900px) {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    }
`
const LiBigThree = styled.li`
    @media (min-width: 600px) {
        width: 225px;
    }
    @media (min-width: 900px) {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
    }
`
const LiBigFour = styled.li`
    @media (min-width: 600px) {
        width: 225px;
    }
    @media (min-width: 900px) {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }
`
const LiBigFive = styled.li`
    @media (min-width: 600px) {
        width: 225px;
    }
    @media (min-width: 900px) {
        grid-row: 1 / 2;
        grid-column: 3 / 4;
    }
`
const LiBigSix = styled.li`
    @media (min-width: 600px) {
        width: 225px;
    }
    @media (min-width: 900px) {
        grid-row: 2 / 3;
        grid-column: 3 / 4;
    }
`

const LittleTitle = styled.h2 `
    color: #091E42;
    margin-bottom: 0.3em;
    font-weight: 600;
    font-size: 1.15rem;
`

const LittleUl = styled.ul `
    color: #2d424d;
    line-height: 1.6;
`

class Two extends Component{
    render() {
        return (
            <SectionCentral>
                <DivCentral>
                    <DivBg>
                        <Title>Ask us anything</Title>
                        <SubTitle>Follow trends, get fresh leads, gain insights about customers and competitors, 
                            protect your activity. Possibilities are endless.
                        </SubTitle>
                        <DivIn></DivIn>
                    </DivBg>
                    <UlGlobal>
                        <LiBigOne>
                            <LittleTitle>Real Estate</LittleTitle>
                            <LittleUl>
                                <li>Airbnb</li>
                                <li>Leboncoin</li>
                                <li>SeLoger</li>
                                <li>Craigslist</li>
                                <li>Zillow</li>
                            </LittleUl>
                        </LiBigOne>
                        <LiBigTwo>
                            <LittleTitle>Product {'\&'} Pricing</LittleTitle>
                            <LittleUl>
                                <li>Amazon</li>
                                <li>Ebay</li>
                                <li>Alibaba</li>
                                <li>Cdiscount</li>
                                <li>Fnac</li>
                            </LittleUl>                        
                        </LiBigTwo>
                        <LiBigThree>
                        <LittleTitle>Financial Data</LittleTitle>
                            <LittleUl>
                                <li>Google</li>
                                <li>Yahoo</li>
                                <li>Boursorama</li>
                                <li>Nasdaq</li>
                                <li>Bloomberg</li>
                            </LittleUl>                        
                        </LiBigThree>
                        <LiBigFour>
                        <LittleTitle>Social Media</LittleTitle>
                            <LittleUl>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Pinterest</li>
                                <li>Github</li>
                            </LittleUl>                        
                        </LiBigFour>
                        <LiBigFive>
                        <LittleTitle>Job {'\&'} Human Capital</LittleTitle>
                            <LittleUl>
                                <li>Linkedin</li>
                                <li>Viadeo</li>
                                <li>Github</li>
                                <li>Monster</li>
                                <li>Xing</li>
                            </LittleUl>                        
                        </LiBigFive>
                        <LiBigSix>
                        <LittleTitle>Travel, Hotel {'\&'} Airlines</LittleTitle>
                            <LittleUl>
                                <li>Google Maps</li>
                                <li>Tripadvisor</li>
                                <li>Booking</li>
                                <li>SkyScanner</li>
                                <li>Hotels.com</li>
                            </LittleUl>                        
                        </LiBigSix>
                    </UlGlobal>
                </DivCentral>
            </SectionCentral>
        )
            
    }
}

export default Two;