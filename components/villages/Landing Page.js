import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Column} from 'react-grid-system';
import Header from './neighbourhoods/Header';
import SectionA from './neighbourhoods/Section A';
import SectionB from './neighbourhoods/Section B';
import SectionC from './neighbourhoods/Section C';


class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <Header messages={false} title="Developer Bot for Slack" subtitle="One article to one random person in your Slack group. Once a day."/>
                <SectionA/>
                <SectionB/>
                <SectionC title="Developer Bot for Slack" subtitle="One article to one random person in your Slack group. Once a day."/>
            </div>
        )
    }
}

module.exports = LandingPage;
