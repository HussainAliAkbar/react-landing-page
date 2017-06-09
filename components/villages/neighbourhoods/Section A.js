import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import SectionDescription from './blocks/Section Description';
import Laptop from './blocks/houses/Laptop';

class SectionA extends React.Component {
    render() {
        return (
            <section className="section-a">
                <Container>
                    <Row>
                        <SectionDescription/>
                        <Laptop/>
                    </Row>
                </Container>
            </section>
        )
    }
}

module.exports = SectionA;