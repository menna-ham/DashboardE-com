import React from 'react'
import ApacheChart from '../../components/ECharts/ApacheChart'
import { SiNike, SiDior, SiZara } from "react-icons/si";
import { PiShirtFoldedFill } from "react-icons/pi";
import { GiSonicShoes, GiSkirt } from "react-icons/gi";
import UpdateDate from './UpdateDate';
import LineChart from '../../components/ECharts/LineChart';
import { PiSignInBold } from "react-icons/pi";
import ReactSlidy from 'react-slidy';


const EarningSec = () => {
  return (
    <div className='flex flex-col gap-3 bg-white rounded-lg p-1 '>

      <div className="bg-[#F7F6FB] rounded-2xl p-2 shadow-md">
        <UpdateDate/>
      </div>

      {/* withdeow card */}
      <div className='bg-[#F7F6FB]  rounded-2xl shadow-md p-2'>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-gray-700 font-bold text-xl'>Your Earnings</p>
          <div>
            <LineChart className='w-[100%]' color={'#F98A6D'} bgColor={'#fceae6'}/>
          </div>

        </div>

        <div className='flex flex-row justify-center'>

          <div className=' bg-[#F7F6FB] p-4 py-5 shadow-md border-2 w-fit border-[#6259C7] rounded-full'>
          <p className='text-gray-400 text-sm text-center mb-2'>Available</p>
          <p className='text-3xl text-[#6259C7] font-bold'>$167</p>

          </div>
        </div>

        <div className='py-2 flex flex-row justify-between items-center text-center'>
          <div >
            <p className='text-gray-400 font-semibold text-sm'>Today Earning</p>
            <p className='text-2xl font-semibold'>$15,010</p>
          </div>

          <div >
            <p className='text-gray-400 font-semibold text-sm'>Pending</p>
            <p className='text-2xl font-semibold'>$58</p>
          </div>

          <div >
            <p className='text-gray-400 font-semibold text-sm'>In Review</p>
            <p className='text-2xl font-semibold'>$70</p>
          </div>

        </div>

        <div className='flex flex-row justify-center p-2'>
          <button className='bg-[#F89273] py-2 px-3 rounded-md rounded-ss-none font-semibold text-white flex flex-row justify-center items-center gap-2'>
            <div className='p-1 bg-[#654CE6] rounded-md rounded-ss-none shadow-xl'>
            <PiSignInBold className='rotate-90'/>
            </div> 
            Withdrow
          </button>
        </div>

      </div>

      <div className='bg-[#F7F6FB]  rounded-2xl shadow-md'>
        <ApacheChart />

      </div>

      {/* Top Products Scrolling */}

      <div>
      <ReactSlidy numOfSlides={5}>
        <div>1</div>
        <div>1</div>
      </ReactSlidy>
      </div>

      {/* Top Brands */}
      <div className="topbrands p-2 bg-[#F7F6FB]  rounded-2xl shadow-md">
        <div>
          <p className='font-semibold text-lg mb-2'>Top Brands for This Month</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className='flex flex-row justify-between items-center gap-y-2 bg-white rounded-xl p-2'>

            <div className='flex flex-row justify-between items-center '>
              <div className='flex flex-row gap-x-2 '>
                <div className='bg-white p-2 shadow-xl rounded-md flex flex-row items-center'>
                  <SiNike size={'2rem'} />
                </div>
                <div>

                  <p className='font-bold text-sm mb-1 '>Nike</p>
                  <p className='text-sm text-gray-400 font-semibold'>2 month</p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-gray-400 font-semibold'>2,240</p>
            </div>

          </div>

          <div className='flex flex-row justify-between items-center gap-y-2 bg-white rounded-xl p-2'>

            <div className='flex flex-row justify-between items-center '>
              <div className='flex flex-row gap-x-2 '>
                <div className='bg-white p-2 shadow-xl rounded-md flex flex-row items-center'>
                  <SiDior size={'2rem'} />
                </div>
                <div>

                  <p className='font-bold text-sm mb-1 '>Dior</p>
                  <p className='text-sm text-gray-400 font-semibold'>2 month</p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-gray-400 font-semibold'>2,240</p>
            </div>

          </div>

          <div className='flex flex-row justify-between items-center gap-y-2 bg-white rounded-xl p-2'>

            <div className='flex flex-row justify-between items-center '>
              <div className='flex flex-row gap-x-2 '>
                <div className='bg-white p-2 shadow-xl rounded-md flex flex-row items-center'>
                  <SiZara size={'2rem'} />
                </div>
                <div>

                  <p className='font-bold text-sm mb-1 '>Zara</p>
                  <p className='text-sm text-gray-400 font-semibold'>2 month</p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-gray-400 font-semibold'>2,240</p>
            </div>

          </div>

        </div>

      </div>

      {/* Top Category */}
      <div className="topcategory p-2 bg-[#F7F6FB]  rounded-2xl shadow-md">
        <div>
          <p className='font-semibold text-lg mb-2'>Top Categories for This Month</p>
        </div>

        <div className="flex flex-col gap-y-2">

          <div className='flex flex-row justify-between items-center gap-x-1 p-2'>
            <div className='text-gray-500 text-sm font-bold'>
              Shirts
            </div>

            <div className=' w-[60%]'>
              <div className="w-full h-8  bg-white rounded-lg dark:bg-gray-700">
                <div className="h-8  bg-[#A273FE] text-xs font-medium text-blue-100 text-start p-1 my-auto leading-none rounded-lg w-[75%]" > 
                  <div className='flex flex-row items-center gap-1 text-white py-1'><PiShirtFoldedFill size={'1rem'} /> 75%</div>
                </div>
              </div>
            </div>

            <div className='text-gray-500 text-sm font-bold'>
              75%
            </div>

          </div>
          <div className='flex flex-row justify-between items-center gap-x-1 p-2'>
            <div className='text-gray-500 text-sm font-bold'>
              Shoes
            </div>

            <div className=' w-[60%]'>
              <div className="w-full h-8  bg-white rounded-lg dark:bg-gray-700">
                <div className="h-8  bg-[#FE8543] text-xs font-medium text-blue-100 text-start p-1 my-auto leading-none rounded-lg w-[65%]" > 
                  <div className='flex flex-row items-center gap-1 text-white py-1'><GiSonicShoes size={'1rem'} /> 65%</div>
                </div>
              </div>
            </div>

            <div className='text-gray-500 text-sm font-bold'>
              65%
            </div>

          </div>
          <div className='flex flex-row justify-between items-center gap-x-1 p-2'>
            <div className='text-gray-500 text-sm font-bold'>
            Skirts
            </div>

            <div className=' w-[60%]'>
              <div className="w-full h-8  bg-white rounded-lg dark:bg-gray-700">
                <div className="h-8  bg-[#FEC24C] text-xs font-medium text-blue-100 text-start p-1 my-auto leading-none rounded-lg w-[45%]" > 
                  <div className='flex flex-row items-center gap-1 text-white py-1'><GiSkirt size={'1rem'} /> 45%</div>
                </div>
              </div>
            </div>

            <div className='text-gray-500 text-sm font-bold'>
              45%
            </div>

          </div>
          {/* <div className='flex flex-row justify-between items-center gap-y-2 bg-white rounded-xl p-2'>

            <div className='flex flex-row justify-between items-center '>
              <div className='flex flex-row gap-x-2 '>
                <div className='bg-white p-2 shadow-xl rounded-md flex flex-row items-center'>
                  <PiShirtFoldedFill size={'2rem'} />
                </div>
                <div>

                  <p className='font-bold text-sm mb-1 '>Shirts</p>
                  <p className='text-sm text-gray-400 font-semibold'>2 month</p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-gray-400 font-semibold'>2,240</p>
            </div>

          </div>

           <div className='flex flex-row justify-between items-center gap-y-2 bg-white rounded-xl p-2'>

            <div className='flex flex-row justify-between items-center '>
              <div className='flex flex-row gap-x-2 '>
                <div className='bg-white p-2 shadow-xl rounded-md flex flex-row items-center'>
                  <GiSonicShoes size={'2rem'} />
                </div>
                <div>

                  <p className='font-bold text-sm mb-1 '>Shoes</p>
                  <p className='text-sm text-gray-400 font-semibold'>2 month</p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-gray-400 font-semibold'>2,240</p>
            </div>

          </div> =

          <div className='flex flex-row justify-between items-center gap-y-2 bg-white rounded-xl p-2'>

            <div className='flex flex-row justify-between items-center '>
              <div className='flex flex-row gap-x-2 '>
                <div className='bg-white p-2 shadow-xl rounded-md flex flex-row items-center'>
                  <GiSkirt size={'2rem'} />
                </div>
                <div>

                  <p className='font-bold text-sm mb-1 '>Skirts</p>
                  <p className='text-sm text-gray-400 font-semibold'>2 month</p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-gray-400 font-semibold'>2,240</p>
            </div>

          </div>  */}

        </div>

      </div>

      {/* Top Color */}


    </div>

    // </div >
  )
}

export default EarningSec
