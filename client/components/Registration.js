import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'
import { updatePasswordForm, updateLoginForm } from '../redux/reducers/auth'
import { history } from '../redux'

const Registration = () => {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [samePass, setSamePass] = useState(true)

  const { login } = useSelector((s) => s.auth)

  const register = () => {
    console.log('asld')
    fetch('/api/v1/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password
      })
    })
    dispatch(updatePasswordForm(''))
    setPassword('')

    history.push('/')
  }

  const onClick = () => {
    if (password === passwordCheck) {
      dispatch(updatePasswordForm(password))
      setSamePass(true)
      register()
    } else {
      setSamePass(false)
    }
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css"
      />

      <div className="min-h-screen flex flex-col items-center justify-center bg-orange-300">
        <div className="flex flex-col bg-orange-200 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-2xl sm:text-2xl uppercase text-orange-700">
            Create an Account
          </div>
          <div className="mt-10">
            <form action="#">
              <div className="flex flex-col mb-6">
                <label
                  forHTML="username"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  How do you want to be called:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    id="username"
                    type="username"
                    name="username"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400"
                    placeholder="New awesome username"
                    onChange={({ target: { value } }) => dispatch(updateLoginForm(value))}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  forHTML="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Your cool password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    className={cn(
                      'text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400',
                      {
                        'border-red-400 focus:border-orange-400': !samePass
                      }
                    )}
                    placeholder="New password"
                    onChange={({ target: { value } }) => {
                      setPassword(value)
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  forHTML="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Repeat your cool password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    onChange={({ target: { value } }) => {
                      setPasswordCheck(value)
                    }}
                    id="password"
                    type="password"
                    name="password"
                    className={cn(
                      'text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400',
                      {
                        'border-red-400 focus:border-orange-400': !samePass
                      }
                    )}
                    placeholder="Repeat password"
                  />
                </div>
                {!samePass && (
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Passwords don&apos;t match !
                  </span>
                )}
              </div>

              <div className="flex w-full">
                <button
                  type="button"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-orange-500 hover:bg-orange-600 rounded py-2 w-full transition duration-150 ease-in"
                  onClick={onClick}
                >
                  <span className="mr-2 uppercase">Register</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/"
              className="inline-flex items-center font-bold text-orange-500 hover:text-orange-700 text-xs text-center"
            >
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span className="ml-2">You already have an account?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Registration)
