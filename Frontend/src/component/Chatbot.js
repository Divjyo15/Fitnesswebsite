
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Optional: Add custom styles

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [quickReplies, setQuickReplies] = useState([]);  // For storing quick replies

  const sendMessage = async (message = input) => {
    if (!message.trim()) return;

    // Add the user message to the chat
    setMessages(prevMessages => [...prevMessages, { sender: 'User', text: message }]);
    setQuickReplies([]); // Clear previous quick replies

    try {
      // Send the message to your backend connected to Dialogflow
      const response = await axios.post('http://localhost:4000/api/chat', { message });
      const botResponse = response.data.reply;
      const replies = response.data.quickReplies || [];  // Extract quick replies if present

      // Add the bot's response to the chat
      setMessages(prevMessages => [...prevMessages, { sender: 'Bot', text: botResponse }]);
      setQuickReplies(replies); // Set new quick replies
    } catch (error) {
      console.error('Error communicating with the chatbot:', error);
    }

    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'User' ? 'user' : 'bot'}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
        {/* Display Quick Replies */}
        {quickReplies.length > 0 && (
          <div className="quick-replies">
            {quickReplies.map((reply, index) => (
              <button key={index} onClick={() => sendMessage(reply)}>
                {reply}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
