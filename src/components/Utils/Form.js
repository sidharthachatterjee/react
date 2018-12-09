import React, {Component} from "react";
import styled from "styled-components";
import '../../layout/index.css';

const Div = styled.div `

    
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    @media (min-width: 600px) {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 1250px) {
        width: 40%;
        margin-left: auto;
        margin-right: auto;
    }


`

const InputMail = styled.input `

    border: ${props => props.border};
    background: rgba(255,255,255,.4);

    
    margin-bottom: 2em;
    padding: 1em;
    font-size: 15px;
    max-width: 300px;
    width: 100%;

    min-height: 100%;
    font-family: 'Lobstr';
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
`

const InputName = styled.input `
    border: ${props => props.border};
    background: rgba(255,255,255,.4);

    margin-bottom: 1.2em;
    padding: 1em;
    font-size: 15px;
    max-width: 300px;
    width: 100%;

    min-height: 100%;
    font-family: 'Lobstr';
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
`

const Button = styled.button `
    @media (min-width: 600px) {
        margin: auto;
        text-align: center;
    }
    @media (min-width: 1250px) {
        margin: auto;
        text-align: center;
    }

    
    margin-left: 0;
    text-align: left;
    max-width: 300px;
    width: 100%;

    min-height: 100%;
    font-family: 'Lobstr';
    border-radius: 4px;
    white-space: nowrap;
    
    font-size: 17px;
    font-weight: 700;
    -webkit-text-size-adjust: 100%;

    
    text-transform: uppercase;
    text-decoration: none;

    border: 2px solid #091E42;
    padding: 1em;
    cursor: pointer;

    background: ${props => props.background};
    color: ${props => props.color};
`

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHover: false, 
            isSelectName: false, 
            isSelectMail: false,
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleSelectName = this.handleSelectName.bind(this);
        this.handleSelectMail = this.handleSelectMail.bind(this);
    }

    handleMouseEnter() {
        this.setState({isHover: !this.state.isHover})
    }

    handleMouseLeave() {
        this.setState({isHover: !this.state.isHover})
    }

    handleSelectName() {
        this.setState({isSelectName: !this.state.isSelectName})
    }

    handleSelectMail() {
        this.setState({isSelectMail: !this.state.isSelectMail})
    }
    
    render() {
        return (
            <Div className='au'>
            <form action="https://formspree.io/sasha.bouloudnine@lobstr.io" method="POST"> {/* go there for CSS: https://testformspree.com/ */}
                <InputName type="name" name="name" placeholder="Your name" onFocus={this.handleSelectName} onBlur={this.handleSelectName} border={this.state.isSelectName ? '1px solid rgba(255,0,0,.5)' : '1px solid rgba(0,0,0,.1)'}/>
                <InputMail type="email" name="email" placeholder="Your email" onFocus={this.handleSelectMail} onBlur={this.handleSelectMail} border={this.state.isSelectMail ? '1px solid rgba(255,0,0,.5)' : '1px solid rgba(0,0,0,.1)'}/>
                <Button type="submit" background={this.state.isHover ? 'white' : '#091E42'} color={this.state.isHover ? '#091E42' : 'white'} type="submit" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>Contact us</Button>
            </form>
            </Div>
        )
    }
}

export default Form;
