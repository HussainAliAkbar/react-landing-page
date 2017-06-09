import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import UserMessage from './houses/UserMessage';
import ChatBotMessage from './houses/ChatBotMessage';


class SlackChannel extends React.Component {
    render() {
        const messages = this.props.messages;
        return (
            <Col lg={12}>
                <img className="slack-channel" src="./images/Slack Channel.svg" />
                {messages ? (
                    //render messages if the message prop is true i.e. we are on demo page
                    <div><UserMessage/><ChatBotMessage/></div>
                ) : (
                    //do not render the messages if we are on the landing page
                    <div></div>
                )}
            </Col>
        )
    }
}

module.exports = SlackChannel;