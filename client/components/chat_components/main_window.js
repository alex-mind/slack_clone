import React from 'react'
import { useSelector } from 'react-redux'
import Header from './_main_window_components/header'
import MessageInput from './_main_window_components/messageInput'
import Messages from './_main_window_components/messages'

const MainWindow = () => {
  const { activeChannelName } = useSelector((s) => s.activeChannel)
  return (
    <>
      {activeChannelName && (
        <div className="flex-1 flex flex-col bg-orange-200 overflow-hidden">
          <Header activeChannelName={activeChannelName} />
          <Messages activeChannelName={activeChannelName} />
          <MessageInput activeChannelName={activeChannelName} />
        </div>
      )}
    </>
  )
}

export default MainWindow
