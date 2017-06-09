import React from 'react';
import ReactDOM from 'react-dom';
import Header from './neighbourhoods/Header';
import Footer from './neighbourhoods/Footer';
class Demo extends React.Component {
    render() {
        return (
            <div className="demo">
                <Header messages={true} title="Chat Bot Demo" subtitle="What how it works"/>
                <Footer/>
            </div>
        )
    }
}
module.exports = Demo;