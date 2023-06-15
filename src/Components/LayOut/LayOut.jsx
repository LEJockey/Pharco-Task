import React from 'react'
import './LayOut.css'
import { Outlet } from 'react-router-dom'


const LayOut = () => {
  return (
    <main>
      <div className='layer'>
        <Outlet></Outlet>
      </div>
    </main>
  )
}

export default LayOut