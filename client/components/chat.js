import React from 'react'
import Sidebar from './chat_components/sidebar'
import MainWindow from './chat_components/main_window'

const Chat = () => {
  return (
    <div className="font-sans antialiased h-screen flex">
      <Sidebar />
      <MainWindow />
    </div>
  )
}

Chat.propTypes = {}

export default React.memo(Chat)
