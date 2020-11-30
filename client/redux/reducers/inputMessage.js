const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

const initialState = {
  inputMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE: {
      return {
        ...state,
        inputMessage: action.message
      }
    }
    default:
      return state
  }
}

export function updateMessage(message) {
  return { type: UPDATE_MESSAGE, message }
}