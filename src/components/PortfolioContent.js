import React, { Component } from 'react';
import Header from './content/Header';
import Sumary from './content/Sumary';
import ContactInfo from './content/ContactInfo';
import Profile from './Profile';

class PortfolioContent extends Component {
    render() {
        return (
            <div className="portfolio-content">
                <Header/>
                <Sumary/>
                <ContactInfo/>
                <Profile sk={this.props.skills} edu={this.props.eduList} job={this.props.jobList}/>
            </div>
        )
    }
}

export default PortfolioContent;