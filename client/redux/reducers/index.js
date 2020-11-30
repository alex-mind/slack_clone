import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import channels from './channels'
import activeChannel from './active_channel'
import activeUser from './active_user'
import inputMessage from './inputMessage'
import inputChannel from './inputChannel'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    channels,
    activeChannel,
    inputMessage,
    activeUser,
    inputChannel
  })

export default createRootReducer
