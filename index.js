import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LandingPage from './components/villages/Landing Page';
import Demo from './components/villages/Demo';
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/demo" component={Demo}/>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);