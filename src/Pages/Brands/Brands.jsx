import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'

const Brands = () => {
  let [Brand, setBrands] = useState([])

  let loginToken = localStorage.getItem('loginToken')
  let userData = jwtDecode(loginToken)  

  let getBrands = async () => {
    let res = await axios.get('https://ecomerce.runasp.net/api/Brand/GetAllBrand',{headers:{
      // Accept:'text/plain',
      setContentType:'application/json-patch+json',
      getAccept:'text/plain',

    }})
    console.log(res);
  }

  useEffect(() => {
    // getBrands();
  }, [])


  return (
    <div>
      <div className='my-2 '>
        <h2 className='uppercase text-2xl font-bold'>Brands Managment</h2>
      </div>

      <div className='my-3'>

        <table className='table table-bordered w-full '>

          <thead>
            <tr>
              <th className=''>#</th>
              <th className=''>Brand</th>
              <th className=''>Date Created</th>
              <th className=''>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className=''>The Sliding </td>
              <td className=''>Malcolm Lockyer</td>
              <td className=''>1961</td>
              <td className=''>1961</td>

            </tr>
            <tr>
              <td>The Sliding </td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>1961</td>

            </tr>


          </tbody>


        </table>

      </div>

    </div>
  )
}

export default Brands
