import React from 'react';
import logo from './img/chatbot-avatar.png';

export default class ChatTitle extends React.Component {

    constructor() {
        super();
        this.name= "Vody";
        this.company = "Vodafone";
    }

    render() {
        return (
            <div className="panel-heading chat-title">
                <figure className="avatar"  >
                    <img alt='voda-logo' src={logo} /></figure>
                <div className="titles">
                    <h1  >{this.name}</h1>
                    <h2  >{this.company}</h2>
                </div>
            </div>
        );
    }
}