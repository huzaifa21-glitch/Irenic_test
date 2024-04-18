import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wrapper from './Wrapper/wrapper'
import ChatGPTClone from './screens/main/chatgpt'
import Panel from './components/panel/panel'
import ChatSidebar from './components/sideBar/sideBar'
import { data } from '../src/data/dummy'

function App() {
  

  return (
    <>
    {/* <Panel></Panel> */}
    <ChatSidebar chats={data}></ChatSidebar>
   </>
  )
}

export default App
