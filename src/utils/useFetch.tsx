import axios from 'axios'
import React, { useEffect, useState } from 'react'

// type Props = {
//     endpoint: string,
//     method: string
//     body: {},
// }

//http://ecomerce.runasp.net/swagger/index.html

const useFetch = (method,endpoint) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    let api = 'http://ecomerce.runasp.net/api/' + endpoint;
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
                            // "Access-Control-Allow-Origin": "*",
                            // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
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
                            'Content-Type': 'multipart/form-data',
                            // "Content-Type":'application/json-patch+json',
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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTeXN0ZW0iLCJqdGkiOiI1ZjdmMDM5Ni1iOWNhLTRkOGItOTEyYS1kNDY5ZGQ4NTZhOTEiLCJlbWFpbCI6IlN5c3RlbSIsIklEIjoiMmFmMjY1NzEtMmNjNC00Y2M1LThiODgtNjgzOWU1MWQ5ZTQ3IiwiTGFuZ3VhZ2UiOiJhci1FRyIsIlVzZXJOYW1lIjoiU3lzdGVtIiwiRmlyc3ROYW1lIjoiU3lzdGVtIiwiTGFzdE5hbWUiOiJTeXN0ZW0iLCJGdWxsTmFtZSI6IlN5c3RlbSBTeXN0ZW0iLCJQZXJtaXNzaW9uIjpbIlBlcm1pc3Npb25zLlByb2R1Y3RzLlZpZXciLCJQZXJtaXNzaW9ucy5Qcm9kdWN0cy5DcmVhdGUiLCJQZXJtaXNzaW9ucy5Qcm9kdWN0cy5VcGRhdGUiLCJQZXJtaXNzaW9ucy5Qcm9kdWN0cy5EZWxldGUiLCJQZXJtaXNzaW9ucy5Hb3Zlcm5vcmF0ZS5WaWV3IiwiUGVybWlzc2lvbnMuR292ZXJub3JhdGUuQ3JlYXRlIiwiUGVybWlzc2lvbnMuR292ZXJub3JhdGUuVXBkYXRlIiwiUGVybWlzc2lvbnMuR292ZXJub3JhdGUuRGVsZXRlIiwiUGVybWlzc2lvbnMuQXJlYS5WaWV3IiwiUGVybWlzc2lvbnMuQXJlYS5DcmVhdGUiLCJQZXJtaXNzaW9ucy5BcmVhLlVwZGF0ZSIsIlBlcm1pc3Npb25zLkFyZWEuRGVsZXRlIiwiUGVybWlzc2lvbnMuQ29sb3IuVmlldyIsIlBlcm1pc3Npb25zLkNvbG9yLkNyZWF0ZSIsIlBlcm1pc3Npb25zLkNvbG9yLlVwZGF0ZSIsIlBlcm1pc3Npb25zLkNvbG9yLkRlbGV0ZSIsIlBlcm1pc3Npb25zLlZvdWNoZXIuVmlldyIsIlBlcm1pc3Npb25zLlZvdWNoZXIuQ3JlYXRlIiwiUGVybWlzc2lvbnMuVm91Y2hlci5VcGRhdGUiLCJQZXJtaXNzaW9ucy5Wb3VjaGVyLkRlbGV0ZSIsIlBlcm1pc3Npb25zLkJyYW5kLlZpZXciLCJQZXJtaXNzaW9ucy5CcmFuZC5DcmVhdGUiLCJQZXJtaXNzaW9ucy5CcmFuZC5VcGRhdGUiLCJQZXJtaXNzaW9ucy5CcmFuZC5EZWxldGUiLCJQZXJtaXNzaW9ucy5DYXRlZ29yeS5WaWV3IiwiUGVybWlzc2lvbnMuQ2F0ZWdvcnkuQ3JlYXRlIiwiUGVybWlzc2lvbnMuQ2F0ZWdvcnkuVXBkYXRlIiwiUGVybWlzc2lvbnMuQ2F0ZWdvcnkuRGVsZXRlIiwiUGVybWlzc2lvbnMuU3ViQ2F0ZWdvcnkuVmlldyIsIlBlcm1pc3Npb25zLlN1YkNhdGVnb3J5LkNyZWF0ZSIsIlBlcm1pc3Npb25zLlN1YkNhdGVnb3J5LlVwZGF0ZSIsIlBlcm1pc3Npb25zLlN1YkNhdGVnb3J5LkRlbGV0ZSIsIlBlcm1pc3Npb25zLlVuaXQuVmlldyIsIlBlcm1pc3Npb25zLlVuaXQuQ3JlYXRlIiwiUGVybWlzc2lvbnMuVW5pdC5VcGRhdGUiLCJQZXJtaXNzaW9ucy5Vbml0LkRlbGV0ZSIsIlBlcm1pc3Npb25zLlN0YXR1cy5WaWV3IiwiUGVybWlzc2lvbnMuU3RhdHVzLkNyZWF0ZSIsIlBlcm1pc3Npb25zLlN0YXR1cy5VcGRhdGUiLCJQZXJtaXNzaW9ucy5TdGF0dXMuRGVsZXRlIiwiUGVybWlzc2lvbnMuUmV2aWV3LlZpZXciLCJQZXJtaXNzaW9ucy5SZXZpZXcuQ3JlYXRlIiwiUGVybWlzc2lvbnMuUmV2aWV3LlVwZGF0ZSIsIlBlcm1pc3Npb25zLlJldmlldy5EZWxldGUiLCJQZXJtaXNzaW9ucy5TZXR0aW5nLlZpZXciLCJQZXJtaXNzaW9ucy5TZXR0aW5nLlVwZGF0ZSIsIlBlcm1pc3Npb25zLkNvbnRhY3RVcy5WaWV3IiwiUGVybWlzc2lvbnMuQ29udGFjdFVzLkNyZWF0ZSIsIlBlcm1pc3Npb25zLkNvbnRhY3RVcy5VcGRhdGUiLCJQZXJtaXNzaW9ucy5Db250YWN0VXMuUmVwbHkiLCJQZXJtaXNzaW9ucy5Db250YWN0VXMuRGVsZXRlIiwiUGVybWlzc2lvbnMuRXhwZW5zZS5WaWV3IiwiUGVybWlzc2lvbnMuRXhwZW5zZS5DcmVhdGUiLCJQZXJtaXNzaW9ucy5FeHBlbnNlLlVwZGF0ZSIsIlBlcm1pc3Npb25zLkV4cGVuc2UuRGVsZXRlIiwiUGVybWlzc2lvbnMuU2xpZGVyLlZpZXciLCJQZXJtaXNzaW9ucy5TbGlkZXIuQ3JlYXRlIiwiUGVybWlzc2lvbnMuU2xpZGVyLlVwZGF0ZSIsIlBlcm1pc3Npb25zLlNsaWRlci5EZWxldGUiLCJQZXJtaXNzaW9ucy5WZW5kb3IuVmlldyIsIlBlcm1pc3Npb25zLlZlbmRvci5DcmVhdGUiLCJQZXJtaXNzaW9ucy5WZW5kb3IuVXBkYXRlIiwiUGVybWlzc2lvbnMuVmVuZG9yLkRlbGV0ZSIsIlBlcm1pc3Npb25zLkZlZWRiYWNrLlZpZXciLCJQZXJtaXNzaW9ucy5GZWVkYmFjay5DcmVhdGUiLCJQZXJtaXNzaW9ucy5GZWVkYmFjay5VcGRhdGUiLCJQZXJtaXNzaW9ucy5GZWVkYmFjay5EZWxldGUiLCJQZXJtaXNzaW9ucy5DYXJ0LlZpZXciLCJQZXJtaXNzaW9ucy5DYXJ0LkNyZWF0ZSIsIlBlcm1pc3Npb25zLkNhcnQuVXBkYXRlIiwiUGVybWlzc2lvbnMuQ2FydC5EZWxldGUiLCJQZXJtaXNzaW9ucy5Qcm9kdWN0LlZpZXciLCJQZXJtaXNzaW9ucy5Qcm9kdWN0LkNyZWF0ZSIsIlBlcm1pc3Npb25zLlByb2R1Y3QuVXBkYXRlIiwiUGVybWlzc2lvbnMuUHJvZHVjdC5EZWxldGUiLCJQZXJtaXNzaW9ucy5PcmRlci5WaWV3IiwiUGVybWlzc2lvbnMuT3JkZXIuQ3JlYXRlIiwiUGVybWlzc2lvbnMuT3JkZXIuVXBkYXRlIiwiUGVybWlzc2lvbnMuT3JkZXIuRGVsZXRlIiwiUGVybWlzc2lvbnMuU2l6ZS5WaWV3IiwiUGVybWlzc2lvbnMuU2l6ZS5DcmVhdGUiLCJQZXJtaXNzaW9ucy5TaXplLlVwZGF0ZSIsIlBlcm1pc3Npb25zLlNpemUuRGVsZXRlIiwiUGVybWlzc2lvbnMuSW52b2ljZS5WaWV3IiwiUGVybWlzc2lvbnMuSW52b2ljZS5DcmVhdGUiLCJQZXJtaXNzaW9ucy5JbnZvaWNlLlVwZGF0ZSIsIlBlcm1pc3Npb25zLkludm9pY2UuRGVsZXRlIiwiUGVybWlzc2lvbnMuU3RvY2suVmlldyIsIlBlcm1pc3Npb25zLlN0b2NrLkNyZWF0ZSIsIlBlcm1pc3Npb25zLlN0b2NrLlVwZGF0ZSIsIlBlcm1pc3Npb25zLlN0b2NrLkRlbGV0ZSIsIlBlcm1pc3Npb25zLlJvbGUuVmlldyIsIlBlcm1pc3Npb25zLlJvbGUuQ3JlYXRlIiwiUGVybWlzc2lvbnMuUm9sZS5VcGRhdGUiLCJQZXJtaXNzaW9ucy5Sb2xlLkRlbGV0ZSJdLCJyb2xlcyI6IlN1cGVyIEFkbWluIiwiZXhwIjoxNzM1MjM4NDEzLCJpc3MiOiJFLWNvbW1lcmNlQXBpIiwiYXVkIjoiRS1jb21tZXJjZVVzZXJzIn0.tWvv0Bt_MJu6WCAtS7MhRjZRBkFKbKlBSzicEpkw948