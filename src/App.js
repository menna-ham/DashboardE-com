import logo from './logo.svg';
import './App.css';
// import { Sidebar } from 'react-pro-sidebar';
import SideBarComp from './components/Sidebar/SideBarComp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Brands from './Pages/Brands/Brands';
import Categories from './Pages/Categories/Categories';
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import MainLayout from './components/MainLayout/MainLayout';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/brands",
          element: <Brands />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
      ],
    },
    {
      path:'/login',
      element:<Login/>
    },
    
    {
      path:'/signin',
      element:<SignIn/>
    },
  ]);
  return (
    <RouterProvider router={router}/>
  
  );
}

export default App;
