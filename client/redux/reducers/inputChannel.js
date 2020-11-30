const UPDATE_CHANNEL = 'UPDATE_CHANNEL'

const initialState = {
  inputChannel: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHANNEL: {
      return {
        ...state,
        inputChannel: action.channel
      }
    }
    default:
      return state
  }
}

export function updateChannel(channel) {
  return { type: UPDATE_CHANNEL, channel }
}
