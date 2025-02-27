import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminPanel from './components/AdminPanel.jsx'
import PostBlog from './components/PostBlog.jsx'
import ManageBlogs from './components/ManageBlogs.jsx'
import UserData from './components/UserData.jsx'
import Blogs from './components/Blogs.jsx'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import Calculator from './components/Calculator.jsx'
import ContactUs from './components/ContactUs.jsx'
import ServicePage from './components/ServicePage.jsx'
import SignUp from './components/SignUp.jsx'
import Signin from './components/Signin.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
const router = createBrowserRouter([
  {
    path:'/', element: <App/> , children:[
      {path:'/', element:<Home/>},
      {path:'/about', element:<AboutUs/>},
      {path:'/calculator', element:<Calculator/>},
      {path:'/contact', element:<ContactUs/>},
      {path:'/blogs', element:<Blogs/>},
      {path:'/servicepage', element:<ServicePage/>},
    ]
  },
  {
    path: '/admin',
    element: <ProtectedRoute />, // Protected Route Wrapper
    children: [
      {path:'', element: <AdminPanel/>, children:[
        {path: '', element: <UserData />},
        { path: 'post-blog', element: <PostBlog /> },
        { path: 'manage', element: <ManageBlogs /> },
        { path: 'view-users', element: <UserData /> },
      ]},
    ]
  },
  {
    path :'/sign-up', element:<SignUp/>,
  },
  {
    path :'/sign-in', element:<Signin/>,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
