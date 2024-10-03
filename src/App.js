import logo from './logo.svg';
import './App.css';
// import { Sidebar } from 'react-pro-sidebar';
import SideBarComp from './components/Sidebar/SideBarComp';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Brands from './Pages/Brands/Brands.tsx';
import Categories from './Pages/Categories/Categories';
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import MainLayout from './components/MainLayout/MainLayout';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes.jsx'
import {PublicRoutes} from './utils/PrivateRoutes.jsx'
import Products from './Pages/Products/Products.tsx';
import CreateProduct from './Pages/Products/CreateProduct/CreateProduct.tsx';

// https://admin.pixelstrap.net/mofi/template/add-products.html
function App() {
  let [userData,setUserData]= useState({})

  let getUserToken=()=>{
    let token = localStorage.getItem('loginToken');
    let data = jwtDecode(token);
    setUserData(data)
    console.log(userData);

  }

  let LogOut=()=>{
    localStorage.removeItem('TokenGame');
    setUserData(null);
    <Navigate to={'/login'}/>
  }


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
          // children: [
          //   {
          //     path: "CreateProduct",
          //     element: <PrivateRoutes element={<CreateProduct />} />,
          //   },
          // ],
        },
        {
          path: "products/CreateProduct", // Protected route
          element: <PrivateRoutes element={<CreateProduct />} />,
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
