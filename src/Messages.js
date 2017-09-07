import React from 'react';
import MessagesContent from './MessagesContent';


export default class Messages extends React.Component {
    render() {
        return (
            <div className="panel-body messages">
                <MessagesContent messages={this.props.messages}/>
            </div>

        );
    }
}

Messages.defaultProps = {
    messages: []
};