import { EG, FR, US } from 'country-flag-icons/react/1x1';
import React, { useState } from 'react'
import { BiLogOutCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from "react-icons/ci";
import { FaBars, FaHome, FaUser } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { IoMdNotifications } from 'react-icons/io';
import { MdLanguage } from "react-icons/md";
import { TiArrowSortedDown } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
  collapseSideBar: boolean;
  setCollapseSideBar: (value: boolean) => void;
  broken: boolean;
  toggled: boolean;
  setToggled: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ collapseSideBar, setCollapseSideBar, broken , toggled , setToggled }) => {
  let [hideLang, setHideLang] = useState(false)
  let [togProfile, setTogProfile] = useState(false);
  let [searNav, setSearNav] = useState(false)



  return (
    <div className='relative py-2 px-3 flex flex-row justify-between items-center bg-white rounded-lg shadow-sm'>
      {
        searNav&&<div className='flex flex-row justify-between items-center bg-white absolute left-0 right-0 z-20 rounded-lg'>
        <div className='p-2'>
          <input placeholder='Search...' className='border-none outline-none rounded-full px-2 py-1 w-full' />
        </div>
        <div>
        <button className="p-3 " onClick={() => setSearNav(false)}><IoMdClose /></button>
        </div>
      </div>
      }


      <div className='flex flex-row w-[40%] gap-3'>
        { broken?
        <button onClick={() => {setToggled(!toggled); console.log('toggling');}}>
          <FaBars />
        </button>:
        <button onClick={() => {setCollapseSideBar(!collapseSideBar); console.log('collapsing');}}>
          <FaBars />
        </button>
        }

        
        <button onClick={()=>setSearNav(true)}>

        <div className='flex flex-row justify-between items-center gap-2'>
          <CiSearch className='text-gray-700' size={'20px'}/>
          <p className='text-gray-400 text-lg '>Search...</p>
        </div>

        </button>

      </div>

      <div className='flex flex-row gap-3 items-center'>

        <div className="lang relative">

          <button onClick={() => setHideLang(!hideLang)} className=' rounded-full hover:bg-gray-300 cursor-pointer p-2 transition-all'>
            <MdLanguage height={'2xl'} className='bg-transparent' />

          </button>

          <div className={`absolute w-[130px] flex flex-col rounded-lg right-0 py-1   bg-white shadow ${hideLang ? 'block' : 'hidden'}`}>
            <div className='py-1 px-2 flex justify-between text-sm  hover:bg-gray-100 cursor-pointer'>
              <US title='United States bg-transparent' className='w-3' />
              <p className='font-semibold bg-transparent'>English</p>
              <p className='text-gray-400 bg-transparent'>eng</p>
            </div>

            <div className='py-1 px-2 flex justify-between text-sm bg-white hover:bg-gray-100 cursor-pointer'>
              <EG title='Egypt' className='w-3 bg-transparent' />
              <p className='font-semibold bg-transparent'>Egypt</p>
              <p className='text-gray-400 bg-transparent'>egy</p>
            </div>

            <div className='py-1 px-2 flex justify-between text-sm bg-white hover:bg-gray-100 cursor-pointer'>
              <FR title='France' className='w-3 bg-transparent' />
              <p className='font-semibold bg-transparent'>France</p>
              <p className='text-gray-400 bg-transparent'>fr</p>
            </div>

          </div>

        </div>


        <div className="notf">
          <button className='rounded-full hover:bg-gray-300 cursor-pointer p-2 transition-all'>
            <IoMdNotifications height={'2xl'} className='bg-transparent' />
          </button>
        </div>


        <div className="profile p-2 ">

          <div onClick={()=>{setTogProfile(!togProfile)}} className='relative flex flex-row justify-between items-center text-sm gap-2 cursor-pointer'>
            <div>
              <CgProfile  size={'20px'}/>
            </div>
            <div>
              <p className='text-sm'>Aidan Profile</p>
            </div>
            <div>
            <TiArrowSortedDown size={'20px'} />
            </div>
          </div>


          <div className={`absolute text-sm rounded-lg w-[9rem] shadow-lg flex flex-col  py-1 bg-white ${togProfile?'block':'hidden'}`}>

            <Link to={'/'} className='flex flex-row gap-3 items-center text-sm hover:bg-gray-200 bg-transparent p-2'>
              <FaHome size ={'20px'} className='bg-transparent'/>
              <p className='text-sm'>Home</p>
            </Link>

            <Link to='/profile' className='flex flex-row gap-3 items-center text-sm hover:bg-gray-200 bg-transparent p-2'>
              <FaUser size ={'20px'} className='bg-transparent'/>
              <p className='text-sm'>Profile</p>
            </Link>

            <Link to='/settings'  className='flex flex-row gap-3 items-center text-sm hover:bg-gray-200 bg-transparent p-2'>
              <FiSettings size ={'20px'} className='bg-transparent'/>
              <p className='text-sm'>Settings</p>
            </Link>
            <div>
              <hr />
            </div>
            <div className='flex flex-row gap-3 items-center text-sm hover:bg-gray-200 bg-transparent  text-red-500 p-2'>
              <BiLogOutCircle size ={'20px'} className='bg-transparent'/>
              <p className='text-sm'>Logout</p>
            </div>

          </div>


        </div>

        

      </div>
    </div>
  )
}

export default Navbar
