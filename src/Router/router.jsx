import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Login from "../page/Authentication/Login"
import PrivateRoute from "../Components/ComponentPrivateRoute/PrivateRoute"
import Sidebar from "../Components/Layout_Components/Sidebar"
import { Outbound } from "../page/Outbound/Outbound"
import {Inbound} from "../page/Inbound/Inbound"
import { ReturnItem } from "../page/Returnbound/Returnbound"
import { Home } from "../page/Home/Home"


const router = createBrowserRouter([
    {
        path:"/",
        element:<PrivateRoute/>,
        children:[
            {
                path:"", element: <App/>,
                children: [
                    {path:"outbound", element: <Outbound/>},
                    {path:"inbound", element: <Inbound/>},
                    {path:"home", element: <Home/>},
                    {path:"returnitem", element: <ReturnItem/>},
                ],
            },
        ],
    },
    {path:"/login", element: <Login/>},
    {path:"/sidebar", element: <Sidebar/>},
])

export default router







