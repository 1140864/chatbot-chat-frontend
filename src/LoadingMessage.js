import React from 'react';

import logo from './img/chatbot-avatar.png';

export default class LoadingMessage extends React.Component {
    render() {
        return (
            <div className="message loading">
                <figure className="avatar">
                    <img alt='voda-logo' src={logo} />
                </figure>
                <span></span>
            </div>
        );
    }
}

LoadingMessage.defaultProps = {
    message: '',
    username: '',
};