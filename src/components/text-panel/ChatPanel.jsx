import React, { useState, useEffect, useRef } from 'react';
import './ChatPanel.css';
import SearchIcon from '../../assets/gpt-svgs/Search-Icon.svg';
import MenuIcon from '../../assets/gpt-svgs/kebMenu.svg';
import MagicIcon from '../../assets/gpt-svgs/magicIcon.svg';
import sendIcon from '../../assets/gpt-svgs/SendIcon.svg';
import MicIcon from '../../assets/gpt-svgs/mic.svg'

import ResponseIcon from '../../assets/gpt-svgs/GenerateRes.svg';
import CopyIcon from '../../assets/gpt-svgs/Copy.svg';
import SaveIcon from '../../assets/gpt-svgs/Save.svg';
import GoodActive from '../../assets/gpt-svgs/feedback/GoodActive.svg';
import BadActive from '../../assets/gpt-svgs/feedback/BadActive.svg';
import GoodInactive from '../../assets/gpt-svgs/feedback/good-Inactive.svg';
import BadInactive from '../../assets/gpt-svgs/feedback/bad-Inactive.svg';

import GptSvg from '../../assets/gpt-svgs/Logo-green.svg';
import { user } from '../../data/dummy';
import Model from '../Modal/Modal';
import '../Modal/Modal.css';

const ChatPanel = ({ data, conversationIndex }) => {
  const conversation = data.conversations[conversationIndex];
  const [conversation1, setConversation] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(Array(conversation.conversation.length).fill(null));
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

  const toggleFeedbackIcon = (messageIndex, icon) => {
    setSelectedIcon((prevIcons) => {
      const updatedIcons = { ...prevIcons };
      updatedIcons[messageIndex] = icon;
      return updatedIcons;
    });
  };


  const openModal = () => {
    setIsModalOpen(true);
    const chatPanel = document.querySelector('.chat-panel');
    const chatSidebar = document.querySelector('.chat-sidebar');
    chatPanel.classList.add('blur-background');
    chatSidebar.classList.add('blur-background');
    chatPanel.setAttribute('disabled', true);
    chatSidebar.setAttribute('disabled', true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    const chatPanel = document.querySelector('.chat-panel');
    const chatSidebar = document.querySelector('.chat-sidebar');
    chatPanel.classList.remove('blur-background');
    chatSidebar.classList.remove('blur-background');
    chatPanel.removeAttribute('disabled');
    chatSidebar.removeAttribute('disabled');
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
            <div className='chatbox'>
              <div className='scrollbox' ref={chatboxRef}>
                {conversation.conversation.map((message, messageIndex) => (
                  <div key={messageIndex} className={`message ${messageIndex % 2 === 0 ? 'prompt' : 'response'}`}>
                    <div className={`message-content ${messageIndex % 2 !== 0 ? 'res-main' : ''}`}>
                      <img src={messageIndex % 2 === 0 ? user.photo : GptSvg} alt={messageIndex % 2 === 0 ? 'prompt' : 'response'} className="avatar" />
                      <p className={messageIndex % 2 === 0 ? "prompt-text" : "response-text"}>{messageIndex % 2 === 0 ? message.prompt : message.response}</p>
                      {messageIndex % 2 !== 0 && (
                        <div className="response-icons">
                          <div className='icon-left'>
                            <img
                              src={selectedIcon[messageIndex] === 'good' ? GoodActive : GoodInactive}
                              alt="Good Icon"
                              onClick={() => toggleFeedbackIcon(messageIndex, 'good')}
                            />
                            <img
                              src={selectedIcon[messageIndex] === 'bad' ? BadActive : BadInactive}
                              alt="Bad Icon"
                              onClick={() => toggleFeedbackIcon(messageIndex, 'bad')}
                            />

                          </div>
                          <div className='icon-right'>
                            <img src={ResponseIcon} alt="Response Icon" />
                            <img src={CopyIcon} alt="Copy Icon" />
                            <img src={SaveIcon} alt="Save Icon" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="input-container">
                <form className='textbox' onSubmit={handleSubmit}>
                  <img src={MagicIcon} alt="Magic Icon" className="send-icon" onClick={openModal} />
                  <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Ask questions, or type ‘/’ for commands"
                    className="user-input"
                  />
                  <img src={sendIcon} alt="Send Icon" className="send-icon" onClick={handleSubmit} />
                </form>
                <div className='mic-div'>
                  <img src={MicIcon} alt="Mic Icon" className="mic-icon" />
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
