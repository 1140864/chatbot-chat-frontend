import React from 'react';
import BotMessage from './BotMessage';
import LoadingMessage from './LoadingMessage';
import UserMessage from './UserMessage';


export default class MessagesContent extends React.Component {
    componentDidUpdate() {
        // There is a new message in the state, scroll to bottom of list
        const objDiv = document.getElementById('messageList');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render() {
        // Loop through all the messages in the state and create a Message component
        const messages = this.props.messages.map((message, i) => {

            if (message.fromMe === 0) {
                return <LoadingMessage
                    key={i}
                />;
            }
            if (message.fromMe === 1) {
                return <BotMessage
                    key={i}
                    username={message.username}
                    message={message.message}
                    fromMe={message.fromMe}
                />
            }
            if (message.fromMe === 2) {
                return <UserMessage
                    key={i}
                    username={message.username}
                    message={message.message}
                    fromMe={message.fromMe}/>;
            }
            return null;
        });

        return (
            <div className='messages-content' id='messageList'>
                { messages }
            </div>
        );
    }
}

MessagesContent.defaultProps = {
    messages: []
};