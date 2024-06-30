import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {
    url: string,
    method: string
    endpoint: string,
    body: {}
}

const useFetch = ({url,method,endpoint,body}: Props) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    let api = url + endpoint;
    let loginToken = localStorage.getItem('loginToken')
    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    switch (method) {
                        case 'get':
                            const response = await axios.get(api,{headers:{
                                Authorization:`Bearer ${loginToken}`
                              }})
                            setData(response.data)
                            break;

                        case 'post':

                            break;

                        case 'put':

                            break;

                        case 'delete':

                            break;


                        default:
                            break;
                    }

                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }
}

export default useFetch