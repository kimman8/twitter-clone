import React, { useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'

function TweetBox() {
  const [input, setinput] = useState<string>('')
  return (
    <div className="flex space-x-2 p-5">
      <img
        src="https://d2oezb05uoa2c1.cloudfront.net/p/potqj2ww84g44s0g.jpg"
        alt="me"
        className="mt-4 ml-4 h-14 w-14 rounded-full object-cover"
      />
      <div className="flex-1 items-center">
        <form className="flex-1 flex-col">
          <input
            value={input}
            type="text"
            onChange={(e) => setinput(e.target.value)}
            placeholder="What's happening?"
            className="h-24 w-full  text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!input}
              className="mr-2 rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
