import React from 'react'
import ApacheChart from '../../components/ECharts/ApacheChart'

const EarningSec = () => {
  return (
    <div className='flex flex-col gap-3 '>

        <div className='bg-white  rounded-2xl shadow-md'>
        <ApacheChart/>

        </div>

        <div className="topbrands p-2 bg-white  rounded-2xl shadow-md">
          <div>
            <p className='font-semibold text-lg'>Top Brands for This Month</p>
          </div>

          <div className='flex flex-col gap-y-2'>

              <div className='flex flex-row justify-between items-center bg-blue-500'>
                <div className='flex flex-row gap-x-2 bg-pink-300'>
                  <div>

                  <img src="" alt="" />

                  </div>
                  <div>
                    <p>get started with</p>
                    <p>2 month</p>
                  </div>
                </div>

                <div>
                  <p>2,240</p>
                </div>

              </div>
          </div>


        </div>
      
    </div>
  )
}

export default EarningSec
