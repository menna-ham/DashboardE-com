import React from 'react'
import { GiChart } from 'react-icons/gi'
import Sec1 from './Sec1'
import Charts1 from './Charts1'
import { LuCircleDollarSign } from "react-icons/lu";
import { IoMdArrowUp } from "react-icons/io";
import LineChart from '../../components/ECharts/LineChart';
import ChartCard from './ChartCard';
import { LuUserCog2 } from "react-icons/lu";
import { PiUsersThreeBold } from "react-icons/pi";


const Home = () => {


  return (
    <div >
      {/* old home */}
      {/* <Sec1/>
      <Charts1/> */}

      <div className='flex flex-wrap flex-col md:flex-row bg-teal-600 h-full'>
        <div className="md:w-[70%]">
          <div className='charts '>
//grid grid-cols-3
            <div className="flex flex-row flex-wrap gap-1 bg-pink-500">
              <div className='h-full w-1/3'>
                <ChartCard bgColor={'#EDEAFF'} color={'#7A65E9'} label={'Total Revenue'} icon={<LuCircleDollarSign size={'20px'} />} value={'4,8/5'} />
              </div>
 
              <div className='h-full w-1/3'>
                <ChartCard bgColor={'#E1D9D8'} color={'#F98A6D'} label={'Average Rating'} icon={<LuUserCog2 size={'20px'} />} value={'4,8/5'} />
              </div>
              <div className='h-full w-1/3'>
                <ChartCard bgColor={'#D9F5FF'} color={'#66C0E3'} label={'Total Students'} icon={<PiUsersThreeBold size={'20px'} />} value={'5,622'} />
              </div>

            </div>


          </div>
          <div>
            ss
          </div>



        </div>


        <div className="earnings md:w-[30%]">
          earnings
        </div>

      </div>

    </div>
  )
}

export default Home
