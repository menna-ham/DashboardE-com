import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { getChartDate } from '../../Redux/Slices/ChartsSlice';

const UpdateDate: React.FC = () => {
  const [chartDate, setChartDate] = useState<{
    from: Dayjs | null;
    to: Dayjs | null;
  }>({
    from: dayjs(), // Initialize with current date
    to: dayjs(),   // Initialize with current date
  });

  const dispatch = useDispatch();

  const test = () => {
    console.log('inside date');
  
    // Ensure both dates are defined, or throw an error
    if (!chartDate.from || !chartDate.to) {
      console.error('Both from and to dates must be defined');
      return; // Exit if either date is undefined
    }
  
    const formattedDates = {
      from: chartDate.from.format('YYYY-MM-DD'), // Assuming chartDate.from is a moment object
      to: chartDate.to.format('YYYY-MM-DD'),
    };
    
    dispatch(getChartDate(formattedDates));
  };

  useEffect(() => {
    console.log('effect');
  }, [chartDate]);

  return (
    <div>
      <div className='flex flex-col gap-2 mt-2'>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="From Date"
              format="DD/MM/YYYY"
              value={chartDate.from}
              onChange={(newVal: Dayjs | null) => 
                setChartDate(prev => ({ ...prev, from: newVal }))
              }
            />
          </LocalizationProvider>
        </div>

        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="To Date"
              format="DD/MM/YYYY"
              value={chartDate.to}
              onChange={(newVal: Dayjs | null) => 
                setChartDate(prev => ({ ...prev, to: newVal }))
              }
            />
          </LocalizationProvider>
        </div>
      </div>
      <button
        className='my-2 bg-[#544EAB] text-white font-semibold p-2 rounded-md shadow-lg'
        onClick={test}
      >
        Update Date
      </button>
    </div>
  );
};

export default UpdateDate;
