const SET_ACTIVE = 'SET_ACTIVE'

const initialState = {
  activeChannelName: 'general'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE: {
      return {
        ...state,
        activeChannelName: action.active
      }
    }
    default:
      return state
  }
}

export function setActiveChannel(active) {
  return { type: SET_ACTIVE, active }
}