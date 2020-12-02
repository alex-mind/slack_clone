// import Cookies from 'universal-cookie'
// import { history } from '..'

const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const LOGIN = 'LOGIN'

// const cookies = new Cookies()

const initialState = {
  login: '',
  password: '',
  // token: cookies.get('token'),
  // user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return {
        ...state,
        login: action.login
      }
    }
    case UPDATE_PASSWORD: {
      return {
        ...state,
        password: action.password
      }
    }
    case LOGIN: {
      return {
        ...state,
        password: '',
        token: action.token,
        // user: action.user
      }
    }
    default:
      return state
  }
}

export function updateLoginForm(login) {
  return { type: UPDATE_LOGIN, login }
}

export function updatePasswordForm(password) {
  return { type: UPDATE_PASSWORD, password }
}

export function signIn() {
  return (dispatch, getState) => {
    const { login, password } = getState().auth
    fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password
      })
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: LOGIN, token: data.token })
        // history.push('/private')
      })
  }
}

// export function trySignIn() {
//   return (dispatch) => {
//     fetch('/api/v1/auth')
//       .then((r) => r.json())
//       .then((data) => {
//         dispatch({ type: LOGIN, token: data.token, user: data.user })
//         history.push('/private')
//       })
//   }
// }

// export function tryGetUserInfo() {
//   return () => {
//     fetch('/api/v1/user-info')
//       .then((r) => r.json())
//       .then((data) => {
//         console.log(data)
//       })
//   }
// }
