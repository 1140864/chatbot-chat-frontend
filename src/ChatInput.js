import React from 'react';

export default class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chatInput: '' };

        // React ES6 does not bind 'this' to event handlers by default
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.clickHandler= this.clickHandler.bind(this);
    }

    clickHandler(event){
        // Stop the form from refreshing the page on submit
        event.preventDefault();

        // Call the onSend callback with the chatInput message
        this.props.onSend(this.state.chatInput);

        // Clear the input box
        this.setState({ chatInput: '' });
    }

    textChangeHandler(event)  {
        this.setState({ chatInput: event.target.value });
    }

    render() {
        return (
            <div className="panel-footer">
                <form className="chat-input">
                    <input type="text"
                           onChange={this.textChangeHandler}
                           className="message-input"
                           value={this.state.chatInput}
                           placeholder="Escreva aqui a sua mensagem..."
                           required />
                    <input id="send" value="Enviar" type="submit" className="message-submit"onClick={this.clickHandler}/>
                </form>
            </div>
        );
    }
}

ChatInput.defaultProps = {
};