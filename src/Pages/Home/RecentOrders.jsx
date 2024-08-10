import React from 'react'
import DataTable from '../../components/DataTable/DataTable';
import { Link } from 'react-router-dom';
import { Chip } from '@mui/material'; 
import { GoDotFill } from "react-icons/go";



const RecentOrders = () => {

  let columns=[
    { field: 'ID', headerName: 'ORDER', width: 120, type: 'string' ,renderCell:(params)=>(
      <Link to={`/Order/ID${params.row.ID}`} className='text-blue-600'>#{params.row.ID}</Link>
    )},
    { field: 'Date', headerName: 'DATE', width: 120, type: 'string' },
    { field: 'OrderBy', headerName: 'CUSTOMER', width: 120, type: 'string' },
    { field: 'PaymentStatus', headerName: 'PAYMENT', width: 120, type: 'string' ,renderCell:(params)=>(
      <PaymentSwitch status={params.row.PaymentStatus} />
    )},
    { field: 'OrderStatus', headerName: 'STATUS', width: 120, type: 'string',
      renderCell:(params)=>(
        <OrderStatusSwitch status={params.row.OrderStatus}/>
    ) },
    { field: 'Total', headerName: 'TOTAL AMOUNT', width: 120, type: 'string' },
  ]
  let rows=[
    {
      ID: '001',
      Date: '2024-08-01',
      OrderBy: 'John Doe',
      PaymentStatus: 'Paid',
      OrderStatus: 'Shipped',
      Total: '$150.00'
    },
    {
      ID: '002',
      Date: '2024-08-02',
      OrderBy: 'Jane Smith',
      PaymentStatus: 'Pending',
      OrderStatus: 'Processing',
      Total: '$200.00'
    },
    {
      ID: '003',
      Date: '2024-08-03',
      OrderBy: 'Alice Johnson',
      PaymentStatus: 'Overdue',
      OrderStatus: 'Delivered',
      Total: '$350.00'
    },
    {
      ID: '004',
      Date: '2024-08-04',
      OrderBy: 'Bob Brown',
      PaymentStatus: 'Failed',
      OrderStatus: 'Canceled',
      Total: '$100.00'
    },
    {
      ID: '005',
      Date: '2024-08-05',
      OrderBy: 'Charlie Davis',
      PaymentStatus: 'Paid',
      OrderStatus: 'Delivered',
      Total: '$450.00'
    },
    {
      ID: '006',
      Date: '2024-08-06',
      OrderBy: 'David Wilson',
      PaymentStatus: 'Pending',
      OrderStatus: 'Processing',
      Total: '$220.00'
    },
    {
      ID: '007',
      Date: '2024-08-07',
      OrderBy: 'Eve Miller',
      PaymentStatus: 'Overdue',
      OrderStatus: 'Shipped',
      Total: '$310.00'
    },
    {
      ID: '008',
      Date: '2024-08-08',
      OrderBy: 'Frank White',
      PaymentStatus: 'Paid',
      OrderStatus: 'Delivered',
      Total: '$280.00'
    },
    {
      ID: '009',
      Date: '2024-08-09',
      OrderBy: 'Grace Hall',
      PaymentStatus: 'Failed',
      OrderStatus: 'Canceled',
      Total: '$190.00'
    },
    {
      ID: '010',
      Date: '2024-08-10',
      OrderBy: 'Henry King',
      PaymentStatus: 'Pending',
      OrderStatus: 'Processing',
      Total: '$130.00'
    }
  ];


    // let columns: GridColDef[]=[
    //   { field: 'ID', headerName: 'ID', width: 150, type: 'string' },
    // ]
    // let rows: GridRowsProp = [];


  return (
    <div>
      <DataTable rows={rows} columns={columns}/>
    </div>
  )
}

export default RecentOrders


const PaymentSwitch = ({ status }) => {
  switch (status) {
    case 'Paid':
      return <div label="Paid" className='flex flex-row gap-1 items-center' style={{ color: 'green' }}> 
      <GoDotFill /><div >Paid</div></div>;
    case 'Pending':
      return <div label="Pending" className='flex flex-row gap-1 items-center' style={{ color: 'orange' }}> 
      <GoDotFill /><div>Pending</div></div>;

    case 'Overdue':
      return <div label="Overdue" className='flex flex-row gap-1 items-center' style={{ color: 'red' }}> 
      <GoDotFill /><div>Overdue</div></div>;
    case 'Failed':
      return <div label="Failed" className='flex flex-row gap-1 items-center' style={{ color: 'grey' }}> 
      <GoDotFill /><div>Failed</div></div>;
    default:
      return <div label="Unknown" className='flex flex-row gap-1 items-center' style={{ color: 'blue' }}> 
      <GoDotFill /><div>Unknown</div></div>;
  }
};

const OrderStatusSwitch = ({ status }) => {
  switch (status) {
    case 'Shipped':
      return <Chip label="Shipped" variant="outlined"  style={{ color: 'rgb(21 128 61)' , backgroundColor:'rgb(134 239 172)', borderColor:'rgb(34 197 94)'}}/>;
    case 'Processing':
      return <Chip label="Processing" variant="outlined"  style={{ color: 'rgb(194 65 12)' , backgroundColor:'rgb(253 186 116)', borderColor:'rgb(249 115 22)'}}/>;
    case 'Delivered':
      return <Chip label="Delivered" variant="outlined"  style={{ color: 'rgb(190 18 60)' , backgroundColor:'rgb(253 164 175)', borderColor:'rgb(244 63 94)'}}/>;
    case 'Canceled':
      return <Chip label="Canceled" variant="outlined"  style={{ color: 'rgb(55 65 81)' , backgroundColor:'rgb(209 213 219)', borderColor:'rgb(107 114 128)'}}/>;
    default:
      return <Chip label="Canceled" variant="outlined"  style={{ color: 'rgb(29 78 216)' , backgroundColor:'rgb(147 197 253)', borderColor:'rgb(59 130 246)'}}/>;
  }
};