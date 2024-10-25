// import logo from './logo.svg';
// import './App.css';
// // import { Sidebar } from 'react-pro-sidebar';
// =import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Brands from './Pages/Brands/Brands.tsx';
// import Categories from './Pages/Categories/Categories.tsx';
// import Home from './Pages/Home/Home.tsx';
// import Users from './Pages/Users/Users.jsx';
// import MainLayout from './components/MainLayout/MainLayout.jsx';
// import Login from './Pages/Login/Login.jsx';
// import SignUp from './Pages/SignUp/SignUp.jsx';
// import { useEffect, useState } from 'react';
// import { jwtDecode } from "jwt-decode";
// import { Routes, Route } from 'react-router-dom';
// import PrivateRoutes from './utils/PrivateRoutes.jsx'
// import {PublicRoutes} from './utils/PrivateRoutes.jsx'
// import Products from './Pages/Products/Products.tsx';
// import CreateProduct from './Pages/Products/CreateProduct/CreateProduct.tsx';

// // https://admin.pixelstrap.net/mofi/template/add-products.html
// function App() {
//   let [userData,setUserData]= useState({})

//   let getUserToken=()=>{
//     let token = localStorage.getItem('loginToken');
//     let data = jwtDecode(token);
//     setUserData(data)
//     console.log(userData);

//   }

//   let LogOut=()=>{
//     localStorage.removeItem('TokenGame');
//     setUserData(null);
//     <Navigate to={'/login'}/>
//   }


//   useEffect(()=>{
//     if(localStorage.getItem('loginToken')!=null){
//       getUserToken()
//     }
//   },[])


//   // const router = createBrowserRouter([
//   //   {
//   //     path: "/", // Root path
//   //     element: <MainLayout LogOut={LogOut} />, // Main layout with LogOut prop
//   //     children: [
//   //       {
//   //         path: "/", // Home page
//   //         element: <Home />,
//   //       },
//   //       {
//   //         path: "users", // "/users" path (no leading slash needed in children)
//   //         element: <Users />,
//   //       },
//   //       {
//   //         path: "brands", // "/brands" path
//   //         element: <Brands />,
//   //       },
//   //       {
//   //         path: "categories", // "/categories" path
//   //         element: <Categories />,
//   //       },
//   //       {
//   //         path: "products", // "/products" path
//   //         element: <Products />,
//   //         children: [
//   //           {
//   //             path: "CreateProduct", // "/products/CreateProduct"
//   //             element: <CreateProduct />,
//   //           },
//   //         ],
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     path: "/login", // Login page
//   //     element: <Login getUserToken={getUserToken} />,
//   //   },
//   //   {
//   //     path: "/signUp", // SignUp page
//   //     element: <SignUp />,
//   //   },
//   // ])
//   const router = createBrowserRouter([
//     {
//       path: "/", 
//       element: <MainLayout LogOut={LogOut} />, // MainLayout wraps protected routes
//       children: [
//         {
//           path: "/", // Home page
//           element: <Home />,
//         },
//         {
//           path: "users", // Protected route
//           element: <PrivateRoutes element={<Users />} />,
//         },
//         {
//           path: "brands", // Protected route
//           element: <PrivateRoutes element={<Brands />} />,
//         },
//         {
//           path: "categories", // Protected route
//           element: <PrivateRoutes element={<Categories />} />,
//         },
//         {
//           path: "products", // Protected route with nested children
//           element: <PrivateRoutes element={<Products />} />,
//           // children: [
//           //   {
//           //     path: "CreateProduct",
//           //     element: <PrivateRoutes element={<CreateProduct />} />,
//           //   },
//           // ],
//         },
//         {
//           path: "products/CreateProduct", // Protected route
//           element: <PrivateRoutes element={<CreateProduct />} />,
//         },
//       ],
//     },
//     {
//       path: "/login", // Public login page
//       element: <Login getUserToken={getUserToken} />,
//     },
//     {
//       path: "/signUp", // Public sign-up page
//       element: <SignUp />,
//     },
//   ]);
  
  
//   return (
//     // <Routes>
//     //   <Route element={<PrivateRoutes />}>
//     //     <Route element={<Home />} path='/' />
//     //     <Route element={<Brands />} path='/brands' />
//     //     <Route element={<Products />} path='/products' />
//     //     <Route element={<CreateProduct />} path='/products/createProduct' />
//     //     <Route element={<Categories />} path='/categories' />
//     //     <Route element={<Users />} path='/users' />
//     //     {/* <Route element={<ErrorComp />} path='*' /> */}
//     //   </Route>
//     //   <Route element={<Login />} path='/login' />

//     //   <Route element={<PublicRoutes />}>
//     //     <Route element={<Login />} path='/login' />
//     //     <Route element={<Login />} path='/register' />
//     //     <Route element={<Home />} path='/' />
//     //   </Route>

//     // </Routes>

//     <RouterProvider router={router}/>
  
//   );
// }

// export default App;


