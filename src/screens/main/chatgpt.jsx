import React from 'react';
import './chatgpt.css'; 
import Panel from '../../components/panel/panel';
import ChatSidebar from '../../components/sideBar/sideBar';
import ChatPanel from '../../components/text-panel/ChatPanel';
import { data } from '../../data/dummy'

const Main = () => {
  return (
    <div className="container">
      <div className="component1">
       <Panel></Panel>
      </div>
      <div className="component2">
      <ChatSidebar chats={data}></ChatSidebar> 
      </div>
      <div className="component3">
      <ChatPanel data={data} conversationIndex={1}></ChatPanel>
      </div>
    </div>
  );
};

export default Main;
