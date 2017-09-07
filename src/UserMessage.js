import React from 'react';

export default class UserMessage extends React.Component {
    render() {
        return (
            <div className={`message from-me`}>
                <div className='message-body'>
                    { this.props.message }
                </div>
                <div className="timestamp">
                    { this.props.date.getHours() + ':' + (this.props.date.getMinutes()<10?'0':'') + this.props.date.getMinutes() }
                </div>
            </div>
        );
    }
}

UserMessage.defaultProps = {
    date : new Date(),
    message: '',
    username: '',
};
