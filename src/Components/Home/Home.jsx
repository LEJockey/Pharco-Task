import React from 'react'
import './home.css'
import SideBar from '../SideBar/SideBar'


const Home = () => {
  return (
    <section>
    <SideBar/>
    <div className='container text-center'>
      <h1 className='custom'>
        Welcome to Pharco company
      </h1>
    </div>
    </section>
  )
}

export default Home