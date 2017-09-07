import React from 'react';

import logo from './img/chatbot-avatar.png';

export default class BotMessage extends React.Component {
    render() {
        //TODO Resolve dangerouslySetInnerHTML in another way
        return (
            <div className={`message`}>
                <figure className="avatar"><img alt='voda-logo' src={logo} /></figure>
                <div className='message-body' >
                    <div dangerouslySetInnerHTML={{__html: this.props.message}} />
                </div>
                <div className="timestamp">
                    { this.props.date.getHours() + ':' + (this.props.date.getMinutes()<10?'0':'') + this.props.date.getMinutes() }
                </div>
            </div>
        );
    }
}

BotMessage.defaultProps = {
    date : new Date(),
    message: '',
    username: '',
    link: 'https://www.vodafone.pt/',
};