import React, { useState } from 'react'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveChannel } from '../../../redux/reducers/active_channel'
import { joinChannel } from '../../../redux/reducers/channels'
import ChannelInput from './channel_input'

const Channels = () => {
  const dispatch = useDispatch()
  const { activeChannelName } = useSelector((s) => s.activeChannel)
  const { activeUser } = useSelector(s => s.activeUser)
  const channels = useSelector((s) => s.channels)
  const [toggled, toggle] = useState(false)

  return (
    <div className="mb-8 mt-2">
      <div className="px-4 mb-2 text-black flex justify-between items-center">
        <div className="opacity-75">Channels</div>
        <div>
          <button type="button" onClick={() => toggle(!toggled)}>
            <svg
              className="fill-current h-4 w-4 opacity-50 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
            </svg>
          </button>
        </div>
      </div>
      {Object.keys(channels).map((channel) => {
        return (
          <div
            key={channel}
            className={cn('text-black py-1 px-4 hover:bg-orange-600 cursor-pointer', {
              'bg-orange-700 hover:bg-orange-700 text-white': activeChannelName === channel
            })}
            role="presentation"
            onClick={() => {
              dispatch(setActiveChannel(channel))
              dispatch(joinChannel(channel, activeUser))
            }}
          >
            # {channel}
          </div>
        )
      })}
      {toggled && <ChannelInput toggle={toggle} toggled={toggled} />}
    </div>
  )
}

export default Channels
