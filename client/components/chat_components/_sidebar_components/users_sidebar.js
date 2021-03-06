import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
  const { activeChannelName } = useSelector((s) => s.activeChannel)
  const login = useSelector((s) => s.auth.login)
  const channel = useSelector((s) => s.channels[activeChannelName])
  const users = channel ? channel.listOfUsers : []
  return (
    <>
      {activeChannelName && (
        <div className="mb-8">
          <div className="px-4 mb-2 flex text-black justify-between items-center">
            <div className="opacity-75">
              Users in <span className="font-bold text-black">#{activeChannelName}</span>
            </div>
          </div>

          <div className="flex items-center mb-3 px-4">
            <span className="bg-green-700 rounded-full block w-2 h-2 mr-2" />
            <span className="text-black opacity-75">{login} (you)</span>
          </div>
          {users.map((user) => {
            if (user !== login) {
              return (
                <div key={user} className="flex items-center mb-3 px-4">
                  <span className="bg-green-700 rounded-full block w-2 h-2 mr-2" />
                  <span className="text-black opacity-75">{user}</span>
                </div>
              )
            }
            return <></>
          })}
          {/* <div className="flex items-center mb-3 px-4">
            <span className="bg-green-700 rounded-full block w-2 h-2 mr-2" />
            <span className="text-black opacity-75">
              Artem Malysh <span className="text-grey-500 text-sm">(admin)</span>
            </span>
          </div>
          <div className="flex items-center mb-3 px-4">
            <span className="bg-green-700 rounded-full block w-2 h-2 mr-2" />
            <span className="text-black opacity-75">David Hemphill</span>
          </div>
          <div className="flex items-center px-4 mb-6">
            <span className="border border-black rounded-full w-2 h-2 mr-2" />
            <span className="text-black opacity-50">Steve Schoger</span>
          </div> */}
        </div>
      )}
    </>
  )
}

export default Users
