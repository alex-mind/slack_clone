import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMessage } from '../../../redux/reducers/inputMessage'
import { newMessage } from '../../../redux/reducers/channels'

const MessageInput = ({ activeChannelName }) => {
  const dispatch = useDispatch()
  const { inputMessage } = useSelector((s) => s.inputMessage)
  const { login } = useSelector((s) => s.auth)
  const onClick = () => {
    const text = inputMessage
    if (text) {
      dispatch(newMessage(activeChannelName, login, text))
      dispatch(updateMessage(''))
    }
  }
  return (
    <div className="pb-6 px-4 flex-none">
      <div className="flex rounded-lg border-2 border-orange-300 overflow-hidden">
        <span className="text-3xl text-grey-500 border-r-2 border-orange-300 p-2">
          <button type="submit" onClick={onClick}>
            <svg
              className="fill-current h-6 w-6 block hover:text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
            </svg>
          </button>
        </span>

        <input
          onChange={({ target: { value } }) => dispatch(updateMessage(value))}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              onClick()
            }
          }}
          value={inputMessage}
          type="text"
          className="w-full px-4 border border-orange-200"
          placeholder={`Message #${activeChannelName}`}
        />
      </div>
    </div>
  )
}

export default MessageInput
