import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { Tweet, TweetBody } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'

interface Props {
  setTweets: Dispatch<SetStateAction<Tweet[]>>
}
function TweetBox({ setTweets }: Props) {
  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()
  const [image, setImage] = useState<string>('')
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)
  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    if (!imageInputRef.current?.value) return
    setImage(imageInputRef.current.value)
    imageInputRef.current.value = ''
    setImageUrlBoxIsOpen(false)
  }
  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: 'kimman',
      profileImg:
        'https://pbs.twimg.com/profile_images/1585877798073208832/GuzcxI_P_400x400.jpg',
      image: image,
    }
    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: 'POST',
    })
    const json = await result.json()
    const newTweets = await fetchTweets()
    setTweets(newTweets)
    toast('Tweet Posted', {
      icon: '🚀',
    })
    return json
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    postTweet()
    setImage('')
    setInput('')
    setImageUrlBoxIsOpen(false)
  }
  return (
    <div className="flex space-x-2 p-5">
      <img
        src={
          session?.user?.image ||
          'https://pbs.twimg.com/profile_images/1585877798073208832/GuzcxI_P_400x400.jpg'
        }
        alt="me"
        className="mt-4 ml-4 h-14 w-14 rounded-full object-cover"
      />
      <div className="flex-1 items-center">
        <form className="flex-1 flex-col">
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            className="h-24 w-full  text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 text-twitter">
              <PhotographIcon
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              onClick={handleSubmit}
              // disabled={!input || !session}
              disabled={!input}
              className="mr-2 rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          {imageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
              <input
                ref={imageInputRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Enter Image URL..."
              />
              <button
                type="submit"
                onClick={addImageToTweet}
                className="font-bold text-white"
              >
                Add Image
              </button>
            </form>
          )}
          {image && (
            <img
              src={image}
              alt=""
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default TweetBox
