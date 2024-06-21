import { Sidebar } from 'primereact/sidebar';
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import logo from '../../assets/elegant-logo.png'
import { Link, NavLink } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { SiBrandfolder } from 'react-icons/si';
import { BiSolidCategoryAlt } from 'react-icons/bi';

const SideBarComp = ({ toggleSideBar, settoggleSideBar }) => {
  let [visible, setVisible] = useState(true)

  let active = 'flex gap-2 items-center p-2 rounded-lg  bg-orange-400'
  let inActive= 'flex gap-2 items-center p-2 rounded-lg hover:bg-gray-200 bg-transparent'
  let activeIcon = 'text-orange-400 bg-orange-400'
  let inActiveIcon ='text-black bg-white'

  useEffect(() => {

  }, [toggleSideBar])

  return (

    <div className={'bg-white p-2 rounded-lg  h-full '}>
      {/* <button onClick={() => settoggleSideBar(!toggleSideBar)}>togg</button>
      <div>
        <img src={logo} />
      </div> */}

      {
        toggleSideBar ?
          <div className={`py-3  flex flex-col gap-2 `}>
            <button onClick={() => settoggleSideBar(!toggleSideBar)}>togg</button>
            <div>
              <img src={logo} />
            </div>

            <div >
              <NavLink to='/' className={({isActive})=>( isActive? active: inActive)} >
                <FaHome size={'30px'} />
                Dashboard
              </NavLink>
            </div>
            <div >
              <NavLink to='/users' className={({isActive})=>( isActive? active: inActive)} >
                <FaUser size={'30px'} />
                Users
              </NavLink>
            </div>
            <div >
              <NavLink to='/brands' className={({isActive})=>( isActive? active: inActive)} >
                <SiBrandfolder size={'30px'} />
                Brands
              </NavLink>
            </div>
            <div >
              <NavLink to='/categories' className={({isActive})=>( isActive? active: inActive)} >
                <BiSolidCategoryAlt size={'30px'} />
                Categories
              </NavLink>
            </div>

          </div> :

          <div className={`py-3  flex flex-col gap-2 `}>
            <div>
              Logo
            </div>
            <div >
              <Link to='/' className={({isActive})=>( isActive? activeIcon: inActiveIcon)} >
                <FaHome size={'30px'} />
              </Link>
            </div>
            <div >
              <Link to='/users' className={({isActive})=>( isActive? activeIcon: inActiveIcon)} >
                <FaUser size={'30px'} />
              </Link>
            </div>
            <div >
              <Link to='/brands' className={({isActive})=>( isActive? activeIcon: inActiveIcon)} >
                <SiBrandfolder size={'30px'} />
              </Link>
            </div>
            <div >
              <Link to='/categories' className={({isActive})=>( isActive? activeIcon: inActiveIcon)} >
                <BiSolidCategoryAlt size={'30px'} />
              </Link>
            </div>

          </div>
      }


    </div>
  )

}
export default SideBarComp

// import React, { useState } from 'react';
// import './Sidebar.css'; // Import your sidebar styles

// const SideBarComp = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to track sidebar state

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         Toggle Sidebar
//       </button>
//       <ul>
//         <li><a href="#">Link 1</a></li>
//         <li><a href="#">Link 2</a></li>
//         <li><a href="#">Link 3</a></li>
//         {/* Add more links or content here */}
//       </ul>
//     </div>
//   );
// };

// export default SideBarComp;
