import React, {useState} from 'react';
import './ChatScreen.css';
import Avatar from "@material-ui/core/Avatar";

const MyComponent = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://img.gazeta.ru/files3/125/13052125/AP_20038692779480-pic4_zoom-1500x1500-18931.jpg',
            message: 'Whats up!'
        },
        {
            name: 'Ellen',
            image: 'https://img.gazeta.ru/files3/125/13052125/AP_20038692779480-pic4_zoom-1500x1500-18931.jpg',
            message: 'How it is going!'
        },
        {
            message: 'How it is going'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))
            }
            <form className="chatScreen__input">
                <input
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    className="chatScreen__inputField"
                    placeholder="type a message..."
                    value={input}
                />
                <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    );
};

export default MyComponent;
