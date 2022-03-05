import React from 'react'
import Stories from './Stories'

export default function Feed() {
  return (
    <main
      className={
        'grid grid-cols-2 mx-auto md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl'
      }
    >
      <section className='col-span-2'>
        <Stories />
      </section>
    </main>
  )
}
