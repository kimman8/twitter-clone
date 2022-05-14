import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className="col-span-2 mt-2 hidden px-2 lg:inline">
      <div className="mt-2 flex items-center space-x-4 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 cursor-pointer text-gray-400" />
        {/* inputs by default have a white bg so thats why we explicity give it a bg-transparent */}
        {/* outline-none gets ride of the blue outline  */}
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="kim_man"
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widgets
