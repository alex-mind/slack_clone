import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveChannel } from '../../../redux/reducers/active_channel'
import { leaveChannel } from '../../../redux/reducers/channels'

const Header = ({ activeChannelName }) => {
  const dispatch = useDispatch()
  const { activeUser } = useSelector(s => s.activeUser)
  const onClick = () => {
    dispatch(leaveChannel(activeChannelName, activeUser))
    dispatch(setActiveChannel(''))
  }
  return (
    <div className="border-b border-orange-500 flex px-6 py-2 items-center flex-none">
      <div className="flex flex-col">
        <h3 className="text-grey-900 mb-1 text-xl font-extrabold">#{activeChannelName}</h3>
        <div className="text-grey-700 text-sm truncate">
          Chit-chattin&apos; about memes and life.
        </div>
      </div>
      <div className="ml-auto hidden md:block">
        <div className="relative">
          <button
            onClick={onClick}
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2  border rounded-full"
          >
            Leave channel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header