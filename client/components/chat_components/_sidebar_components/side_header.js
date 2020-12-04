import React from 'react'
import { useSelector } from 'react-redux'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'

const SidebarHeader = () => {
  const { login } = useSelector(s => s.auth)
  return (
    <div className="text-black mb-2 mt-3 px-4 flex justify-between">
      <div className="flex-auto">
        <h1 className="font-semibold text-2xl font-serif leading-tight mb-1 truncate">
          Slack clone
        </h1>
        <div className="flex items-center mb-6">
          <span className="bg-green-700 rounded-full block w-2 h-2 mr-2" />
          <span className="text-black opacity-60 text-sm">{login}</span>
        </div>
      </div>
      <QuestionAnswerIcon />
      {/* <div>
        <svg className="h-6 w-6 fill-current text-black opacity-25" viewBox="0 0 20 20">
          <path
            d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
            fillRule="evenodd"
          />
        </svg>
      </div> */}
    </div>
  )
}

export default SidebarHeader