import React from 'react'
import LineChart from '../../components/ECharts/LineChart'
import { IoMdArrowUp } from "react-icons/io";

const ChartCard = ({bgColor,color, label, icon, value}) => {
  return (
    <div style={{backgroundColor:bgColor}} className='h-full rounded-2xl p-2'>

    <div className="nums flex flex-row flex-wrap justify-between items-center">
      <div className='flex flex-row gap-1 items-center'>
        {icon}
        <p className='text-xl font-semibold'>{value}</p>

      </div>
      <div className='flex flex-row flex-wrap gap-1 text-gray-400 items-center justify-end text-sm'>
        <IoMdArrowUp />
        <p>+10%</p>
      </div>
    </div>

    <div className='h-fit'>

        <p style={{color:color}} className='font-semibold '> {label}</p>
        <div className='m-auto'>
         <LineChart color={color} bgColor={bgColor}/>
        </div>
    </div>



  </div>
  )
}

export default ChartCard
