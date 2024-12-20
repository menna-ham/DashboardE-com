import React, { useState } from 'react'
import ChartsSec from './ChartsSec';
import PieChart from '../../components/ECharts/PieChart';
import DynamicChart from '../../components/ECharts/DynamicChart';
import HorizontalBarChart from '../../components/ECharts/HorizontalBarChart';
import GradientYAxisChart from '../../components/ECharts/GradientYAxisChart';
import RecentOrders from './RecentOrders';
import EarningSec from './EarningSec';

const Home: React.FC = () => {
  let [theme, setTheme] = useState('light')
  const [isDarkMode, setIsDarkMode] = useState(false)

  let handleTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  return (
    <div >
      <button onClick={handleTheme}>theme</button>
      <div className={`flex flex-row gap-3 md:flex-row sm:flex-col h-[100%] ${theme}`}>

        <div className="md:w-[70%] flex flex-col gap-4">

          <div className='charts '>

            <ChartsSec />
          </div>

          <div className='dynamic bg-white p-2  rounded-2xl shadow-md'>
            {/* <p>Dynamic Data Chart </p> */}
            <DynamicChart barData={[]} lineData={[]} />

          </div>

          <div className='flex flex-row md:flex-row sm:flex-col gap-3'>

            <div className="pie bg-white p-2  rounded-2xl shadow-md md:w-1/3 ">
              <p className='font-semibold'>Statistice</p>
              <div className=' pb-2 m-auto'>
                <PieChart />

              </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md md:w-2/3'>
              <HorizontalBarChart />
            </div>
          </div>

          <div className='bg-white p-2 rounded-2xl shadow-md'>
            <p className='text-xl font-semibold'>Recent 10 Orders</p>
            <div>
              <RecentOrders />
            </div>
          </div>

          <div className='bg-white p-2 rounded-2xl shadow-md'>
            <GradientYAxisChart />
          </div>



        </div>


        <div className="earnings md:w-[30%] ">
          <EarningSec />

        </div>

      </div>

    </div>
  )
}

export default Home
