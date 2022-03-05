import React from 'react'
import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './Story'

export default function Stories() {
  const [suggestion, setSuggestion] = useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestion(suggestions)
  }, [])
  return (
    <div className='flex p-6 mt-8 space-x-2 overflow-x-scroll bg-white border-gray-200 rounded-sm borer scrollbar-thin scrollbar-thumb-black'>
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}
