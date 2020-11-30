import React from 'react'
import Channels from './_sidebar_components/channels'
import SidebarHeader from './_sidebar_components/side_header'
import Users from './_sidebar_components/users_sidebar'

const Sidebar = () => {
  return (
    <div className="bg-orange-500 text-purple-200 flex-none w-64 pb-6 hidden md:block overflow-y-scroll">
      <SidebarHeader />
      <Channels />
      <Users />
    </div>
  )
}

export default Sidebar