import React, {Component} from "react";
import styled from "styled-components";
import PolygonOne from '../Pictures/PolygonOne';
import PolygonTwo from "../Pictures/PolygonTwo";
import {SmIconOnePoly} from "../Pictures/SmIconOne";
import SmIconTwo from "../Pictures/SmIconTwo";
import SmIconThree from "../Pictures/SmIconThree";
import Prism from 'prismjs';
import "../../layout/prism.css";

const SectionCentral = styled.section `
    position: relative;
    color: #FFF;
    padding-bottom: 430px;
    
    @media(min-width: 600px) {
        margin-top: 0px;
    }

    @media(min-width: 1250px) {
        margin-top: 0;
    }

`

const DivOne = styled.div `
    top: -2px;
    height: 230px;
    position: absolute;
    width: 100%;
    overflow: hidden;
`
const DivTwo = styled.div `
    background: radial-gradient(ellipse farthest-side at 100% 100%, #ff6666 20%, #ff4c4c 50%, #e60000 110%);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -10;
    top: 0;
`
const DivThree = styled.div `
    display: grid;
    grid-gap: 3.5rem;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;

    @media(min-width: 600px) {
        padding-top: 230px;
        padding-left: 48px;
        padding-right: 48px;
    }

    @media(min-width: 1250px) {
        padding-top: 0px;
        grid-gap: 4rem;
        padding-left: 97px;
        padding-right: 97px;
    }
`

const DivSecondTitle = styled.div `
    margin-top: 2rem;
    padding: 0 5%;
    @media(min-width: 600px) {
        text-align: center;
    }

    @media(min-width: 1250px) {
        text-align: left;
        margin-top: 0;
        padding-top: 9rem;
        height: 740px;

        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center; 
        -webkit-box-align: start; 
        -ms-flex-align: start;
        align-items: start; 
        width: 50%;
    }
`

const DivAnimation = styled.div`
    padding: 0 5%;
    
    @media(min-width: 600px) {
        text-align: center;
        margin: auto;
        max-width: 70%;
    }

    @media(min-width: 1250px) {
        text-align: left;
        margin-top: 0;
        padding-top: 9rem;
        height: 780px;
        float: right;

        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center; 
        -webkit-box-align: start; 
        -ms-flex-align: start;
        align-items: start; 
        width: 50%;
    }
`

const MainTitleTwo = styled.h1 `
    @media(min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }
    @media(min-width: 1250px) {
        margin-left: 0;
        margin-right: 0;
    }
    font-size: 1.953em;
    color: #FFF;
    margin-bottom: 0.3em;
    font-weight: 700;
    line-height: 1.3;
    max-width: 710px;
`

const SubTitleTwo = styled.p `
    max-width: 800px;
    line-height: 1.6;
    color: #FFF;
    font-size: 1rem;
    
    @media (min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1250px) {
        margin-left: 0;
        margin-right: 0;
    }   
`

const UlAssets = styled.ul `
    list-style: none;
    padding: 0 5%;
    background: rgba(23,28,33,0.06);
    border-radius: 3px;
    display: grid;
    grid-gap: 3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    @media(min-width: 600px) {
        max-width: 700px;
        margin: 0 auto;
    }
    @media(min-width: 900px) {
        max-width: unset;
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media(min-width: 1250px) {
        text-align: left;
    }
`

const LiIn = styled.li `
    text-align: center;
    @media(min-width: 600px) {
        display: grid;
        grid-template-columns: 64px 1fr;
        grid-gap: 1.5rem;
        text-align: left;
        align-items: center;
    }
    @media(min-width: 900px) {
        display: block;
        text-align: center;
    }

`

const DivInLi = styled.div `
    @media(min-width: 900px) {
        margin-top: 2.5rem;
    }
`

const SubtitleLi = styled.li `
    margin-bottom: 0.5em;
    font-weight: 600;
    font-size: 1.15rem;
`

const ParagraphInLi = styled.p `
    color: #FFF;
    max-width: 800px;
    line-height: 1.6;
    font-size: 1rem;
    @media(min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }
    @media(min-width: 1250px) {
        margin-left: 0;
        margin-right: 0;
    }
`

const DivFour = styled.div `
    bottom: -770px;
    height: 1200px;
    z-index: -10;
    position: absolute;
    width: 100%;
    overflow: hidden;
`

const FirstDiv = styled.div `
    display: inline-block;
`

const Pre = styled.pre `
    background: linear-gradient(to bottom,#fff 0,#fff 49%,#f0f4f7 100%);
    color: #091c42;
    margin-top: 7em;
    line-height: 1.1;
    overflow: hidden;
    padding: 1.5rem;
    box-shadow: 0 1px 20px 0 rgb(23,28,33,0.5);
    border-radius: 6px;
    width: 100%;
    font-weight: 400;
    font-size: 15px;

    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.2;
 
    -moz-tab-ze: 2;
    -o-tab-size: 2;
    tab-size: 2;
 
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    
`

const Code = styled.code `
    display: block;
    word-wrap: normal;

`


class One extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return(
            <SectionCentral>
                <DivOne>
                    <PolygonOne/>
                </DivOne>
                <DivTwo/>
                <DivThree>
                <FirstDiv>
                <DivAnimation>
                    <Pre>
                    <Code className="language-javascript" spellcheck="False">{
`{
    asin: 'B00UTXSMXK',
    name: 'Cool Puppet You Want To Scrape 🎅',
    currency: 'DOLLAR',
    price: {
        lowPrice: '4.19',
        highPrice: '6.27'
    },
    review: {
        score: '4.1',
        nbReviews: '79',
        nbAnsweredQuestions: '13'
    },
    isPrime: 1,
    isStock: 1,
    isFba: 1,
    pictures: [
        '41yMIBVc3BL.jpg',
        '41EoogZRugL.jpg',
        '41GGlpb9nVL.jpg'
    ],
    seller: {
        sellerBuyBox: 'CoolPuppetSeller',
        nbSellers: 3
    }
}`
                }</Code>
                </Pre>
                </DivAnimation>
                    <DivSecondTitle>
                        <MainTitleTwo>Data that drive results</MainTitleTwo>
                        <SubTitleTwo>Large, fresh, and tailored datasets will improve
                            sales, leads acquisition, and dramatically enhance decision-making accuracy.
                        </SubTitleTwo>
                    </DivSecondTitle>
                    </FirstDiv>
                    <UlAssets>
                        <LiIn>
                            <SmIconOnePoly/>
                            <DivInLi>
                                <SubtitleLi>Focused</SubtitleLi>
                                <ParagraphInLi>We design tailored-scripts in Python 
                                    to deliver the very dataset you need.
                                </ParagraphInLi>
                            </DivInLi>
                        </LiIn>
                        <LiIn>
                        <SmIconTwo/>
                            <DivInLi>
                                <SubtitleLi>Fast</SubtitleLi>
                                <ParagraphInLi>Receive the data within <strong>5 business days</strong>. That's it.
                                </ParagraphInLi>
                            </DivInLi>
                        </LiIn>
                        <LiIn>
                        <SmIconThree/>
                            <DivInLi>
                                <SubtitleLi>Fat</SubtitleLi>
                                <ParagraphInLi>We collect millions of items everyday.
                                    No limit of size, items or attributes.
                                </ParagraphInLi>
                            </DivInLi>
                        </LiIn>
                    </UlAssets> 
                </DivThree>
                <DivFour>
                    <PolygonTwo/>
                </DivFour>

            </SectionCentral>
        )
    }
};

export default One;