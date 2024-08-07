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

      <div className='flex flex-col flex-wrap  md:flex-row bg-teal-600 h-[100%]'>

        <div className="md:w-[70%] flex flex-col">

          <div className='charts h-[25%]'>

            <div className="flex flex-row flex-nowrap gap-2 bg-pink-500">
              
              <div className='w-1/3'>
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
            ssww
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
