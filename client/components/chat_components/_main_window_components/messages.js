import React from 'react'
import { useSelector } from 'react-redux'

const Messages = ({ activeChannelName }) => {
  const channel = useSelector((s) => s.channels[activeChannelName])
  return (
    <div className="px-6 py-4 flex-1 overflow-y-scroll">
      {channel.listOfMessages &&
        channel.listOfMessages.map((message) => {
          return (
            <div key={message.messageId} className="flex items-start mb-4 text-sm">
              <img
                src={`https://picsum.photos/id/${message.userName.length + 100}/200/300`}
                alt="huy"
                className="w-10 h-10 rounded mr-3"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="font-bold mr-1">{message.userName}</span>
                  <span className="text-grey-500 text-xs">{message.time}</span>
                </div>
                <p className="text-black leading-normal">{message.text}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Messages
