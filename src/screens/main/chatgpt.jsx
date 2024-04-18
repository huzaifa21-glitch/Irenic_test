import React, { useState } from 'react';
import './chatgpt.css'; // You can style this component in a separate CSS file

const ChatGPTClone = () => {
  // Dummy data for chats
  const [chats, setChats] = useState([
    { id: 1, title: "Chat 1", messages: [] },
    { id: 2, title: "Chat 2", messages: [] },
    { id: 3, title: "Chat 3", messages: [] }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  
  // Function to filter chats based on search term
  const filteredChats = chats.filter(chat => chat.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="chatgpt-clone-container">
      <div className="sidebar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search chats..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul className="chat-list">
          {filteredChats.map(chat => (
            <li key={chat.id}>{chat.title}</li>
          ))}
        </ul>
      </div>
      <div className="chat-container">
        {/* Render chat component here based on selected chat */}
      </div>
    </div>
  );
}

export default ChatGPTClone;
