import React, { Component } from "react";
import Link from "gatsby-link";
import Logo from '../Pictures/Logo'
import '/Users/sashabouloudnine/dev/react/lobstr.io/gatsby-starter-hello-world/src/layout/index.css'

class Header extends Component {
    render() {
        return(
            <header>
                <div className='a2'>
                <div>
                    <Link to="/" className='a8'>
                        <Logo fill="red"/>
                        <span>lobstr.io</span>
                    </Link>
                </div>
                </div>
            </header>
        )
    }
}

export default Header;