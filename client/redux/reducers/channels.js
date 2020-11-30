const NEW_CHANNEL = 'NEW_CHAnNEL'
const JOIN_CHANNEL = 'JOIN_CHANNEL'
const LEAVE_CHANNEL = 'LEAVE_CHANNEL'
const NEW_MESSAGE = 'NEW_MESSAGE'

const initialState = {
  general: {
    listOfUsers: ['Artem Malysh'],
    listOfMessages: [
      {
        userName: 'Artem Malysh',
        messageId: 0,
        text: 'Hello! Welcome to my pet project =)',
        time: '04:20',
        meta: {}
      }
    ]
  },
  porn: {
    listOfUsers: ['Discord Mod'],
    listOfMessages: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_CHANNEL: {
      return {
        ...state,
        [action.channel]: {
          listOfUsers: [],
          listOfMessages: []
        }
      }
    }
    case JOIN_CHANNEL: {
      return {
        ...state,
        [action.channel]: {
          ...state[action.channel],
          listOfUsers: state[action.channel].listOfUsers.indexOf(action.user) >= 0
            ? state[action.channel].listOfUsers
            : [...state[action.channel].listOfUsers, action.user]
        }
      }
    }
    case LEAVE_CHANNEL: {
      const newState = state
      const newListOfUsers = newState[action.channel].listOfUsers.filter(
        (user) => user !== action.user
      )
      return {
        ...newState,
        [action.channel]: {
          ...newState[action.channel],
          listOfUsers: newListOfUsers
        }
      }
    }
    case NEW_MESSAGE: {
      return {
        ...state,
        [action.channel]: {
          ...state[action.channel],
          listOfMessages: [
            ...state[action.channel].listOfMessages,
            {
              userName: action.user,
              messageId: state[action.channel].listOfMessages.length,
              text: action.text,
              time: `${new Date().getHours()}:${new Date().getMinutes()}`,
              meta: {}
            }
          ]
        }
      }
    }
    default:
      return state
  }
}

export function addChannel(channel, user) {
  return { type: NEW_CHANNEL, channel, user }
}

export function newMessage(channel, user, text) {
  return { type: NEW_MESSAGE, channel, user, text }
}

export function leaveChannel(channel, user) {
  return { type: LEAVE_CHANNEL, channel, user }
}

export function joinChannel(channel, user) {
  return { type: JOIN_CHANNEL, channel, user }
}
