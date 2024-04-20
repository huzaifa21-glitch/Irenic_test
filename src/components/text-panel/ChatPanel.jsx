import React, { useState, useEffect,useRef } from 'react';
import './ChatPanel.css'; 
import SearchIcon from '../../assets/gpt-svgs/Search-Icon.svg';
import MenuIcon from '../../assets/gpt-svgs/kebMenu.svg';
import MagicIcon from '../../assets/gpt-svgs/magicIcon.svg';
import sendIcon from '../../assets/gpt-svgs/SendIcon.svg';
import MicIcon from '../../assets/gpt-svgs/mic.svg'

import GptSvg from '../../assets/gpt-svgs/Logo-green.svg';
import { user } from '../../data/dummy';
import Model from '../Modal/Modal';
import'../Modal/Modal.css';

const ChatPanel = ({ data, conversationIndex }) => {
  const conversation = data.conversations[conversationIndex];
  const [conversation1, setConversation] = useState([]); 
  const [userInput, setUserInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chatboxRef = useRef(null);
  useEffect(() => {
   
    setConversation(data.conversations[0].conversation);
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, []); 

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      console.log(userInput);
    }
    setUserInput(''); 
  };

  

  
  const openModal = () => {
    console.log("modal open");
    setIsModalOpen(true);
    document.querySelector('.chat-panel').classList.add('blur-background');
    document.querySelector('.chat-sidebar').classList.add('blur-background');

  };

 
  const closeModal = () => {
    setIsModalOpen(false);
    document.querySelector('.chat-panel').classList.remove('blur-background');
    document.querySelector('.chat-sidebar').classList.remove('blur-background');
  };

  return (
    <>
    <div className="chat-panel">
      <div className='main'>
        <div className='header'>
          <h2 className="heading">{conversation.heading}</h2>
          <div className="svg-container">
            <img src={SearchIcon} alt="search Icon" className="header-icon" />
            <img src={MenuIcon} alt="search Icon" className="header-icon" />
          </div>
        </div>
        <div className='box'>
          <div className='chatbox' ref={chatboxRef}>
            {conversation.conversation.map((message, messageIndex) => (
              <div key={messageIndex} className={`message ${messageIndex % 2 === 0 ? 'prompt' : 'response'}`}>
                <img src={messageIndex % 2 === 0 ? user.photo : GptSvg} alt={messageIndex % 2 === 0 ? 'prompt' : 'response'} className="avatar" />
                <p className={messageIndex % 2 === 0 ? "prompt-text" : "response-text"}>{messageIndex % 2 === 0 ? message.prompt : message.response}</p>
              </div>
            ))}
            <div className="input-container">
              <form className='textbox' onSubmit={handleSubmit}>
                <img src={MagicIcon} alt="search Icon" className="send-icon"  onClick={openModal}/>
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="user-input"
                />
                <img src={sendIcon} alt="search Icon" className="send-icon" />
              </form>
              <div className='mic-div'>
                <img src={MicIcon} alt="search Icon" className="mic-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    <Model isOpen={isModalOpen} closeModal={closeModal} />
    </div>
    </>
  );
};

export default ChatPanel;
