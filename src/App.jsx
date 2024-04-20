import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wrapper from './Wrapper/wrapper'
import ChatGPTClone from './screens/main/chatgpt'
import Panel from './components/panel/panel'
import ChatSidebar from './components/sideBar/sideBar'
import { data } from '../src/data/dummy'
import ChatPanel from './components/text-panel/ChatPanel'
import Main from './screens/main/chatgpt'

function App() {
  

  return (
    <>
       {/* <Panel></Panel> */}
       {/* <ChatSidebar chats={data}></ChatSidebar>  */}
       {/* <ChatPanel data={data} conversationIndex={4}></ChatPanel> */}
   <Main></Main>
   </>
  )
}

export default App
