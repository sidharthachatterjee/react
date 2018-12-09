import React, { Component } from "react";
import Header from "../components/Header/Header";
import FooterCentral from "../components/Section/Footer";
import Four from "../components/Section/Four";
import Hero from "../components/Section/Hero";
import One from "../components/Section/One";
import Three from "../components/Section/Three";
import Two from "../components/Section/Two";

/*TODO
 *  
 *  SEO/BACKEND (4)
 *  add react-helmet
 *  clean classes className
 *  add correct links/mailto
 *  host on en.lobstr.io
 *  add https certificate
 * 
 *  MAIL/ACQUISITION (4)
 *  add contact@lobstr.io to ovh (wait gor ovh answer)
 *  connect freshdesk to the mail
 *  add intercom trial
 *  add google analytics
 *  connect 50€ adwords to the website
 *  
 *  FRONTEND (8)
 *  add two big animations front-page
 *  animate three small icons
 *  add last section icon
 * 
 */ 

class Index extends Component {
    render() {
        return(
            <div>
                <Header />
                <Hero />
                <One />
                <Two />
                <Three />
                <Four />
                <FooterCentral />
            </div>
        )
    }
}

export default Index
