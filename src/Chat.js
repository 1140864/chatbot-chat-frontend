import React from 'react';

import ChatTitle from './ChatTitle';
import Messages from './Messages';
import ChatInput from './ChatInput';

import ApiRequests from './ApiRequests';
import Config from './config/Config';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {messages: []};

        this.addResponse = this.addResponse.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
        this.sendHandler = this.sendHandler.bind(this);
    }

    sendHandler(message) {
        this.addQuestion(message);

        ApiRequests.put(
            this.addResponse,
            Config.chatUrl,
            {timestamp: new Date(), messagePlatform: "WEBSITE", sentence: message}
        );
    }

    addResponse(message){

        let lineBreakMessage = message.replace('\n', '<br />');
        const text = lineBreakMessage.replace(/((https?:\/\/)|(www))([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/g, function(text, link) {
            return '<a href="http://'+ link +'">'+ link +'</a>';
        });

        const messageObject = {
            date: new Date(),
            message: text,
            fromMe: 0
        };

        let messages = this.state.messages;

        messages.push(messageObject);
        this.setState({messages});

        let self = this;

        setTimeout(function() {
            messageObject.fromMe = 1;
            messages = messages.slice(0,messages.length-1);
            console.log(messages);
            messages.push(messageObject);
            self.setState({messages});
        }, 1000 + (Math.random() * 20) * 100);
    }

    addQuestion(message) {

        const text = message.replace(/((https?:\/\/)|(www))([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/g, function(text, link) {
            return '<a href="http://'+ link +'">'+ link +'</a>';
        });

        const messageObject = {
            message: text,
            fromMe: 2
        };

        // Append the message to the component state
        const messages = this.state.messages;
        messages.push(messageObject);
        this.setState({messages});
    }

    render() {

        return (
            <div className="chat">
                    <ChatTitle/>
                    <Messages messages={this.state.messages}/>
                    <ChatInput onSend={this.sendHandler}/>
            </div>
        );
    }
}

Chat.defaultProps = {
    username: 'Anonymous'
};