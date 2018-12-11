import React, { Component } from "react";
import { Link } from "gatsby";
import Logo from '../Pictures/Logo';
import '../../layout/index.css';

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