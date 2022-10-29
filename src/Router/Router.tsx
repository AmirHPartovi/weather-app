import {createBrowserRouter} from "react-router-dom";
import Layout from '../Components/Layout/LayoutMain'
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
      {
        index:true,
        element:<Home/>
      }
    ]

      
    },
  ]);


  export default router