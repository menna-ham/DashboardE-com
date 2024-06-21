import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SideBarComp from '../Sidebar/SideBarComp'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'



// type Props = {}

const MainLayout = () => {

    let [toggleSideBar, settoggleSideBar] = useState(true)

    return (
        <div>


            <div className=" grid md:grid-cols-12 gap-0 relative">
            {/* <div className=" flex flex-col md:flex-row gap-0 relative"> */}

                <div className={`sidebar h-full  bg-blue-500 p-3 ${toggleSideBar?'md:col-span-2':'hidden'} `}>
                {/* <div className={`sidebar h-full  bg-blue-500 p-3 ${toggleSideBar?'w-[15rem]':'w-fit'} `}> */}
               
                    <SideBarComp toggleSideBar={toggleSideBar} settoggleSideBar={settoggleSideBar}/>
                </div>
                <div className={`mainContent  p-3 ${toggleSideBar?'md:col-span-10':'md:col-span-12'}`}>
                    <div>
                        <Navbar toggleSideBar={toggleSideBar} settoggleSideBar={settoggleSideBar}/>
                    </div>
                    <div className='py-4'>
                    <Outlet />

                    </div>
                </div>
            </div>

            <div className="footer w-full">
                <Footer />
            </div></div>
    )
}

export default MainLayout
