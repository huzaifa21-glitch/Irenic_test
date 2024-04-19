import React, { useState } from 'react';
import './sideBar.css'; // You can style this component in a separate CSS file
import ChatIcon from '../../assets/gpt-svgs/add.svg';
import SearchIcon from '../../assets/gpt-svgs/search.svg';
import FilterIcon from '../../assets/gpt-svgs/Filter.svg';
import MenuIcon from '../../assets/gpt-svgs/kebMenu.svg';
import MyChatsIcon from '../../assets/gpt-svgs/chat-small.svg';
import SavedChatsIcon from '../../assets/gpt-svgs/saved.svg';
import GPTIcon from '../../assets/gpt-svgs/gpt-small.svg';

const ChatSidebar = ({ chats, onChatSelect, selectedChatIndex }) => {
    console.log(chats);
    const [selectedTab, setSelectedTab] = useState('myChats');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredChats, setFilteredChats] = useState(chats.conversations);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = chats.conversations.filter(chat =>
            chat.heading.toLowerCase().includes(term)
        );
        setFilteredChats(filtered);
    };

    const handleChatSelect = (index) => {
        onChatSelect(index);
    };


    return (
        <div className="chat-sidebar">
            <div className="header">
                <div className='title'>
                    <h2 className="heading">My Chats</h2>
                </div>
                <div className='icons'>
                    <img src={ChatIcon} alt="Chat Icon" className="chat-icon" />
                    <img src={MenuIcon} alt="Chat Icon" className="chat-icon" />
                </div>
            </div>
            <div className="tabs">
                <button
                    className={`tab-button ${selectedTab === 'myChats' ? 'active' : ''}`}
                    onClick={() => handleTabClick('myChats')}
                >
                    <img src={MyChatsIcon} alt="My Chats Icon" className="tab-icon2" />
                    Chats
                </button>
                <button
                    className={`tab-button ${selectedTab === 'savedChats' ? 'active' : ''}`}
                    onClick={() => handleTabClick('savedChats')}
                >
                    <img src={SavedChatsIcon} alt="Saved Chats Icon" className="tab-icon" />
                    Saved
                </button>
            </div>

            {/* Search Bar */}
            <div className='search-container'>
                <div class="group">
                    <img src={SearchIcon} alt="search Icon" className="search-icon" />
                    <input placeholder="Search" onChange={handleSearch} type="search" class="input"></input>
                </div>
                <img src={FilterIcon} alt="Filter Icon" className="filter-icon" />
            </div>
            {/* Title Flatlist */}
            <div className="chat-list">
                {filteredChats.map((chat, index) => (
                    <div
                        key={index}
                        className={`chat-item ${selectedChatIndex === index ? 'selected' : ''}`}
                        onClick={() => handleChatSelect(index)}

                    >

                        <div className="text">
                            <div className="heading-time">
                                <h3 className="heading">{chat.heading}</h3>
                                <p className="time">{chat.time}</p>
                            </div>
                            <p className="subheading truncate">{chat.conversation[0].prompt}</p>
                        </div>


                    </div>
                ))}
            </div>


        </div>
    );
}

export default ChatSidebar;
