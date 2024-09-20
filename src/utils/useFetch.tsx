import axios from 'axios'
import React, { useEffect, useState } from 'react'

// type Props = {
//     endpoint: string,
//     method: string
//     body: {},
// }

const useFetch = (method,endpoint) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    let api = 'https://ecomerce.runasp.net/api/' + endpoint;
    let loginToken = localStorage.getItem('loginToken')

    let fetchData = async (body=null) => {
        setLoading(true);
        setError(null);

        try {
            let response;

            switch (method) {
                case 'get':
                    response = await axios.get(api, {
                        headers: {
                            Authorization: `Bearer ${loginToken}`,
                            "Content-Type":'text/plain',
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                        }
                    });
                    console.log(response)
                    setData(response.data);
                    
                    break;

                case 'post':
                    console.log()
                    response = await axios.post(api,body,{
                        headers: {
                            Authorization: `Bearer ${loginToken}`,
                            "Content-Type":'application/json-patch+json',
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                        },
                    });
                    // response = await axios.post(api,{
                    //     data:{
                    //         body:body
                    //     },
                    //     headers: {
                    //         Authorization: `Bearer ${loginToken}`,
                    //         "Content-Type":'multipart/form-data'
                    //     },
                    // });

                //    response= await axios({
                //         method:'post',
                //         url:api,
                //         headers: {
                //             Authorization: `Bearer ${loginToken}`,
                //             "Content-Type":'multipart/form-data'
                //         },
                //         data:body
                //     })
                    setData(response.data);
                    console.log(response);
                    
                    break;

                case 'put':
                    response = await axios.put(api, body, {
                        headers: {
                            Authorization: `Bearer ${loginToken}`,
                             "Content-Type":'multipart/form-data'
                        }
                    });
                    setData(response.data);
                    break;

                case 'delete':
                    console.log('body',body)
                    response = await axios.delete(api,{
                        headers: {
                            Authorization: `Bearer ${loginToken}`
                        },
                        data:{
                           ID:body
                        }
                    });
                    setData(response.data);
                    break;

                default:
                    break;
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    // useEffect(()=>{
    //     fetchData();
    // },[])
    useEffect(() => {
        if (method === 'get') {
            fetchData();
            
        }
    }, [method, endpoint]);

    return { data, error, loading, fetchData };

    // useEffect(() => {
    //     (
    //         async function () {
    //             setLoading(true);
    //             setError(null);

    //             try {
    //                 let response;
    //                 setLoading(true)
    //                 switch (method) {
    //                     case 'get':
    //                         response = await axios.get(api,{headers:{
    //                             Authorization:`Bearer ${loginToken}`
    //                           }})
    //                           console.log(response.data)
    //                         setData(response.data)
    //                         break;

    //                     case 'post':
    //                         response = await axios.post(api,{headers:{
    //                             Authorization:`Bearer ${loginToken}`
    //                           }})
                              
    //                         setData(response.data)

    //                         break;

    //                     case 'put':

    //                         break;

    //                     case 'delete':

    //                         break;


    //                     default:
    //                         break;
    //                 }

    //             } catch (err) {
    //                 setError(err)
    //             } finally {
    //                 setLoading(false)
    //             }
    //         }
    //     )()
    // }, [api])

    // return { data, error, loading }
}

export default useFetch