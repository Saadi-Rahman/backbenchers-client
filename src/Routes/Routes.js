import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import Checkout from "../Pages/Checkout/Checkout";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
              },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://backbenchers-server.vercel.app/course')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://backbenchers-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/Course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`https://backbenchers-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '*',
        element: 
        <div className='d-flex justify-content-center align-items-center flex-column vh-100'>
          <p className='display-1 fw-bold text-navy'>404</p>
          <p className='fs-4 fw-bold'>Not Found!</p>
          <p>Woops!! Looks like this page doesn't exist!</p>
        </div>
      }
])