import { createBrowserRouter ,Outlet } from "react-router-dom";
import UserRouter from "./userRouter";
import Layout from "../layout/main";
import NotFound from "../layout/notFound";


const Router = createBrowserRouter([

    {

        element: <Layout/>,
        children: UserRouter

    },

    {
        element: <Outlet/>,
        children: [

            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }
    
    
])

export default Router