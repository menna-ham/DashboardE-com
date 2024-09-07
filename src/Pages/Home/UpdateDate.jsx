import React, { useEffect, useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharts } from '../../Redux/Slices/ChartsSlice';
import { getChartDate } from '../../Redux/Slices/ChartsSlice';

const UpdateDate = () => {
  // let [fromDate, setFromDate] = useState(dayjs(new Date()))
  // let [toDate, setToDate] = useState(dayjs(new Date()))
  let [chartDate,setChartDate] = useState({
    from:'',
    to:'',
  })
  // const { items, status, error } = useSelector(state => state.charts)
  const dispatch = useDispatch()


  
  let test=()=>{
    console.log('inside date'); 
    dispatch(getChartDate(chartDate))
  }

  useEffect(() => {
      console.log('effect')
      // dispatch(getChartDate('1020'));
  }, [chartDate]);

  return (
    <div>
      

      <div className='flex flex-col gap-2 mt-2'>

      <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="From Date"  format="DD/MM/YYYY" value={dayjs(new Date())} onChange={(newVal)=>setChartDate(prev => ({...prev,from: newVal }))}/>
          </LocalizationProvider>
      </div>

      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="To Date" format="DD/MM/YYYY" value={dayjs(new Date())} onChange={(newVal)=>setChartDate(prev => ({...prev,to: newVal }))}/>
        </LocalizationProvider>
      </div>

      </div>
      <button className='my-2 bg-[#544EAB] text-white font-semibold p-2 rounded-md shadow-lg' onClick={test}>UpdateDate </button>
    </div>
  )
}

export default UpdateDate