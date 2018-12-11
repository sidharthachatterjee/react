import React, {Component} from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Form from "../Utils/Form.js"
import '../../layout/index.css';

const SectionCentral = styled.section `
    padding: 0rem 0 7rem;
     @media (min-width: 600px) {
        padding: 0rem 0 9rem;
    }
    @media (min-width: 1250px) {
        padding: 0rem 0 10rem;
    }
`
const DivCentral = styled.div `
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
    @media (min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
    }
    @media (min-width: 1250px) {
        padding-left: 97px;
        padding-right: 97px;
    }
`

const DivCentralTwo = styled.div `
    padding: 0 5%;
    @media (min-width: 1250px) {
        text-align: left;
    }
    @media (min-width: 600px) {
        text-align: center;
    }
    
`
const SvgCentral = styled.svg `
    display: block;
    width: 90px;
    margin-bottom: 1.4rem;
    @media (min-width: 1250px) {
        width: 95px;
        margin-bottom: 1.5rem;
    }
    @media (min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }

`
const DivText = styled.div `
`

const BigTitle = styled.h1 `
    @media (min-width: 1250px) {
        margin-left: 0;
        margin-right: 0;
    }
    @media (min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
        font-size: 1.953rem;
    }

`

const SubTitle = styled.p `
    line-height: 1.6;
    color: #2d424d;
    font-size: 1rem;
    @media (min-width: 1250px) {
        margin-left: 0;
        margin-right: 0;
    }
    @media (min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }

`

const DivSplit = styled.div `
    margin-bottom: 4rem;
    height: 3px;
    width: 100px;
    background: red;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (min-width: 1250px) {
        margin-left: 0;
        margin-right: 0;
    }
    @media (min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 4.5rem;
    }
`

const TopCall = styled.p `
    line-height: 1.6;
    color: #2d424d;
    font-size: 1rem;
    @media (min-width: 1250px) {
        margin-left: 0;
        margin-right: 0;
    }
    @media (min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }
`

const DivCall = styled.div `
`

const LinkCall = styled(Link) `
    @media (min-width: 600px) {
        font-size: 1.563rem;
    }
    display: inline-block;
    color: #2d424d;
    font-weight: 600;
    font-size: 1.15rem;
    margin-top: 0.1em;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
`

class Four extends Component{
    render() {
        return (
            <SectionCentral>
                <DivCentral id="form">
                    <DivCentralTwo>
                        <SvgCentral viewBox='0 0 134 94'></SvgCentral>
                        <DivText>
                            <BigTitle>Ready to grab fresh data?</BigTitle>
                            <SubTitle>Let's discuss what you have in mind and get started on your extraction right away.</SubTitle>
                            <DivSplit></DivSplit>
                            <Form/>
                            {/*<TopCall>Contact us today at</TopCall>
                            <DivCall>
                                <LinkCall To='mailto:contact@lobstr.io'>contact@lobstr.io</LinkCall>
                            </DivCall>*/}
                        </DivText>
                    </DivCentralTwo>
                </DivCentral>
            </SectionCentral>
        )
    }
};

export default Four;