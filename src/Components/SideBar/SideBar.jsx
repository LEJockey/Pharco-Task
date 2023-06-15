import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const SideBar = () => {

  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleListItemClick = (e) => {
    const listItems = document.querySelectorAll('.sidebar-list li');
    const currentItem = e.currentTarget;
    const isActive = currentItem.classList.contains('active');

    listItems.forEach((item) => {
      item.classList.remove('active');
    });

    if (!isActive) {
      currentItem.classList.add('active');
    }
  };


  return (

    <>
    <div  className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>

    {/* SideBar Logo */}
      <div className="logo-details w-100 d-flex align-items-center">

        <i className="fa-solid fa-house-medical"></i>

        <span className='logo-name'>
            Pharco
        </span>

      </div>
      
    {/* Sidebar Selection items */}
      <ul className='sidebar-list list-unstyled h-100 pt-4'>
      
      {/* Home item  */}
        <li onClick={handleListItemClick}>
          <div className='item'>
            <Link to='/' className='link'>
              <i className="fa-solid fa-house"></i>
              <span className='name'>Home</span>
            </Link>
          </div>

          <div className='submenu'>
            <Link className='link submenu-item'>Home</Link>
          </div>

        </li>

      {/* Pages item  */}
        <li className='dropdown' onClick={handleListItemClick}>
          <div className='item'>
            <Link to='' className='link'>
              <i className="fa-regular fa-file"></i>
              <span className='name'>Pages</span>
            </Link>
            <i className="fa-solid fa-chevron-down arrow"></i>
          </div>

          <div className='submenu'>
            <Link className='link submenu-item'>Pages</Link>
            <Link to= '/page-one' className='link'>Page One</Link>
            <Link to= '/page-two' className='link'>Page Two</Link>
            <Link to= '/page-three' className='link'>Page Three</Link>
          </div>

        </li>

      </ul>

    </div>
    {/* Toggle Button section */}
    <section className="sidebar-button">
        <div className="sidebar-toggle " onClick={handleSidebarToggle}>
          <i className="fa-solid fa-bars ms-3"></i>
          <div className="text ms-2">Pharco</div>
        </div>
      </section>
    </>


    
  )
}

export default SideBar