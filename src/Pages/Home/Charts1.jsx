
import React, { useEffect } from 'react'
import {  Line } from 'react-chartjs-2';
import LineChart from '../../components/DashCharts/LineChart';
import PieChart from '../../components/DashCharts/PieChart';



const Charts1 = () => {

    
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

      const data = {
        labels,
        datasets: [
          {
            label: 'Google ads',
            data: [65, 210, 175, 140, 105, 20, 120, 20],
            borderColor: 'rgb(251,146,60)',
            backgroundColor: 'rgb(251,146,60)',
            tension:0.3,
            borderJoinStyle:'round',
            borderWidth:'5'
          },
            {
              label: 'Facebook ads',
              data: [20, 125, 100, 30, 150, 300, 90, 180],
              borderColor: 'rgb(22,163,74)',
              backgroundColor: 'rgb(22,163,74)',
              borderRdius:'circle',
              tension:0.3,
              borderJoinStyle:'bevel',
              borderWidth:'5'
            },

        ],
      };

      let pieLabels= ['Direct, Organic,Paid, Social']
      const pieData = {
        
        labels:pieLabels,
        datasets:[
            {
                label:pieLabels.map((l)=>l),
                data:[38,22,12,28],
                backgroundColor:[
                    'rgba(239, 68, 68, 1)',
                    'rgb(251,146,60)',
                    'rgba(52, 211, 153,1)',
                    'rgba(59, 130, 246,1)'
                ],
                hoverOffset:4,
                borderWidth:2,
                borderOffset:50,
                spaceing:20,
                // borderRadius:50

            }
        ]
      }


    
  return (
    <div className='my-2'>
        <div className='grid md:grid-cols-12 gap-3'>
            <div className="rev md:col-span-8 bg-white rounded-2xl p-4">
                <LineChart className='bg-white' chartTitle={'Revenue'} data={data}/>
            </div>

            <div className="visitors md:col-span-4 bg-white rounded-2xl p-4">
                {/* <PieChart chartTitle='Website Visitor' data={pieData}/> */}
            </div>
        </div>

{/*  */}
        <div>
            <div className="selling">

            </div>
            <div className="customers">

            </div>
            <div className="profile">

            </div>
        </div>
      
    </div>
  )
}

export default Charts1
