import React from 'react';

class Subtitle extends React.Component {
    render() {
        return (
            <div>
                <h3 className="subtitle">
                    {this.props.subtitle}
                </h3>
            </div>
        )
    }
}

module.exports = Subtitle;