import React from 'react'
import ChartCard from './ChartCard';
import { LuUserCog2 } from "react-icons/lu";
import { PiUsersThreeBold } from "react-icons/pi";
import { LuCircleDollarSign } from "react-icons/lu";

const ChartsSec = () => {
  return (
    <div className="flex flex-row flex-nowrap gap-2 ">
              
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
  )
}

export default ChartsSec
