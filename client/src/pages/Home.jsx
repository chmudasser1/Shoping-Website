import React from 'react'
import Navbar from '../components/Navbar'
import ItemsList from '../components/ItemsList'
import Swiperrr from '../components/Swiperrr'
import ItemsBlocks from '../components/ItemsBlocks'

const Home = () => {
  return (
    <div>
      <Navbar />
      <ItemsList />
      <Swiperrr />
      <ItemsBlocks />
    </div>
  )
}

export default Home
