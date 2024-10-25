import React from 'react'
import { GiChart } from 'react-icons/gi'

const Sec1: React.FC = () => {
  return (
    <div className='grid sm:grid-cols-3 gap-2'>

    <div className="sales text-sm w-full bg-white rounded-lg p-2">

      <div className='flex flex-col md:flex-row items-center gap-2 w-full'>
        <div className="icon w-[5rem] ">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUrSURBVHgB7ZxPTBxVHMd/bxZB0kJbxdgUa7ZtAktiSnsoHvRgWg4aD4WLtwKNF9OsB7xx6t64EoV6MAaXmzEpePICpoee0GSXmljAFFYrpC2IsGAJi+zzfR+dzewwb1lq39tt930S2JnZN4f58Pv93p8hj1EA4cTw0RrncTfn9B4jOodL9ALBiZLiI0WMjc22XosHtWH+C02JGx2M8WFxeJQqApbijGJ+QY73pDkxNCCkjFLFSAE8zDj/JpL4Iua9mouYSGIoJsxdp0qG8YGZ1mivPMQvIaVHSBkmC3Ge7Zw9/+mYFNOcvDGPkCILCvNqhmdOhRAtIm56yCIRkfJylRN64GQZu0yWPDBMcRjxc2TJA2M3dNdhsvgJO2QJxIpRYMUosGIUWDEKrBgFVowCK0aBFaOgijTQeSxC/W9ePNA9oyvT1Hf/RyoXyiZiOl8RMk8eTKZOjIhZ39miibU5WsisF2xXTnK0pJKXhUyaOma/k3IAHhwCVLjflTqttEdMfOlOTgoYWb6z7z3lEDnGa0xdqKaodqWWo11M92tnqbG6Th5DSt+Jd4q+t5RytNeYxup6mmi5Qnc3l+kNIajYiHEpVc3RLsalpbYh7xxFGYuI9aFqurkyI6+1HzmViy4vpZBjTIwfPCS67/RORp6jQA89/IlGznRQpPbVPe1NyymZmOjrF6jr3veyBuE4LcRMi3QLkuJiUk7JxKAbbz9yWhTjd+U5ag/qESIHUYQUC6pHpuRoEeMdt6hY2E7T24ca8+6JL01RfPmXfQeDJuSEGj75MEbPmLmtVcLLzrbDjco2y9ub9O3Kr1TNquj2+u/02R/jNPX40ZPUaqN0dou+epSQ5zXO3r8fijkK9UR6nnSgLZUGH/4sP6PH2wK/7xIPjKjpX7wtUwYCuhvO5tIHtaZt7Wua3FikS6K3CqLt8AkpZ7852NOgtcYUklMvBPSfvCR/gkAhBhFfN++C7h7FW4cUoHXk23msWcoZfDC5b1vUFbe24KFRP1BLgsY1uqUArRGzGxUXc0VSlVbgyr0xIUb0Rk41/bm9Ia9Nby7taWdCCtAqZvTvGZo4fkEc7S9nKPyBnHmjq+461Crrhzv4czElBWgVg0HbqBjuo9CCQnIwhnHHNLlrnmOTUoD2Ad54ek6K8Y89CqWVH1eKP4J0on3ZAd2t28O4ywgoyH33J4q635UCxpo+KjhleJYYmRKMr83nul1/5Ki6a+CVgskleqj2+tNC9F+kGyMreCiq3mkC5AyG3xfCUsrICZICkJYHXdN5GoyIQRFGSnnBBHLkzOVAOSopAEOAFgPpZGzNN748teca5jt+OYWkAERe40t1pBtjyw6IGDyUPw1cOZCxvvODXAIFfimTGwvi3dQ83RRjo2Jm7/8Xo+sxWIOJygFfPl45WIdxpUAAlj3xsm7yn0UyCWtODnEyBOrD5FsfK79HtKAN0slkdARhNGJ2i/BC4DqN+xoXKWc6OoIwvrQ5iAVvjxiIQopBRqmiIwjjYhARmO+MrtzNW8YsN4zWmOcJ+x9VCqwYBVaMAitGgRWjwIpRYMUosGIUWDEKICZFFh886XBiSbLkIZykHMb4LbLkw/iYU5vNYHuQVbK4pGZbo3Eneb53lfPsVbJIOOMxfMpeCbtfEGMDVOHsbrATlRvs5O041DT15XXGszGqQLIiMH5rvdbrnu/ZiimS+LyHsxA22AlTRcBFKeFXZdZ4YKrmTwRhp5AXbvMu2h27JYllb21l/42nRJ31N/gPNUpdtxAULTEAAAAASUVORK5CYII=" alt="" />
        </div>

        <div className="sales  w-full ">

          <div className='flex flex-col sm:flex-row justify-between'>
            <p className='font-semibold'>Sales</p>
            <p className='text-gray-400'> May 2022</p>

          </div>

          <p className='text-gray-400'> $230,220</p>
          <p className='text-orange-400 flex gap-2 items-center'> <GiChart /> +55% last month</p>


        </div>

      </div>


    </div>

    <div className="customers text-sm w-full bg-white rounded-lg p-2">
    <div className='flex flex-col md:flex-row items-center gap-2 w-full'>
        <div className="icon w-[5rem] ">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARLSURBVHgB7ZxNTBNBFIDfLBWhIqIgEkShRoyJieDBADfCmQS9eBQ8yM/Jn7MJmMgVualcsB7lIAfOhJPYerAcTAR/tiiSagAbNEURdpy3Zev2Z/rndra28x0ou50S+u2b9+ZNYQkk4OYrtWrrt9JLCe0klLayU01QWPgoIf4SjUw/aGt0JxpAYk8MedRLuwQm2RNVUAxQ8CugjMQKUswHA151XCPwrGikIASaNKI97ve8HzGfjogZ9Kj4xA0oUghRhvs9y/cjx/hl0Kv2UYBJkAClcHmizTWti2FTSIXCS7BZwQIk6NwHrhKMFnbcBxIdFillO5oSUFjZ6gFJFJRqnQqE1ykSE4RAK1alJpDE0qSAJCFSDAcphoMUw0GK4SDFcJBiOEgxHKQYDlIMBwfYgNOhQHt1BZxwlurHW7safAptw/zaD8gXhIu5cvIIdB2rTPhc9/EqmFreAF8wBHYjdColk4JUlzpgsLkWzhwsA7sRJgbfbDIpZnpP1YDdCBPTUVOR9liMHLujRpgYI9GmS+thJ9iJMDENGYopL7F3JSHXMRyEiVn/tZPT8VYjTMzK1nZG43HBZyfCxCxu/sxo/NvvmY23GmFiXmSw3F9iEkOsTbATYWLwjS6lGQX50DMJrUozn4Mpx2DSnV//KwbLvJOVbuNRFELFYMSkihqzvOr9Drhzrh6a2SoYH9NtKaxA+DpmNrDJfS42WoZO1+rnFli3PbMahK66Sl2WCISLSZZUzdGCvRVOH+OcIbS7Xswfewndj8Grbe6cQzuaHg0G5mjBvRlzBKHQ2S+buhhMzks5Luc5F4O7dS2HnNBxtCKuYx59vQrr2/ErXIwW7LDH3gSizmPUdLCdP5QzthiAXEIGvCoFi2mtckIL645RRLKcMPjSD72umoy2JJKBP88qLI0YlHD7bJ1+tdMByy9OC+yk/2WbAadcOkuBTLA0+WKIpysFueoK55sn6lpcUsb8YzSSK6a+yfctfj/46ceNqPxkBZaKacnwqmOU4B4vSlmIecMP332NRME9lov0NRBrFfC8GaOcW42lYrJZmeJrMBdl2wbkqjrlxUYVRg5Ol2waR6tzi0FeiGlnVSnRdEoFTq1E5d4K8kJMoumElarcEf71jJKP58zlP5dduC0f0SYC1zJTrLpg5KCoob2kjIyeb4iMM76P7ausxlIx7g9rkC34+TWKwA0to4tOlsz/q5bAiiv4fG/Bl4pcJV2DnLQEhYD8XImDFMNBiuEgxXCQYjhIMRykGA5SDAcphoMUwwHF+EESBeuRfAoQ4gNJNPqNMCiZA0kMyrRSvk9z47/tgyQMi5aJtka3Mn7BFWQH10CiQ0EZwUe9KuHdL4DAOBQ5lMLIxN4NdiLl+tFF1y1Cw7aKEgrjLEDuGodxt2K67lX7mK1hKJJbG+j5laUSfdaYILwXoCBCSQ8hBXnzLj+lBG/gNXeAFR89z8bwB/5ylJGjomYJAAAAAElFTkSuQmCC" alt="" />
        </div>

        <div className="customers  w-full ">

          <div className='flex flex-col sm:flex-row justify-between'>
            <p className='font-semibold'>Customers</p>
            <p className='text-gray-400'> May 2022</p>

          </div>

          <p className='text-gray-400'> $3,200</p>
          <p className='text-orange-400 flex gap-2 items-center'> <GiChart /> +12% last month</p>


        </div>

      </div>
      </div>

      <div className="rev text-sm w-full bg-white rounded-lg p-2">
      <div className='flex flex-col md:flex-row items-center gap-2 w-full'>
        <div className="icon w-[5rem] ">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR8SURBVHgB7Zw/jBtFFMbfjH3h7oiiICFK5HQUFCcaGoqIgi6c6RAFtxGIMtJJFCAhYiEkKJA4paBAoPMVIDpWB1WKKEWaNNEVKdLFShVFKU5J7r93J++beC17c5Ps2G82Sjw/yf9Wu7P2t2/e+2bGWkXHYNrJ6T2iFWPoLH9c4i0teqVQW/zU00qlC+n6xrF7lDfstJM2GbPOb0/TDMAC9JTSnbJAevTDo3ayxqL8SzMiCjBErdzk3YcfJ53R7cOI4UjpsCgXaYYxRq2d3Oyu4r0VhiMlUU+6z8yTZeqTU/93UyvM7vLKbYQURcD2oVJnGogW/pBQpGC+adRdrQ0tU2QMo8xZ1sUsUaTMEsp1iyJlWpoixxKFcRCFcRCFcRCFcRCFcRCFcRCFcRCFcdCkF4B6fZEa779H+t13SJ95m9Rbb9ptwOzskrl3n/Lbdyi7eYvy6zfsttq/487yiqGagABz5z6ixocfDIWoQv/KNTr6J7WC1UUtwkCEuU/b1GRRpuHov8t09OffVAfBhUGUzP/4jX2VIOeoOfju5+DREzT5Ks4fkqIAzW29hja57ZAEE8ZGyrcXREUpsOIEant4DgqEdKSUGUaORxL3ap8CcOKLz4KKUgBxmpzUg7RNwkCQSavPbjuxpdkHlP8g3ZWEmZvgCsLI9bkUAwhzyCW5D2NXsfLMTWkDjkO0XKO/L/z1m9cxByxCNhClDLpkleiDM97/6mtRhyw6JIDN9+GQ3Wwhih0mDBwxhgN46IoluRhi+HbDZyEqDMY+PmQjPwTl1/f4p84tKIxojmn4mq6R0EdOmQYtbPhkk69ndRh1r0i++2z1J+0O0pVJVBhfs3XiwpdjPyjn6nR46Q/a40TqK5C00XuhE1WFey1PQ6BMQ6C+o1rV8t1IkEnKpRWHI2f+91+eiiD4maptSk9myUbMFFMBiJgmR878rz+MRU9WMSlLT0OICpOx9/DaH1OXpWPslR8RRldMqrnnuZ+HqI9B8iS+6lVBDkFE2Dnfwbwv2ii6BbZV9TYQWRJRYbLBxHXVCpEPwh/doNwVipm/quRT+qAyosJAFLjZqqPrBc4niBBcbQiDEg1rj0GhjwvGcdLJV3z5BBPWPtMOdgllIEIhjO/QACsI0oj7GHvlJ/Qfi2nXViYfcCFCTIwHMXh1rQEhR4VaTgkijJ0fCbzEUSyjhCLYkACi7P90KYg4VpRAbRcEHSsZNl3SkTNccBM2dGWCDyIhih0tCwwIkWgPVr+vJX/Vv6iPNWyPylN4o1DVx0WtwgxPWvFvINb8zcLfQF4m4j+qHERhHERhHERhHERhHERhHERhHERhHERhHECYHkXG4KHAllZP7owRGQE3wtD8fJUiYxijU31AhNuDbFOkoHdyc31Dv5F2tzOlzlPEwtHSwautSqfSbqoMrdGsY0wH0YK3Y3cc2mt/fjE3qkMzCAJjcXNjdfi5vMODc0nS0PYGOy2aAbg0b+eZOo97xoxuV64DBgLhTiG4KUaLXi16/Nji3nG1r2kDeba8w2MDb/LkdWIBLwAAAABJRU5ErkJggg==" alt="" />
        </div>

        <div className="rev  w-full ">

          <div className='flex flex-col sm:flex-row justify-between'>
            <p className='font-semibold'>Avg Renvenue</p>
            <p className='text-gray-400'> May 2022</p>

          </div>

          <p className='text-gray-400'> $2,300</p>
          <p className='text-orange-400 flex gap-2 items-center'> <GiChart /> +210% last month</p>


        </div>

      </div>
      </div>


    </div>
  )
}

export default Sec1
