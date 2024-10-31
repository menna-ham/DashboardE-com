// // utils/fetchData.ts
// export async function fetchData<T>(
//     method: 'GET' | 'POST' | 'PUT' | 'DELETE',
//     url: string,
//     body?: any
//   ): Promise<T> {
//     const options: RequestInit = {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: body ? JSON.stringify(body) : undefined,
//     };
  
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }
//     return (await response.json()) as T;
//   }
  
// import axios from 'axios';

// interface FetchDataParams {
//   method: 'get' | 'post' | 'put' | 'delete';
//   endpoint: string;
//   body?: any;
// }

// interface FetchDataResponse<T> {
//   data: T | null;
//   error: any | null;
//   loading: boolean;
// }

// const fetchData = async <T>(p0: string, p1: string, { method, endpoint, body = null }: FetchDataParams): Promise<FetchDataResponse<T>> => {
//   const api = `https://ecomerce.runasp.net/api/${endpoint}`;
//   const loginToken = localStorage.getItem('loginToken');

//   let data: T | null = null;
//   let error = null;
//   let loading = true;

//   try {
//     let response;

//     switch (method) {
//       case 'get':
//         response = await axios.get(api, {
//           headers: {
//             Authorization: `Bearer ${loginToken}`,
//             'Content-Type': 'text/plain',
//           },
//         });
//         data = response.data;
//         break;

//       case 'post':
//         response = await axios.post(api, body, {
//           headers: {
//             Authorization: `Bearer ${loginToken}`,
//             'Content-Type': 'multipart/form-data',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//           },
//         });
//         data = response.data;
//         break;

//       case 'put':
//         response = await axios.put(api, body, {
//           headers: {
//             Authorization: `Bearer ${loginToken}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         data = response.data;
//         break;

//       case 'delete':
//         response = await axios.delete(api, {
//           headers: {
//             Authorization: `Bearer ${loginToken}`,
//           },
//           data: { ID: body },
//         });
//         data = response.data;
//         break;

//       default:
//         throw new Error('Invalid method');
//     }
//   } catch (err: any) {
//     error = err;
//   } finally {
//     loading = false;
//   }

//   return { data, error, loading };
// };

// export default fetchData;

import axios from 'axios';

interface FetchDataResponse<T> {
  data: T | null;
  error: any | null;
  loading: boolean;
}

const fetchData = async <T>(
  method: 'get' | 'post' | 'put' | 'delete',
  endpoint: string,
  body?: any // body is now optional
): Promise<FetchDataResponse<T>> => {
  const api = `https://ecomerce.runasp.net/api/${endpoint}`;
  const loginToken = localStorage.getItem('loginToken');

  let data: T | null = null;
  let error = null;
  let loading = true;

  try {
    let response;

    switch (method) {
      case 'get':
        response = await axios.get(api, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
            'Content-Type': 'text/plain',
          },
        });
        data = response.data;
        break;

      case 'post':
        response = await axios.post(api, body, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        });
        data = response.data;
        break;

      case 'put':
        response = await axios.put(api, body, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        data = response.data;
        break;

      case 'delete':
        response = await axios.delete(api, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          data: { ID: body },
        });
        data = response.data;
        break;

      default:
        throw new Error('Invalid method');
    }
  } catch (err: any) {
    error = err;
  } finally {
    loading = false;
  }

  return { data, error, loading };
};

export default fetchData;
