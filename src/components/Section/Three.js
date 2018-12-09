import React, {Component} from "react";
import styled from "styled-components";
import '/Users/sashabouloudnine/dev/react/lobstr.io/gatsby-starter-hello-world/src/layout/index.css';

const SectionCentral = styled.section `
    /*padding-bottom: 5rem;*/
    position: relative;
    z-index: 1;
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

const DivCentral = styled.div `
    padding: 5rem 0;
    border-bottom: 2px solid #e4edf1;
`

const MainTitle = styled.h1 `
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    @media (min-width: 600px) {
        font-size: 1.953rem;
    }
`

const MainSubTitle = styled.p `
    line-height: 1.6;
    color: #2d424d;
    font-size: 1rem;
    @media (min-width: 600px) {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 1250px) {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }   
`

const UlPricing = styled.ul `
    margin-top: 5rem;
    display: grid;
    grid-gap: 2rem;
    @media (min-width: 1250px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

`

const LiPrice = styled.li `
    padding: 2rem 5%;
    margin: 0 -5%;
    text-align: center;
    @media (min-width: 600px) {
        margin: auto;
    }
    @media (min-width: 900px){
        margin: auto;
        grid-template-columns: 200px 1fr;
        grid-gap: 2.5rem;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    @media (min-width: 1250px) {
        display: block;
        padding: 2rem 10%;
    }
`

const DivText = styled.div `
`

const TopTitle = styled.p `
`

const Title = styled.h2 `
    font-size: 1.15rem;
    color: #091E42;
    margin-bottom: 1em;
    font-weight: 700;
`

const SubTitle = styled.p `
    @media(min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }
    line-height: 1.4;
    color: #2d424d;
    font-size: 1rem;
    max-width: 75%;
    margin-bottom: 1em;
    
`
const DivTextPrice = styled.div `
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
`
const DivPrice = styled.div `
    margin-bottom: 1rem;
`

const TitlePrice = styled.h1 `
    margin-bottom: 0;
`

const SubTitlePrice = styled.p `
    line-height: 1;
    color: #2d424d;
    font-size: 1rem;
`

const DivButton = styled.div `
    margin-left: auto;
    margin-right: auto;
    max-width: 75%;
    display: block;
    font-weight: 600;
    background: none;
    color: #2d424d;
    border: 1px solid #2d424d;
    border-radius: 4px;
    padding: 1em;
    cursor: pointer;
    position: relative;
    margin-top: 2.3rem;
    margin-bottom: 2.3rem;

    &:hover {
        box-shadow: 0 1px 13px 0 rgba(0,0,0,0.3);
    }

`

const DivFeatures = styled.div `
    border-top: 2px solid #e4edf1;
`

const TitleFeature = styled.h4 `
    color: #091E42;
    margin-top: 1.4rem;
    margin-bottom: 1.7rem;

`

const UlFeature = styled.ul `
    text-align: left;
    color: #2d424d;
    line-height: 1.6;
    list-style: none;
`

const LiFeature = styled.li `
    list-style: none;
    &:before{
        color: #2d424d;
        content: "•";
        position: relative;
        max-height: 0;
        left: -10px;

        font-size: 20px;
    }
    
`

const LiPriceCentral = styled(LiPrice) `
    border-radius: 6px;
    -webkit-box-shadow: 0 1px 13px 0 rgba(0,0,0,0.1);
    box-shadow: 0 1px 13px 0 rgba(0,0,0,0.1);
`

const TitlePriceCentral = styled(TitlePrice) `
    color: red;
`

const DivButtonCentral = styled(DivButton) `
    width: 300px;
    background: red;
    color: #FFF;
    border: 1px solid red;
    transition: opacity 300ms ease-out;
    &:hover {
        box-shadow: 0 1px 13px 0 rgba(0,0,0,0.3);
    }
`

const LiFeatureCentral = styled(LiFeature) `
    &:before{
        color: #cc0000;
    }
`

const DivFeaturesCentral = styled(DivFeatures) `
`

const TitleCentral = styled(Title) `
`

const DivButtonRight = styled(DivButton) `
    color: red;
    border: 1px solid red;
    &:hover {
        box-shadow: 0 1px 13px 0 rgba(0,0,0,0.3);
    }

`

const TitleFeatureCentral = styled(TitleFeature) `
`

class Three extends Component{
    render() {
        return (
            <SectionCentral>
                <DivCentral>
                    <MainTitle>Transparent, simple pricing</MainTitle>
                    <MainSubTitle>
                        Receive up to 1 million items within 5 business days. Any website, worldwide.
                    </MainSubTitle>
                    <UlPricing>
                    <LiPrice>
                        <DivText>
                            <TopTitle></TopTitle>
                            <Title>Sample</Title>
                            <SubTitle>Receive 100 items for free. 
                            Any website, worlwide.</SubTitle>
                            <DivPrice>
                                <DivTextPrice>
                                    <TitlePrice>€0</TitlePrice>
                                    <SubTitlePrice>per sample</SubTitlePrice>
                                </DivTextPrice>
                                <a href="#form"><DivButton>Get started</DivButton></a>
                            </DivPrice>
                        </DivText>
                        <DivFeatures>
                            <TitleFeature>What's included</TitleFeature>
                            <UlFeature>
                                <LiFeature>Up to 100 items</LiFeature>
                                <LiFeature>2 business days delivery</LiFeature>
                                <LiFeature>1 website</LiFeature>
                                <LiFeature>Format CSV</LiFeature>
                            </UlFeature>
                        </DivFeatures>
                    </LiPrice>
                    <LiPriceCentral>
                        <DivText>
                            <TopTitle></TopTitle>
                            <TitleCentral>Express</TitleCentral>
                            <SubTitle>Light-speed delivery, 
                            ultra-competitive price.</SubTitle>
                            <DivPrice>
                                <DivTextPrice>
                                    <TitlePriceCentral>€250</TitlePriceCentral>
                                    <SubTitlePrice>per website</SubTitlePrice>
                                </DivTextPrice>
                                <a href="#form"><DivButtonCentral>Get started</DivButtonCentral></a>
                            </DivPrice>
                        </DivText>
                        <DivFeaturesCentral>
                            <TitleFeatureCentral>What's included</TitleFeatureCentral>
                            <UlFeature>
                                <LiFeatureCentral>Up to 50k items</LiFeatureCentral>
                                <LiFeatureCentral>5 business days delivery</LiFeatureCentral>
                                <LiFeatureCentral>Up to 10 websites </LiFeatureCentral>
                                <LiFeatureCentral>Format CSV or JSON</LiFeatureCentral>
                            </UlFeature>
                        </DivFeaturesCentral>
                    </LiPriceCentral>
                    <LiPrice>
                        <DivText>
                            <TopTitle></TopTitle>
                            <Title>Entreprise</Title>
                            <SubTitle>12-months dedicated plan,
                            up to 50 websites</SubTitle>
                            <DivPrice>
                                <DivTextPrice>
                                    <TitlePrice>€2000</TitlePrice>
                                    <SubTitlePrice>per year</SubTitlePrice>
                                </DivTextPrice>
                                <a href="#form"><DivButtonRight>Contact us</DivButtonRight></a>
                            </DivPrice>
                        </DivText>
                        <DivFeatures>
                            <TitleFeature>What's included</TitleFeature>
                            <UlFeature>
                                <LiFeature>Unlimited data size</LiFeature>
                                <LiFeature>Tailored delivery</LiFeature>
                                <LiFeature>Up to 50 websites</LiFeature>
                                <LiFeature>Dedicated API</LiFeature>
                            </UlFeature>
                        </DivFeatures>
                    </LiPrice>
                    </UlPricing>
                </DivCentral>
            </SectionCentral>
        )
    }
};

export default Three;