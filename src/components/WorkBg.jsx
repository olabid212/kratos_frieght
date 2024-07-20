import React from 'react'
import { Link } from 'react-router-dom'

const WorkBg = () => {
  return (
    <div>
      <section className='mb-40 bg-yellow-400 h-[50vh] grid justify-center items-center'>

        <Link className='text-white bg-indigo-950 px-6 py-3' to="/">Work More</Link>
      </section>
    </div>
  )
}

export default WorkBg
