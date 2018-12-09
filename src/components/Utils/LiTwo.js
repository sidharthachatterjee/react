import React, {Component} from "react";
import styled from "styled-components";

const LiBig = styled.li `
    @media (min-width: 600px) {
        width: 225px;
    }
    @media (min-width: 900px) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
`

const Title = styled.h2 `
    color: #091E42;
    margin-bottom: 0.3em;
    font-weight: 600;
    font-size: 1.15rem;
`

const UlIn = styled.ul `
    color: #2d424d;
    line-height: 1.6;
    list-style: none;
`

const LiIn = styled.li `
    @media (min-width: 600px) {
        width: 225px;
    }
`

class LiTwo extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title
        this.liOne = this.props.liOne
        this.liTwo = this.props.liTwo
        this.liThree = this.props.liThree
        this.liFour = this.props.liFour
        this.liFive = this.props.liFive
    }
    render() {
        return (
            <LiBig>
                <Title>{this.title}</Title>
                <UlIn>
                    <LiIn>{this.liOne}</LiIn>
                    <LiIn>{this.liTwo}</LiIn>
                    <LiIn>{this.liThree}</LiIn>
                    <LiIn>{this.liFour}</LiIn>
                    <LiIn>{this.liFive}</LiIn>
                </UlIn>
            </LiBig>  
        )
    }
}

export default LiTwo;
