import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
import {useSession, signOut, signIn} from 'next-auth/react'

function Sidebar() {
  const {data: session} = useSession()
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start ">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Explore" Icon={HashtagIcon} />
      <SidebarRow title="Notifications" Icon={BellIcon} />
      <SidebarRow title="Messages" Icon={MailIcon} />
      <SidebarRow title="Bookmarks" Icon={BookmarkIcon} />
      <SidebarRow title="Lists" Icon={CollectionIcon} />
      <SidebarRow title={session ? 'Sign Out' : 'Sign In'} onClick={session ? signOut : signIn} Icon={UserIcon} />
      <SidebarRow title="More" Icon={DotsCircleHorizontalIcon} />
    </div>
  )
}

export default Sidebar
