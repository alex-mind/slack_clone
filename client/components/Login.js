import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import { updateLoginForm, updatePasswordForm, signIn } from '../redux/reducers/auth'

const Login = () => {
  const dispatch = useDispatch()
  const { login, password } = useSelector((s) => s.auth)
  return (
    <div className="w-full h-screen flex ">
      <img
        src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="background"
        className="object-cover object-center h-screen w-7/12"
      />
      <div className="bg-orange-300 flex flex-col justify-center items-center w-5/12 shadow-lg">
        <h1 className="text-3xl font-bold text-orange-500 mb-2">LOGIN</h1>
        <div className="w-1/2 text-center">
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
              value={login}
              className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400"
              placeholder="Your awesome username"
              onChange={({ target: { value } }) => dispatch(updateLoginForm(value))}
            />
          </div>
          <div className="flex flex-col mb-6 my-4">
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
                value={password}
                className={cn(
                  'text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400'
                )}
                placeholder="New password"
                onChange={({ target: { value } }) => {
                  dispatch(updatePasswordForm(value))
                }}
              />
            </div>
          </div>
          <div className="flex w-full">
            <button
              onClick={() => dispatch(signIn())}
              type="button"
              className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-orange-500 hover:bg-orange-600 rounded py-2 w-full transition duration-150 ease-in"
            >
              <span className="mr-2 uppercase">Login</span>
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
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/registration"
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
            <span className="ml-2">You don&apos;t have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
