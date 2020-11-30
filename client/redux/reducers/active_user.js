const SET_ACTIVE_USER = 'SET_ACTIVE_USER'

const initialState = {
  activeUser: 'Discord Mod'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER: {
      return {
        ...state,
        activeUser: action.active
      }
    }
    default:
      return state
  }
}

export function setActiveUser(active) {
  return { type: SET_ACTIVE_USER, active }
}
