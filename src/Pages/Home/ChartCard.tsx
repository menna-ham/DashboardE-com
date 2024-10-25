import React from 'react'
import LineChart from '../../components/ECharts/LineChart'
import { IoMdArrowUp } from "react-icons/io";
interface ChartCardProps {
  bgColor: string;
  color: string;
  label: string;
  icon: React.ReactNode; // icon could be any React element
  value: number | string; // value can be a number or string
}

const ChartCard : React.FC<ChartCardProps>= ({bgColor,color, label, icon, value}) => {
  return (
    <div style={{backgroundColor:bgColor}} className='h-full rounded-2xl p-2 shadow-md'>

    <div className="nums flex flex-row flex-wrap justify-between items-center">
      <div className='flex flex-row gap-1 items-center'>
        {icon}
        <p className='text-xl font-semibold'>{value}</p>

      </div>
      <div className='flex flex-row flex-wrap gap-2 text-gray-400 items-center justify-end text-sm'>
        <IoMdArrowUp />
        <p>+10%</p>
      </div>
    </div>

    <div className=''>

        <p style={{color:color}} className='font-semibold '> {label}</p>
        <div className='h-[90%] '>
         <LineChart color={color} bgColor={bgColor}/>
        </div>
    </div>



  </div>
  )
}

export default ChartCard
