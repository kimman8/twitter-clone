import React, { useState, useEffect } from 'react'
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'
import TimeAgo from 'react-timeago'
import { Tweet } from '../typings'
import { fetchComments } from '../utils/fetchComments'

interface Props {
  tweet: Tweet
}
function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const refreshComments = async()=>{
    const comments: Comment[] = await fetchComments(tweet._id)
    setComments(comments);
  }
  
  useEffect(()=>{
    refreshComments();
  },[]) 
  
  console.log(comments);
  return ( 
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3">
        <img
          src={tweet.profileImg}
          alt="me"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, '').toLowerCase()} ·
            </p>
            <TimeAgo
              date={tweet._createdAt}
              className="text-sm text-gray-500"
            />
          </div>
          <p>{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt=""
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5" />
          <p>{comments?.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>
      {comments?.length > 0 && (
        <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
          {comments.map((comment) => (
            <div key={comment._id} className='relative flex space-x-2'>
              <hr className='absolute border-x border-twitter h-8 top-10 left-5' />
              <img src={comment.profileImg} className="mt-2 h-7 w-7 rounded-full object" alt="" />
              <div>
                <div className='flex items-center space-x-1'>
                  <p className='mr-1 font-bold'>{comment.username}</p>
                  <p className=' text-sm text-gray-500 hidden lg:inline'>@{comment.username.replace(/\s+/g,'').toLowerCase()} ·</p>
                <TimeAgo
                className='text-sm text-gray-500'
                date={comment._createdAt}
                />
                </div>
              <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tweet
