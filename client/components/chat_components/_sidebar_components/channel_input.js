import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChannel, joinChannel } from '../../../redux/reducers/channels'
import { setActiveChannel } from '../../../redux/reducers/active_channel'
import { updateChannel } from '../../../redux/reducers/inputChannel'

const ChannelInput = ({ toggle, toggled }) => {
  const dispatch = useDispatch()
  const { inputChannel } = useSelector((s) => s.inputChannel)
  const { activeUser } = useSelector((s) => s.activeUser)
  const onClick = () => {
    if (inputChannel) {
      const channel = inputChannel.toString()
      dispatch(addChannel(channel, activeUser))
      dispatch(joinChannel(channel, activeUser))
      dispatch(setActiveChannel(channel))
      dispatch(updateChannel(''))
      toggle(!toggled)
    }
  }
  
  const inputRef = useRef(null)
  useEffect(() => {
    if (toggled) {
      inputRef.current.focus()
    }
  }, [toggled])

  return (
    <div className="px-4 flex-none">
      <div className="flex rounded-lg border border-orange-700 overflow-hidden">
        <input
          ref={inputRef}
          onChange={({ target: { value } }) => dispatch(updateChannel(value))}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              onClick()
            }
          }}
          value={inputChannel}
          type="text"
          className="w-full px-2 text-black"
          placeholder="New channel"
        />

        <span className="text-black border-l-2 border-orange-700 ">
          <button type="submit" onClick={onClick}>
            <svg
              className="fill-current h-4 w-4 block hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
            </svg>
          </button>
        </span>
      </div>
    </div>
  )
}

export default ChannelInput
