import React from 'react'
import ApacheChart from '../../components/ECharts/ApacheChart'
import { SiNike, SiDior, SiZara } from "react-icons/si";
import { PiShirtFoldedFill } from "react-icons/pi";
import { GiSonicShoes, GiSkirt } from "react-icons/gi";

const EarningSec = () => {
  return (
    <div className='flex flex-col gap-3 bg-white rounded-lg p-1 '>

      <div className='bg-[#F7F6FB]  rounded-2xl shadow-md'>
        <ApacheChart />

      </div>

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
              <div class="w-full h-8  bg-white rounded-lg dark:bg-gray-700">
                <div class="h-8  bg-[#A273FE] text-xs font-medium text-blue-100 text-start p-1 my-auto leading-none rounded-lg w-[75%]" > 
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
              <div class="w-full h-8  bg-white rounded-lg dark:bg-gray-700">
                <div class="h-8  bg-[#FE8543] text-xs font-medium text-blue-100 text-start p-1 my-auto leading-none rounded-lg w-[65%]" > 
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
              <div class="w-full h-8  bg-white rounded-lg dark:bg-gray-700">
                <div class="h-8  bg-[#FEC24C] text-xs font-medium text-blue-100 text-start p-1 my-auto leading-none rounded-lg w-[45%]" > 
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


    </div>

    // </div >
  )
}

export default EarningSec