import './App.css';
// import { Sidebar } from 'react-pro-sidebar';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Brands from './Pages/Brands/Brands.tsx';
import Categories from './Pages/Categories/Categories.tsx';
import Home from './Pages/Home/Home.tsx';
import Users from './Pages/Users/Users.tsx';
// import MainLayout from './components/MainLayout/MainLayout.tsx';
import Login from './Pages/Login/Login.tsx';
import SignUp from './Pages/SignUp/SignUp.tsx';
import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes.tsx'
import {PublicRoutes} from './utils/PrivateRoutes.tsx'
import Products from './Pages/Products/Products.tsx';
// import CreateProduct from './Pages/Products/CreateProduct/CreateProduct';
import { useNavigate } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout.tsx';
import CreateProduct from './Pages/Products/CreateProduct/CreateProduct.tsx';

// https://admin.pixelstrap.net/mofi/template/add-products.html
interface UserData {
  sub?: string;
  jti?: string;
  email?: string;
  ID?: string;
  Language?: string;
  UserName?: string;
  FirstName?: string;
  LastName?: string;
  FullName?: string;
  Permission?: string[]; // Permissions are an array of strings
  roles?: string;
  exp?: number;
  iss?: string;
  aud?: string;
}

function App() {
  let [userData,setUserData]= useState<UserData | null>({})

  let getUserToken = () => {
    let token: string | null = localStorage.getItem('loginToken');
  
    if (token) {
      // Only decode if token is not null
      let data = jwtDecode(token);
    
      // Transform 'aud' to be a string if it's an array
      const userData: UserData = {
        ...data,
        aud: Array.isArray(data.aud) ? data.aud[0] : data.aud, // Take the first element if it's an array
      };
    
      setUserData(userData);
      console.log(userData);
    } else {
      console.log('No token found');
    }
  };

 let LogOut = () => {
    const navigate = useNavigate(); // useNavigate hook for programmatic navigation
  
    localStorage.removeItem('TokenGame');
    setUserData(null);
    
    // Navigate to login page after logout
    navigate('/login');
  };

  useEffect(()=>{
    if(localStorage.getItem('loginToken')!=null){
      getUserToken()
    }
  },[])


  // const router = createBrowserRouter([
  //   {
  //     path: "/", // Root path
  //     element: <MainLayout LogOut={LogOut} />, // Main layout with LogOut prop
  //     children: [
  //       {
  //         path: "/", // Home page
  //         element: <Home />,
  //       },
  //       {
  //         path: "users", // "/users" path (no leading slash needed in children)
  //         element: <Users />,
  //       },
  //       {
  //         path: "brands", // "/brands" path
  //         element: <Brands />,
  //       },
  //       {
  //         path: "categories", // "/categories" path
  //         element: <Categories />,
  //       },
  //       {
  //         path: "products", // "/products" path
  //         element: <Products />,
  //         children: [
  //           {
  //             path: "CreateProduct", // "/products/CreateProduct"
  //             element: <CreateProduct />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     path: "/login", // Login page
  //     element: <Login getUserToken={getUserToken} />,
  //   },
  //   {
  //     path: "/signUp", // SignUp page
  //     element: <SignUp />,
  //   },
  // ])


const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout LogOut={LogOut} />, // MainLayout wraps protected routes
    children: [
      {
        path: "/", // Home page
        element: <Home />,
      },
      {
        path: "users", // Protected route
        element: <PrivateRoutes element={<Users />} />,
      },
      {
        path: "brands", // Protected route
        element: <PrivateRoutes element={<Brands />} />,
      },
      {
        path: "categories", // Protected route
        element: <PrivateRoutes element={<Categories />} />,
      },
      {
        path: "products", // Protected route with nested children
        element: <PrivateRoutes element={<Products />} />,
        children: [
          {
            path: "CreateProduct", // Protected nested route
            element: <PrivateRoutes element={<CreateProduct />} />,
          },
        ],
      },
    ],
  },
  {
    path: "/login", // Public login page
    element: <Login getUserToken={getUserToken} />,
  },
  {
    path: "/signUp", // Public sign-up page
    element: <SignUp />,
  },
]);

  
  
  return (
    // <Routes>
    //   <Route element={<PrivateRoutes />}>
    //     <Route element={<Home />} path='/' />
    //     <Route element={<Brands />} path='/brands' />
    //     <Route element={<Products />} path='/products' />
    //     <Route element={<CreateProduct />} path='/products/createProduct' />
    //     <Route element={<Categories />} path='/categories' />
    //     <Route element={<Users />} path='/users' />
    //     {/* <Route element={<ErrorComp />} path='*' /> */}
    //   </Route>
    //   <Route element={<Login />} path='/login' />

    //   <Route element={<PublicRoutes />}>
    //     <Route element={<Login />} path='/login' />
    //     <Route element={<Login />} path='/register' />
    //     <Route element={<Home />} path='/' />
    //   </Route>

    // </Routes>

    <RouterProvider router={router}/>
  
  );
}

export default App;

